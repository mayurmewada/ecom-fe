import React from "react";
import Button from "./Button";

const Offcanvas = ({ children, toggle, setToggle, title }) => {
    return (
        <div className={`global-offcanvas fixed shadow-elevationMiddle divide-y divide-y-grey-200 z-[3] top-[0] bottom-[0] bg-white w-full max-w-[90%] sm:max-w-[350px] lg:max-w-[375px] h-vh ${toggle ? "right-[0]" : "left-[100%]"}`}>
            <h4 className="px-5 pt-6 pb-3 text-[20px] font-medium">{title}</h4>
            <div className="px-5 pt-5 pb-12 overflow-y-scroll h-[calc(100vh-133px)]">{children}</div>
            <div className="mt-auto p-5">
                <Button size="medium" className="w-full" onClick={() => setToggle(false)} variant={"secondary"} title={"Close"} />
            </div>
        </div>
    );
};

export default Offcanvas;
