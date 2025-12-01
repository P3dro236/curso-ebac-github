export default ({value, onChange, holder, type, label}) =>{
    return(
        <>
            <div className="container flex flex-col justify-center items-center">
                <label htmlFor={label} className="self-start text-gray-50">{label}</label>
                <input className="box-border text-gray-50 border-gray-950 rounded outline-0 outline-[#0b0b0b] focus:border-black focus:outline-1 text-center border-1 focus:ring-0 w-full mb-6 p-2" 
                type={type} value={value} onChange={onChange} placeholder={holder}/>
            </div>
        </>
        
    )

}