import * as Yup from 'yup'

const signupValidationSchema = Yup.object({
  fullName: Yup.string()
    .matches(/^[A-ZА-Я][a-zа-я]+ [A-ZА-Я][a-zа-я]/, 'Have to start with capital letter')
    .min(2, 'Full name is too short')
    .matches(/[^-\s]$/gm, 'Can\'t ends on "-" and whitespace')
    .max(50, 'Full name is too long')
    .required(),
  email: Yup.string().email('Invalid email address').required(),
  password: Yup.string()
    .matches(/^\S*$/, "Can't contain whitespace")
    .min(6, 'min length 6')
    .max(30, 'max length 30')
    .required(),
})

export default signupValidationSchema
