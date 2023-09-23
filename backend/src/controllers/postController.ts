import { Request, Response } from 'express'
import postModel from '../models/post.js'
import userModel from '../models/user.js'

export const create = async (req: Request, res: Response) => {
  try {
    const { title, text } = req.body

    if (req.file?.filename) {
      const protocol = req.protocol
      const hostname = req.hostname
      const port = req.app.get('port')
      const serverUrl = `${protocol}://${hostname}:${port}`

      const posWithImage = new postModel({
        title: title,
        text: text,
        imageUrl: `${serverUrl}/uploads/${req.file.filename}`,
        tags: req.body.tags ? req.body.tags.split(', ') : [],
        author: req.userId,
        comments: [],
      })

      await posWithImage.save()
      await userModel.findByIdAndUpdate(req.userId, {
        $push: { posts: posWithImage },
      })

      return res.json(posWithImage)
    }

    const postWithoutImage = new postModel({
      title: title,
      text: text,
      imageUrl: '',
      tags: req.body.tags ? req.body.tags.split(', ') : [],
      author: req.userId,
      comments: [],
    })

    await postWithoutImage.save()
    await userModel.findByIdAndUpdate(req.userId, {
      $push: { posts: postWithoutImage },
    })

    res.json(postWithoutImage)
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Не удалось создать статью',
    })
  }
}

export const getAll = async (_req: Request, res: Response) => {
  try {
    const posts = await postModel
      .find()
      .sort('-createdAt')
      .populate('author', { fullName: 1, avatarImg: 1 })
      .populate('comments.author', { fullName: 1, avatarImg: 1 })

    res.json(posts)
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Не удалось получить статьи',
    })
  }
}

export const getOne = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id

    const doc = await postModel
      .findOneAndUpdate(
        {
          _id: postId,
        },
        {
          $inc: { viewsCount: 1 },
        },
        {
          returnDocument: 'after',
        }
      )
      .populate('author', {
        fullName: 1,
        avatarImg: 1,
      })
      .populate('comments.author', {
        fullName: 1,
        avatarImg: 1,
      })
      .exec()

    if (!doc) {
      return res.status(404).json({
        message: 'Статья не найдена',
      })
    }
    res.json(doc)
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Не удалось найти статью',
    })
  }
}

export const getByUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id

    const doc = await postModel
      .find({
        author: userId,
      })
      // .populate('author', {
      //   fullName: 1,
      //   avatarImg: 1,
      // })
      // .populate('comments.author', {
      //   fullName: 1,
      //   avatarImg: 1,
      // })
      .exec()

    if (!doc) {
      return res.status(404).json({
        message: 'Статья не найдена',
      })
    }
    res.json(doc)
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Не удалось найти статью',
    })
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id

    const doc = await postModel.findOneAndDelete({
      _id: postId,
      author: req.userId,
    })
    await userModel.findByIdAndUpdate(req.userId, {
      $pull: { posts: postId },
    })
    if (!doc) {
      return res.status(404).json({
        message: 'Отказано в доступе',
      })
    }
    res.json({ success: true, postId })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Не удалось найти статью',
    })
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id

    const doc = await postModel.updateOne(
      {
        _id: postId,
      },
      {
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.file?.filename ? 'http://localhost:3003/uploads/' + req.file?.filename : '',
        tags: req.body.tags ? req.body.tags.split(', ') : [],
        author: req.userId,
      }
    )

    if (!doc) {
      return res.status(404).json({
        message: 'Статья не найдена',
      })
    }
    res.json({ success: true })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Не удалось обновить статью',
    })
  }
}

export const getLastTags = async (req: Request, res: Response) => {
  try {
    const posts = await postModel.find().limit(5).exec()
    const tags: string[] = []
    posts.map((post) => post.tags.map((tag) => !tags.includes(tag) && tags.push(tag))).slice(0, 5)

    res.json(tags)
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Не получить теги',
    })
  }
}
