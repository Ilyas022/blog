import { Request, Response } from 'express'
import commentModel from '../models/comment.js'
import postModel from '../models/post.js'

// export const getLastTags = async (req: Request, res: Response) => {
//   try {
//     const posts = await postModel.find().limit(5).exec()
//     const tags: string[] = []
//     posts.map((post) => post.tags.map((tag) => !tags.includes(tag) && tags.push(tag))).slice(0, 5)

//     res.json(tags)
//   } catch (error) {
//     console.log(error)

//     res.status(500).json({
//       message: 'Не получить теги',
//     })
//   }
// }

export const create = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id
    const comment = new commentModel({
      text: req.body.text,
      author: req.userId,
    })

    const post = await postModel.findById(postId)
    if (!post) {
      return res.status(404).json({
        message: 'Пост не найден',
      })
    }

    post.comments.push(comment)
    const updatedPost = await post.save()
    const doc = await updatedPost.populate('comments.author', {
      fullName: 1,
      avatarImg: 1,
    })

    res.json(doc)
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Не удалось создать комментарий',
    })
  }
}
