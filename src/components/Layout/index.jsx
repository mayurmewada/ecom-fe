import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar/index";
import Footer from "./Footer/index";

const index = ({ children }) => {
    const { pathname } = useLocation();

    console.log(pathname);
    return (
        <>
            {pathname === "/login" || pathname === "/signup" ? (
                <>{children}</>
            ) : (
                <>
                    <Navbar />
                    <main className="pt-[44px] pb-[144px]">{children}</main>
                    <Footer />
                </>
            )}
        </>
    );
};

export default index;
