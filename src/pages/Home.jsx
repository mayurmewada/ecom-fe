import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getHomePageData } from "../redux/slices/homeSlice";
import Loader from "../components/common/Loader";
import { getFormatedAmount } from "../utils/helperFunctions";
import Button from "../components/common/Button";

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
                <h1 className="font-semibold text-grey-500 leading-[46px] text-[40px] tracking-[0.5px] mt-[64px] my-[100px]">
                    Stacked with Savings,
                    <br />
                    Packed with style.
                    <br />
                    DEAL DECK
                </h1>
            </section>
            <section className="container !py-[44px]">
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
            <section className="container !mt-[44px]">
                <h4 className="text-[22px] mb-4 font-semibold text-grey-500">Shop by Popluar Product</h4>
                <div className="flex flex-wrap lg:flex-nowrap gap-4">
                    {loading ? (
                        <Loader />
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 w-full">
                            {data?.trendingProducts?.map((product, i) => {
                                const image = Array(product?.images?.split(","))?.[0]?.[0];
                                return (
                                    <div key={i} onClick={() => navigate({ pathname: "/product", search: `?id=${product._id}` })} className="border border-gray-100 shadow-elevationClose px-4 py-3 w-full h-[fit-content]">
                                        <div className="flex flex-col space-y-4">
                                            <div className="flex items-center justify-center aspect-square w-full">
                                                <img className="aspect-square object-contain" src={image} alt="" />
                                            </div>
                                            <div className="flex flex-col py-1 gap-y-4">
                                                <h6 className="line-clamp-2">{product.name}</h6>
                                                <p className="text-[20px]">{getFormatedAmount(product.price)}</p>
                                                <Button title="Add to Cart" variant="secondary" size="medium" onClick={(e) => handleAddToCart(e, product._id, product.name, product.brand, product.price)} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Home;
