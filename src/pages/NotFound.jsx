import React from "react";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="container">
            <div className="flex flex-col items-center">
                <h1 className="text-center text-[64px] font-bold leading-[64px] text-grey-400">404</h1>
                <h6 className="text-center text-[24px] font-bold text-grey-400">Page Not Found.</h6>
                <Button onClick={() => navigate("/")} className="mt-[72px]" title={"Home"} trailingIcon={<i className="ri-arrow-right-fill"></i>}  />
            </div>
        </div>
    );
};

export default NotFound;
