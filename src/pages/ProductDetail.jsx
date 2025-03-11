import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProductDetails } from "../redux/slices/productSlice";
import { Carousel } from "react-responsive-carousel";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

const ProductDetail = () => {
    const params = useLocation();
    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state?.productSlice?.product);

    const [currQuantity, setCurrQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setCurrQuantity(e.target.value);
    };

    useEffect(() => {
        dispatch(getProductDetails(params.search.split("=")[1]));
    }, []);

    console.log(productDetail);

    return (
        <div className="container">
            <div className="flex flex-col lg:flex-row w-full gap-[64px]">
                <div className="w-full lg:w-7/12 xl:w-7/12 sticky h-full top-[24px] flex flex-col gap-6">
                    <Carousel className={`product_detail_carousel ${productDetail?.images?.split(",")?.length <= 3 ? "low_images" : ""}`} showArrows={false} showIndicators={false} showStatus={false} showThumbs={true} infiniteLoop={true} autoPlay={false}>
                        {productDetail?.images?.split(",")?.map((img) => (
                            <div>
                                <img src={img} />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="w-full lg:w-5/12 xl:w-5/12 flex flex-wrap relative z-[99] bg-white">
                    <div className="w-full shadow-elevationMiddle divide-y-[1px] divide-y-grey-200 flex flex-col">
                        <div className="px-5 py-6 w-full">
                            <h3 className="text-[20px] text-grey-500">{productDetail?.name}</h3>
                            <div className="mt-3">
                                <span>Brand:</span> <span className="capitalize">{productDetail?.brand}</span>
                            </div>
                            <p className="text-[24px] mt-5">&#8377; {productDetail?.price * currQuantity}</p>
                        </div>
                        <div className="px-5 py-6 w-full mt-auto">
                            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-8">
                                <div className="w-full sm:w-5/12 lg:w-full xl:5/12 me-auto">
                                    <div className="flex">
                                        <Button onClick={() => setCurrQuantity(currQuantity - 1)} leadingIcon={<i class="ri-subtract-fill text-[24px]"></i>} isDisabled={currQuantity === 1} variant="text" viewType="icon" size="large" type="button" />
                                        <Input onchange={handleQuantityChange} value={currQuantity} type="number" className="mx-3 [&>input]:text-center" />
                                        <Button onClick={() => setCurrQuantity(currQuantity + 1)} leadingIcon={<i class="ri-add-fill text-[24px]"></i>} variant="text" viewType="icon" size="large" type="button" />
                                    </div>
                                </div>
                                <div className="w-full sm:w-6/12 lg:w-full xl:6/12">
                                    <Button className="w-full" isDisabled={currQuantity == 0} title="Add to Cart" variant="primary" size="large" type="button" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <p>{productDetail?.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
