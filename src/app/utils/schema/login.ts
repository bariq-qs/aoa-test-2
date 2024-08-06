import * as yup from "yup"

export const schemaLogin = yup.object({
  username: yup.string().required('Harus diisi.'),
  password: yup.string().required('Harus diisi.')
})

export type TSchemaLogin = yup.InferType<typeof schemaLogin>