import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getHomePageData } from "../redux/slices/homeSlice";
import { pageBaseUrl } from "../utils/constants";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading, data } = useSelector((state) => state.homeSlice);

    useEffect(() => {
        dispatch(getHomePageData());
    }, []);

    return (
        <>
            <section className="container">
                <div className="bg-grey-50 h-[300px] w-full flex justify-center items-center">Banner coming soon</div>
            </section>
            <section className="container !mt-[44px]">
                <h4 className="text-[22px] mb-4">Categories</h4>
                <div className="flex gap-4">
                    {data?.categories?.map((category, idx) => (
                        <div onClick={() => navigate({ pathname: `${pageBaseUrl}/products`, search: `?category=${category}` })} className="relative w-1/5 border border-gray-100 hover:border-grey-200 cursor-pointer px-4 pt-7 pb-4 flex flex-col items-center gap-6">
                            {/* <img className="aspect-square h-[60px]" src="/src/assets/images/categories/mobiles.png" alt="" /> */}
                            <span className="absolute text-[80px] text-gray-100 right-[0px] top-[4px] font-[800] uppercase aspect-square h-[60px] leading-[60px] align-middle text-center">{category.split("")[0]}</span>
                            <h6 className="capitalize me-auto">{category}</h6>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
