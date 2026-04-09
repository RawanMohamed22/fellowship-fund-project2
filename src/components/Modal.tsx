import { LockIcon } from "../icons"

const Modal  = () => {
    return(
        <div className="absolute bg-[#FEFFFC] z-10 border-2 border-[#124375]">
            <h3 className="text-[#124375] text-center text-xl font-semibold">إدخال كلمة المرور المؤقتة</h3>
            <p>تم إرسال كلمة مرور مؤقتة إلى بريدك الإلكتروني.</p>
            <p>يرجى إدخالها للمتابعة.</p>
             <div className="flex items-center relative ">
               <input placeholder="البريد الإلكتروني" className="w-full transition border-2 border-[#C4AB4B] rounded-2xl py-3 text-center focus:ring-1 focus:ring-[#C4AB4B] focus:shadow-[#C4AB4B] focus:shadow-md outline-none "/>
               <span className="absolute right-0 bg-[#C4AB4B] rounded-s-2xl px-5 py-3 text-[#FEFFFC]">
                <LockIcon/>
               </span>
             </div>
        </div>
    )
}

export default Modal