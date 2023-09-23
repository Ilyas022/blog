import { Form, Formik } from 'formik'
import FormItem from '../../components/FormItem'
import cn from 'classnames'
import loginValidationSchema from '../../utils/validationSchemas/loginValidationSchema'
import { useActions } from '../../store/hooks/useActions'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../../store/hooks/useTypedSelector'
import { useEffect } from 'react'

interface ILogInForm {
  className: string
}

const LogInForm: React.FC<ILogInForm> = ({ className }: ILogInForm): JSX.Element => {
  const { loginUser } = useActions()
  const navigate = useNavigate()
  const { isLoged } = useTypedSelector((state) => state.user)

  useEffect(() => {
    if (isLoged) {
      navigate('/')
    }
  }, [isLoged, navigate])

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        loginUser({ email: values.email, password: values.password })
        setSubmitting(false)
      }}
    >
      {(formik) => (
        <Form className={cn(className && className)}>
          <h1 className="text-4xl text-center mb-10 font-medium">Log in</h1>
          <FormItem name="email" label="Email" />
          <FormItem name="password" label="Password" />
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-600 transition-colors duration-300 focus:outline-none my-1 disabled:bg-red-500 cursor-pointer"
            disabled={
              formik.values.email &&
              formik.values.password &&
              !formik.errors.email &&
              !formik.errors.password
                ? false
                : true
            }
          >
            Log in
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default LogInForm
