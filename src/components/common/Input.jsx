import React from "react";

const Input = ({ className, type, name, placeholder, leadingIcon = null, trailingIcon = null }) => {
    const styles = {
        large: "h-[40px]",
        medium: "h-[32px]",
    };
    return (
        <div className={`global-input relative w-full rounded-[8px] ${className}`}>
            {leadingIcon && <i className={`absolute top-[50%] translate-y-[-50%] left-[16px] z-[1] ${leadingIcon}`}></i>}
            <input className={`absolute inset-0 rounded-[8px] bg-grey-50 focus:bg-white border border-grey-50 focus:border-grey-700${leadingIcon ? " pl-[48px]" : " pl-4"}${trailingIcon ? " pr-[48px]" : " pr-4"}`} placeholder={placeholder} type={type} name={name} />
            {trailingIcon && <i className={`absolute top-[50%] translate-y-[-50%] right-[16px] z-[1] ${trailingIcon}`}></i>}
        </div>
    );
};

export default Input;
