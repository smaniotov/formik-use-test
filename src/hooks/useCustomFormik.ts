import { FormikConfig, useFormik } from 'formik'

export default <Values>(params: FormikConfig<Values>) => {
  const formik = useFormik(params)
  const createProps = (fieldName: string) => {
    return {
      id: fieldName,
      name: fieldName,
      value: formik.values[fieldName],
      onChange: formik.handleChange,
      errors: formik.errors[fieldName],
    }
  }

  return { formik, createProps }
}
