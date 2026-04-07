import * as yup from "yup"

export const RegisterSchema = yup
  .object({
    username: yup.string().required("الرجاء إدخال اسم المستخدم"),
    email: yup.string().required("الرجاء إدخال البريد الإلكتروني"),
    id: yup.string().required("الرجاء إدخال رقم الهوية"),
    password: yup.string().required("الرجاء إدخال كلمة المرور"),
  })
  .required()