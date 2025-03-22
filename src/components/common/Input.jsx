import React from "react";

const Input = ({ onChange, onBlur, className, label = "", type, name, placeholder, value, leadingIcon = null, trailingIcon = null, size = "large" }) => {
    const styles = {
        large: "h-[40px]",
        medium: "h-[32px]",
    };
    return (
        <div>
            {label ? <label htmlFor={name} className="uppercase font-bold text-[13px] text-grey-500">{label}</label> : ""}
            <div className={`global-input relative w-full rounded-[8px] ${styles[size]} ${className}`}>
                {leadingIcon && <i className={`absolute top-[50%] translate-y-[-50%] left-[16px] z-[1] ${leadingIcon}`}></i>}
                <input onBlur={onBlur} onChange={onChange} value={value} className={`absolute inset-0 rounded-[8px] bg-grey-50 focus:bg-white border border-grey-50 focus:border-grey-700${leadingIcon ? " pl-[48px]" : " pl-4"}${trailingIcon ? " pr-[48px]" : " pr-4"}`} placeholder={placeholder} type={type} name={name} />
                {trailingIcon && <i className={`absolute top-[50%] translate-y-[-50%] right-[16px] z-[1] ${trailingIcon}`}></i>}
            </div>
        </div>
    );
};

export default Input;
