import React from "react";
import logoTrademark from "../../assets/images/dealdeck-logo-trademark.png";
import Button from "../common/Button";
import Input from "../common/Input";

const index = () => {
    return (
        <nav className="border-b border-gray-100 shadow-elevationClose min-h-[80px] flex">
            <div className="container h-full !my-auto">
                <div className="flex justify-between">
                    <div className="max-w-[150px] my-auto">
                        <img src={logoTrademark} />
                    </div>
                    <Input placeholder="Seach anything..." trailingIcon={"ri-search-line text-[20px]"} className="max-w-[500px]" name="searchbar" type="text" />
                    <div className="flex items-center gap-5 my-auto">
                        <Button viewType="icon" leadingIcon={<i className="ri-shopping-cart-2-fill text-[20px]"></i>} variant="text" size="large" />
                        <Button title="Sign In" trailingIcon={<i className="ri-arrow-right-fill !font-normal"></i>} variant="primary" size="medium" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default index;
