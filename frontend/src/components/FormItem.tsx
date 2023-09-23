import { ErrorMessage, Field, useField } from 'formik'

interface IFormItem {
  name: string
  label: string
}

const FormItem: React.FC<IFormItem> = ({ name, label }: IFormItem): JSX.Element => {
  const [field] = useField(name)

  return (
    <div className="mb-4">
      <label>
        {label}
        <Field
          type={name === 'password' ? 'password' : null}
          className={`block border border-solid border-gray-300 w-full p-3 rounded mb-1 ${
            name === 'password' ? 'text-2xl' : null
          }`}
          {...field}
        />
      </label>
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>
  )
}

export default FormItem
