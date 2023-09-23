import { body } from 'express-validator'

export const signUpValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Длина меньше 5 символов').isLength({ min: 5 }),
  body('fullName', 'Укажите имя').isLength({ min: 3 }),
  body('avatarImg', 'Неверная ссылка на изображение').optional(),
]

export const signInValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Длина меньше 5 символов').isLength({ min: 5 }),
]

export const createPostValidation = [
  body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
  body('text', 'Введите текс статьи').isLength({ min: 3 }).isString(),
  body('tags', 'Неверныей формат тегов (укажите массив)').optional().isString(),
  body('imageUrl', 'Неверная ссылка на изображение').optional(),
]
