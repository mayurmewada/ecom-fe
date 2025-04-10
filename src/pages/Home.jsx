import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getHomePageData } from "../redux/slices/homeSlice";
import Loader from "../components/common/Loader";

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
                <div className="bg-grey-50 h-[300px] w-full flex justify-center items-center font-semibold text-grey-500">Banner coming soon</div>
            </section>
            <section className="container !mt-[44px]">
                <h4 className="text-[22px] mb-4 font-semibold text-grey-500">Shop by Categories</h4>
                <div className="flex flex-wrap lg:flex-nowrap gap-4">
                    {loading ? (
                        <Loader />
                    ) : (
                        data?.categories?.map((category, idx) => (
                            <div key={`${category}${idx}`} onClick={() => navigate({ pathname: `/products`, search: `?category=${category}` })} className="relative w-full sm:w-[calc(50%-8px)] lg:w-1/5 border border-gray-100 hover:border-grey-200 cursor-pointer px-4 pt-7 pb-4 flex flex-col items-center gap-6">
                                <span className="absolute text-[80px] text-gray-100 right-[0px] top-[4px] font-[800] uppercase aspect-square h-[60px] leading-[60px] align-middle text-center">{category.split("")[0]}</span>
                                <h6 className="capitalize me-auto">{category}</h6>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </>
    );
};

export default Home;
