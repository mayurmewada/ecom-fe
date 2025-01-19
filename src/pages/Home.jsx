import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="container">
                <div className="bg-grey-50 h-[300px] w-full flex justify-center items-center">Banner coming soon</div>
            </section>
            <section className="container !mt-[44px]">
                <h4 className="text-[22px] mb-4">Categories</h4>
                <div className="flex gap-4">
                    <div onClick={() => navigate({ pathname: '/products', search: "?category=mobiles" })} className="w-1/5 border border-gray-100 hover:border-grey-200 cursor-pointer px-4 pt-7 pb-4 flex flex-col items-center gap-6">
                        <img className="aspect-square h-[60px]" src="/src/assets/images/categories/mobiles.png" alt="" />
                        <h6>Mobiles</h6>
                    </div>
                    <div className="w-1/5 border border-gray-100 hover:border-grey-200 cursor-pointer px-4 pt-7 pb-4 flex flex-col items-center gap-6">
                        <img className="aspect-square h-[60px]" src="/src/assets/images/categories/clothes.png" alt="" />
                        <h6>Clothes</h6>
                    </div>
                    <div className="w-1/5 border border-gray-100 hover:border-grey-200 cursor-pointer px-4 pt-7 pb-4 flex flex-col items-center gap-6">
                        <img className="aspect-square h-[60px]" src="/src/assets/images/categories/electronics.png" alt="" />
                        <h6>Electronics</h6>
                    </div>
                    <div className="w-1/5 border border-gray-100 hover:border-grey-200 cursor-pointer px-4 pt-7 pb-4 flex flex-col items-center gap-6">
                        <img className="aspect-square h-[60px]" src="/src/assets/images/categories/books.png" alt="" />
                        <h6>Books</h6>
                    </div>
                    <div className="w-1/5 border border-gray-100 hover:border-grey-200 cursor-pointer px-4 pt-7 pb-4 flex flex-col items-center gap-6">
                        <img className="aspect-square h-[60px]" src="/src/assets/images/categories/toys.png" alt="" />
                        <h6>Toys</h6>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
