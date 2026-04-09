import { Link } from "react-router-dom"
import { Identification, MailIcon } from "../icons"

const ForgetPassword = () => {
    return(
        <div className="flex flex-1 w-full items-center justify-center">
       <section className="grid grid-cols-2 items-center border-2 rounded-3xl border-[#033A70] max-w-7xl w-full relative">
        <div className="space-y-9 max-w-md mx-auto w-full">
           <div className="space-y-4">
              <h2 className="text-[#124375] text-3xl font-bold">
                إعادة تعيين كلمة المرور
             </h2>
             <p className="text-sm text-[#0A2A4E] font-medium">
                أدخل بياناتك وسيتم إرسال كلمة مرور مؤقتة إلى بريدك الإلكتروني المسجل.
             </p>
            </div>
            <form className="flex flex-col space-y-6 ">
                <div className="flex items-center relative ">
                   <input placeholder="الرقم القومي" className="w-full transition border-2 border-[#C4AB4B] rounded-2xl py-3 text-center focus:ring-1 focus:ring-[#C4AB4B] focus:shadow-[#C4AB4B] focus:shadow-md outline-none "/>
                   <span className="absolute right-0 bg-[#C4AB4B] rounded-s-2xl px-5 py-3 text-[#FEFFFC]">
                    <Identification/>
                   </span>
                </div>
                <div className="flex items-center relative ">
                   <input placeholder="البريد الإلكتروني" className="w-full transition border-2 border-[#C4AB4B] rounded-2xl py-3 text-center focus:ring-1 focus:ring-[#C4AB4B] focus:shadow-[#C4AB4B] focus:shadow-md outline-none "/>
                   <span className="absolute right-0 bg-[#C4AB4B] rounded-s-2xl px-5 py-3 text-[#FEFFFC]">
                    <MailIcon/>
                   </span>
                </div>
                <div className="flex flex-col space-y-3">
                <button className="bg-[#C4AB4B] text-[#FEFFFC] rounded-2xl py-3 w-full hover:bg-[#AC8800] transition-colors flex items-center justify-center">إرسال كلمة المرور المؤقتة</button>
                <Link to={'/login'} className="text-end text-base text-[#124375] font-medium" >الرجوع لتسجيل الدخول</Link>
                </div>
            </form>
        </div>
        <div>
            <img src="/Logo.png" alt="" className="max-w-lg mx-auto"  />
        </div>
       </section>
        </div>
    )
}

export default ForgetPassword