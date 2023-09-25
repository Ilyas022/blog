import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import userModel from '../models/user.js'
import jwt from 'jsonwebtoken'

export const signUp = async (req: Request, res: Response) => {
  try {
    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const protocol = req.protocol
    const hostname = req.hostname
    const serverUrl = `${protocol}://${hostname}`

    const doc = new userModel({
      email: req.body.email,
      fullName: req.body.fullName,
      avatarImg: req.file?.filename ? `${serverUrl}/uploads/${req.file.filename}` : '',
      passwordHash: hash,
      posts: [],
      about: "Hello, I'm a new user. Please be polite to me :)",
    })

    const user = await doc.save()

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123',
      {
        expiresIn: '30d',
      }
    )

    const { fullName, email, avatarImg, id, timestamp } = user

    res.json({ fullName, email, avatarImg, id, timestamp, token })
  } catch (err) {
    res.status(500).json({
      message: 'Неудалось зарегистрироваться',
    })
  }
}

export const signIn = async (req: Request, res: Response) => {
  try {
    const user = await userModel.findOne({ email: req.body.email })

    if (!user) {
      return res.status(404).json({
        message: 'Пользователь не найден',
      })
    }

    const isValidPass = await bcrypt.compare(req.body.password, user.passwordHash)
    if (!isValidPass) {
      return res.status(400).json({
        message: 'Неверный логин или пароль',
      })
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123',
      {
        expiresIn: '30d',
      }
    )

    const { fullName, email, avatarImg, id, timestamp } = user

    res.json({ fullName, email, avatarImg, id, timestamp, token })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Неудалось авторизоваться',
    })
  }
}

export const getMe = async (req: Request, res: Response) => {
  try {
    const user = await userModel.findById(req.userId)

    if (!user) {
      return res.status(404).json({
        message: 'Пользователь не найден',
      })
    }

    const { fullName, email, avatarImg, id, timestamp } = user

    res.json({ fullName, email, avatarImg, id, timestamp })
  } catch (error) {
    res.status(500).json({
      message: 'Нет доступа',
    })
  }
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.findById(req.params.id).populate('posts').select('-passwordHash')

    if (!user) {
      return res.status(404).json({
        message: 'Пользователь не найден',
      })
    }

    res.json(user)
  } catch (error) {
    res.status(500).json({
      message: 'Нет доступа',
    })
  }
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find().select(['-passwordHash'])

    if (!users) {
      return res.status(404).json({
        message: 'Нет пользователей',
      })
    }

    res.json(users)
  } catch (error) {
    res.status(500).json({
      message: 'Нет доступа',
    })
  }
}
