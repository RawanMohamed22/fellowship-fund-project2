import * as yup from "yup"

export const RegisterSchema = yup
  .object({
    username: yup.string().required("الرجاء إدخال اسم المستخدم").max(255).min(8),
    email: yup.string().required("الرجاء إدخال البريد الإلكتروني").email(),
    id: yup.string().required("الرجاء إدخال رقم الهوية").min(14).max(14),
    password: yup.string().required("الرجاء إدخال كلمة المرور"),
  })
  .required()