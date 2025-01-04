import React from "react";

const Home = () => {
    return (
        <>
            <section className="container">
                <div className="bg-grey-50 h-[300px] w-full flex justify-center items-center">Banner coming soon</div>
            </section>
            <section className="container !mt-[44px]">
                <h4 className="text-[22px] mb-4">Categories</h4>
                <div className="flex gap-4">
                    <div className="w-1/5 h-[100px] border border-gray-200 px-4 py-3"></div>
                    <div className="w-1/5 h-[100px] border border-gray-200 px-4 py-3"></div>
                    <div className="w-1/5 h-[100px] border border-gray-200 px-4 py-3"></div>
                    <div className="w-1/5 h-[100px] border border-gray-200 px-4 py-3"></div>
                    <div className="w-1/5 h-[100px] border border-gray-200 px-4 py-3"></div>
                </div>
            </section>
        </>
    );
};

export default Home;
