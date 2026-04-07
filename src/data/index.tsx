import { Identification, LockIcon, MailIcon, UserIcon } from "../icons";
import type { IRegisterFormFields } from "../interfaces";

export const RegisterFormFields : IRegisterFormFields[] = [
    {
        placeHolder : "الأسم كامل",
        type : "text",
        Name : "username",
        icon : <UserIcon/>
    },
    {
        placeHolder : "البريد الإلكتروني",
        type : "email",
        Name : "email",
        icon : <MailIcon/>
    },
    {
        placeHolder : "الرقم القومي",
        type : "number",
        Name : "id",
        icon : <Identification/>
    },
    {
        placeHolder : "كلمة المرور",
        type : "password",
        Name : "password",
        icon : <LockIcon/>
    }
]