import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";

const index = ({ children }) => {
    const { pathname } = useLocation();
    return (
        <>
            {pathname === "login" ? (
                <h1>Login Page Coming Soon.</h1>
            ) : (
                <>
                    <Navbar />
                    <main className="pt-[44px] pb-[88px]">{children}</main>
                    <Footer />
                </>
            )}
        </>
    );
};

export default index;
