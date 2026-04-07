import { yupResolver } from "@hookform/resolvers/yup";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { RegisterFormFields } from "../data";
import { useForm, type SubmitHandler } from "react-hook-form"
import { RegisterSchema } from "../validation";
import InputErrorMsg from "../components/InputErrorMsg";
import AxiosInstance from "../config/axios.config";
import { useState } from "react";
import { Spinner } from "../icons";

interface IFormInput {
  username: string
  email: string
  id: string
  password: string
}

const Signup = () => {

  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit , formState : {errors} } = useForm<IFormInput>({resolver : yupResolver(RegisterSchema)})
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    try {
      setIsLoading(true)
      const res = await AxiosInstance.post("", data)
      console.log(res);
    } catch (error) {
      console.log(error); //API errors
    } finally {
      setIsLoading(false)
    }
  }
  console.log(errors);  //Validation errors

  //________INPUTS RENDER________// 
  const RenderRegisterForm = RegisterFormFields.map(({icon ,placeHolder ,type, Name}, idx) => (
    <div  key={idx}>
      <div className="flex items-center relative ">
        <input  {...register(Name)} placeholder={placeHolder} type={type} className="w-full transition border-2 border-[#C4AB4B] rounded-2xl py-3 text-center focus:ring-1 focus:ring-[#C4AB4B] focus:shadow-[#C4AB4B] focus:shadow-md outline-none " />
        <span className="absolute right-0 bg-[#C4AB4B] rounded-s-2xl px-5 py-3 text-[#FEFFFC]">
          {icon}
        </span>
      </div>
      {errors[Name] && <InputErrorMsg msg={errors[Name]?.message}/>}
    </div>
  ))
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <section className="grid grid-cols-2 items-center border-2 rounded-3xl border-[#033A70] max-w-7xl w-full">
          <div className=" bg-[#033A70] rounded-s-2xl">
            <div className="space-y-10 max-w-md mx-auto py-5 ">
              <h2 className="text-center text-[#FEFFFC]  text-3xl font-bold">
                إنشاء حساب جديد
              </h2>
              <form className="flex flex-col space-y-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-5">
                {RenderRegisterForm}
                </div>
                <div className="space-y-4">
                <button className="bg-[#C4AB4B] text-[#FEFFFC] rounded-2xl py-3 w-full hover:bg-[#AC8800] transition-colors flex items-center justify-center">
                  {isLoading ? <Spinner/> : "تسجيل"}
                </button>
                <p className="text-[#FEFFFC] text-center">لديك حساب بالفعل؟ <span className="text-[#C4AB4B] ">تسجيل دخول</span></p>
                </div>
              </form>
            </div>
          </div>
          <div>
            <img src="/Logo.png" className="max-w-md mx-auto" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
