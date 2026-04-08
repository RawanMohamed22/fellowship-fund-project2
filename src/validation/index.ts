import * as yup from "yup"

export const RegisterSchema = yup
  .object({
    username: yup.string().required("الرجاء إدخال اسم المستخدم").max(255 , "اسم المستخدم طويل جدا").min(8 , "اسم المستخدم قصير جدا"),
    email: yup.string().required("الرجاء إدخال البريد الإلكتروني").email("الرجاء إدخال عنوان بريد إلكتروني صالح"),
    id: yup.string().required("الرجاء إدخال رقم الهوية").min(14 , "رقم الهوية غير صحيح").max(14 , "رقم الهوية غير صحيح"),
    password: yup.string().required("الرجاء إدخال كلمة المرور").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، حرف كبير، حرف صغير، رقم، ورمز خاص"),
  })
  .required()

export const LoginSchema = yup
  .object({
    id: yup.string().required("الرجاء إدخال رقم الهوية").min(14 , "رقم الهوية غير صحيح").max(14 , "رقم الهوية غير صحيح"),
    password: yup.string().required("الرجاء إدخال كلمة المرور")
  })
  .required()