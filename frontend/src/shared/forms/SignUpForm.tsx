import { Form, Formik } from 'formik'
import signupValidationSchema from '../../utils/validationSchemas/signupValidationSchema'
import FormItem from '../../components/FormItem'
import cn from 'classnames'
import { useActions } from '../../store/hooks/useActions'
import { useTypedSelector } from '../../store/hooks/useTypedSelector'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

interface ISignUpForm {
  className: string
}

const SignUpForm: React.FC<ISignUpForm> = ({ className }: ISignUpForm): JSX.Element => {
  const { isLoged } = useTypedSelector((state) => state.user)
  const { signupUser } = useActions()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoged) {
      navigate('/')
    }
  }, [isLoged, navigate])

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        password: '',
        avatarImg: undefined,
        preview: '',
      }}
      validationSchema={signupValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        const data = new FormData()
        data.append('email', values.email)
        data.append('fullName', values.fullName)
        data.append('password', values.password)
        if (values.avatarImg) {
          data.append('avatarImg', values.avatarImg)
        }
        signupUser(data)
        setSubmitting(false)
      }}
    >
      {(formik) => {
        return (
          <Form className={cn(className && className)}>
            <h1 className="text-4xl text-center mb-10 font-medium">Sign up</h1>

            <div className="flex gap-8">
              <div>
                <FormItem name="fullName" label="FullName" />
                <FormItem name="email" label="Email" />
                <FormItem name="password" label="Password" />
              </div>

              <div className="flex flex-col items-center grow gap-5">
                <div>
                  <label className="p-3 block w-full mb-2 border-main border border-solid rounded hover:bg-main hover:text-white transition-colors duration-200 text-main cursor-pointer">
                    Загрузить картинку
                    <input
                      name="image"
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={(e) => {
                        const image = e.target.files[0]
                        formik.setFieldValue('avatarImg', image)
                        formik.setFieldValue('preview', URL.createObjectURL(image))
                      }}
                    />
                  </label>

                  {formik.values.preview ? (
                    <button
                      className="p-3 block w-full text-base border-red-700 hover:bg-red-500 hover:text-white transition-colors duration-200 border border-solid rounded"
                      onClick={() => {
                        formik.setFieldValue('preview', '')
                        formik.setFieldValue('image', undefined)
                      }}
                    >
                      Удалить картинку
                    </button>
                  ) : null}
                </div>

                {formik.values.preview ? (
                  <img
                    className="h-40 w-40 rounded-full object-cover"
                    src={formik.values.preview}
                    alt=""
                  />
                ) : null}
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-600 transition-colors duration-300 focus:outline-none my-1 disabled:bg-red-500 cursor-pointer"
              disabled={
                formik.values.email &&
                formik.values.fullName &&
                formik.values.password &&
                !formik.errors.email &&
                !formik.errors.fullName &&
                !formik.errors.password
                  ? false
                  : true
              }
            >
              Create Account
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default SignUpForm
