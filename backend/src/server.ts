import express from 'express'
import { Request, Response } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { createPostValidation, signInValidation, signUpValidation } from './validations.js'
import { commentController, postController, userController } from './controllers/index.js'
import multer from 'multer'
import { handleValidationErrors, checkAuth } from './utils/index.js'

async function start() {
  await mongoose
    .connect('mongodb+srv://admin:admin@cluster0.oqc7tz8.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Db ok'))
    .catch((err) => console.log('DB error', err))

  const app = express()

  const port = 3003
  app.set('port', port)

  const storage = multer.diskStorage({
    destination: (_a, _b, cb) => {
      cb(null, 'uploads')
    },
    filename: (_, file, cb) => {
      cb(null, file.originalname)
    },
  })

  const upload = multer({ storage })
  app.use(cors())
  app.use(express.json())
  app.use('/uploads', express.static('uploads'))

  // Auth
  app.post('/auth/signin', signInValidation, handleValidationErrors, userController.signIn)
  app.post(
    '/auth/signup',
    upload.single('avatarImg'),
    signUpValidation,
    handleValidationErrors,
    userController.signUp
  )
  // app.get('/auth/me', checkAuth, userController.getMe)

  app.post('/upload', checkAuth, upload.single('image'), (req: Request, res: Response) => {
    res.json({
      url: `uploads/${req.file?.originalname}`,
    })
  })
  // Posts
  app.get('/posts', postController.getAll)
  app.get('/tags', postController.getLastTags)
  app.get('/posts/:id', postController.getOne)
  app.get('/posts/user/:id', postController.getByUser)
  app.post(
    '/posts',
    checkAuth,
    upload.single('image'),
    createPostValidation,
    handleValidationErrors,
    postController.create
  )
  app.delete('/posts/:id', checkAuth, postController.remove)
  app.patch(
    '/posts/:id',
    checkAuth,
    upload.single('image'),
    createPostValidation,
    handleValidationErrors,
    postController.update
  )

  // Comments
  app.post('/comment/:id', checkAuth, commentController.create)

  // User
  app.get('/users/:id', userController.getUser)
  app.get('/users', userController.getUsers)

  app.listen(3003, () => {
    console.log('Server ok')
  })
}

start()
