import * as Yup from 'yup'

const signupValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required(),
  password: Yup.string()
    .matches(/^\S*$/, "Can't contain whitespace")
    .min(6, 'min length 6')
    .max(30, 'max length 30')
    .required(),
})

export default signupValidationSchema
