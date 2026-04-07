interface IErrormsg{
    msg? : string 
}

const InputErrorMsg = ({msg} : IErrormsg) => {
    return (
       msg ? <span className="text-white font-semibold text-sm px-2">{msg}</span> : null
    )
}

export default InputErrorMsg