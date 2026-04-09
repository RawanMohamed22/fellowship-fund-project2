import { Link } from "react-router-dom"
import { LoginFormFields } from "../data"
import InputErrorMsg from "../components/InputErrorMsg"
import { useForm, type SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginSchema } from "../validation"
import AxiosInstance from "../config/axios.config"
import type { AxiosError } from "axios"
import type { IError } from "../interfaces"
import { Spinner } from "../icons"
import { useState } from "react"

const LoginPage = () => {
    interface IFormInput {
        id: string
        password: string
    }

    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit , formState : {errors} , setError } = useForm<IFormInput>({resolver : yupResolver(LoginSchema)})
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
      try {
        setIsLoading(true)
        const res = await AxiosInstance.post("", data)
        console.log(res);
      } catch (error) {
        const errorObject = error as AxiosError<IError>
        const apiErrors = errorObject.response?.data.errors
        if(apiErrors){
          Object.keys(apiErrors).forEach((field) => {
            setError(field as keyof IFormInput, {
              type: "server",
              message: apiErrors[field][0]
            })
          })
        }
        // console.log(errorObject.response?.data.message);
      } finally {
        setIsLoading(false)
      }
    }

    const RenderLoginForm = LoginFormFields.map(({icon ,placeHolder ,type, Name}, idx) => (
        <div  key={idx}>
          <div className="flex items-center relative ">
            <input  {...register(Name)} placeholder={placeHolder} type={type} className="w-full transition border-2 border-[#C4AB4B] rounded-2xl py-3 text-center focus:ring-1 focus:ring-[#C4AB4B] focus:shadow-[#C4AB4B] focus:shadow-md outline-none " />
            <span className="absolute right-0 bg-[#C4AB4B] rounded-s-2xl px-5 py-3 text-[#FEFFFC]">
              {icon}
            </span>
          </div>
          {Name === "password" && <Link to={"/forget-password"} className="flex justify-end text-[#FEFFFC] pt-3">هل نسيت  كلمة المرور ؟</Link>}
          {errors[Name] && <InputErrorMsg msg={errors[Name]?.message}/>}
        </div>
      ))
    return(
        <div className="flex-1 w-full flex items-center justify-center">
        <section className="grid grid-cols-2 items-center border-2 rounded-3xl border-[#033A70] max-w-7xl w-full">
          <div>
            <img src="/Logo.png" className="max-w-md mx-auto" />
          </div>
          <div className=" bg-[#033A70] rounded-e-2xl h-full flex items-center ">
            <div className="space-y-10 max-w-md mx-auto py-5 w-full">
              <h2 className="text-center text-[#FEFFFC]  text-3xl font-bold">
               تسجيل دخول
              </h2>
              <form className="flex flex-col space-y-10" onSubmit={handleSubmit(onSubmit)} >
                <div className="space-y-5">
                    {RenderLoginForm}
                </div>
                <div className="space-y-4">
                <button className="bg-[#C4AB4B] text-[#FEFFFC] rounded-2xl py-3 w-full hover:bg-[#AC8800] transition-colors flex items-center justify-center">
               {isLoading ? <Spinner/> : "تسجيل"}
                </button>
                <p className="text-[#FEFFFC] text-center">ليس لديك حساب؟ <Link to={"/"} className="text-[#C4AB4B] ">إنشاء حساب جديد</Link></p>
                </div>
              </form>
            </div>
          </div>
        </section>
    </div>
    )
}

export default LoginPage