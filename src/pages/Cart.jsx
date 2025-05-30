import React, { useEffect, useState } from "react";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/common/Input";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartDetails } from "../redux/slices/cartSlice";
import { getFormatedAmount } from "../utils/helperFunctions";
import { useRazorpay } from "react-razorpay";
import { createOrder } from "../redux/slices/orderSlice";
import Loader from "../components/common/Loader";

const Cart = () => {
    const dispatch = useDispatch();
    const { error, isLoading, Razorpay } = useRazorpay();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [refetch, setRefetch] = useState(false);
    const [node, setNode] = useState(document.querySelector(".razorpay-backdrop span"));

    const { cart } = useSelector((state) => state?.cartSlice);
    const { categories } = useSelector((state) => state?.homeSlice?.data);

    const getTotalItems = () => {
        let items = 0;
        cart?.map((i) => (items += i.qnty));

        return items;
    };
    const getTotalPrice = () => {
        let total = 0;
        cart?.map((i) => (total = total + i.qnty * i.price));
        return total;
    };

    const calculateRazorpayCharges = (amount) => {
        const fee = amount * 0.02;
        const gst = fee * 0.18;
        const totalCharges = fee + gst;
        const netPayout = amount - totalCharges;

        return {
            fee: +fee.toFixed(2),
            gst: +gst.toFixed(2),
            netPayout: +netPayout.toFixed(2),
        };
    };

    const handleQuantity = (productId, action) => {
        dispatch(addToCart(productId, "", "", "", 1, action));
        setRefetch(true);
    };

    const handleRemoveProduct = (productId, qnty) => {
        dispatch(addToCart(productId, "", "", "", qnty + 1, "decr"));
        setRefetch(true);
    };

    useEffect(() => {
        setLoading(true);
        dispatch(getCartDetails());
        setRefetch(false);
        setLoading(false);
    }, [refetch]);

    const handlePayment = async () => {
        setLoading(true);
        if (localStorage.getItem("ddToken")) {
            await dispatch(createOrder(Razorpay));
            await document.querySelector(".razorpay-backdrop span")?.remove();
            setLoading(false);
        } else {
            setTimeout(() => {
                navigate("/login");
                setLoading(false);
            }, 1000);
        }
    };

    useEffect(() => {
        document.querySelector(".razorpay-backdrop span")?.remove();
    }, [document, node]);

    return (
        <div className="container">
            <div className="flex flex-col lg:flex-row w-full gap-[64px]">
                {cart?.length <= 0 && loading ? (
                    <Loader />
                ) : cart?.length > 0 ? (
                    <>
                        <div className="w-full lg:w-8/12 xl:w-8/12 h-full top-[24px] flex flex-col gap-6">
                            <ul className="divide-y divide-y-grey-200">
                                {cart?.map((item) => (
                                    <li key={item?.id} className="flex">
                                        <div className="bg-grey-50 w-[16px]"></div>
                                        <div className="flex flex-col md:flex-row gap-x-12 gap-y-6 py-5 pl-4 justify-between w-full">
                                            <div className="flex flex-col justify-between w-full gap-5">
                                                <Link className="hover:text-black inline text-[18px] font-semibold leading-[1.2] text-grey-500">
                                                    {item.name}
                                                    <i className="ri-arrow-right-fill ms-2"></i>
                                                </Link>
                                                <span className="block text-[13px] font-semibold text-grey-500 capitalize">{item.brand}</span>
                                            </div>
                                            <div className="flex flex-col-reverse md:flex-row gap-x-6 gap-y-7">
                                                <div className="w-full md:w-[175px] flex flex-row-reverse md:flex-col gap-x-8 gap-y-3 items-center">
                                                    <div className="flex w-full">
                                                        <Button onClick={() => handleQuantity(item._id || item.id, "decr")} isDisabled={item.qnty <= 1} leadingIcon={<i class="ri-subtract-fill text-[24px]"></i>} variant="text" viewType="icon" size="large" type="button" />
                                                        <Input onchange={() => {}} value={item.qnty} type="number" wrapperClass={"w-full"} className="[&>input]:text-center" />
                                                        <Button onClick={() => handleQuantity(item._id || item.id, "incr")} leadingIcon={<i class="ri-add-fill text-[24px]"></i>} variant="text" viewType="icon" size="large" type="button" />
                                                    </div>
                                                    <Button onClick={() => handleRemoveProduct(item._id || item.id, item.qnty)} title={"Remove"} leadingIcon={<i class="ri-delete-bin-6-fill"></i>} variant="text" viewType="icon" size="large" type="button" />
                                                </div>
                                                <div className="w-full md:w-[100px] flex flex-row md:flex-col gap-3 justify-between">
                                                    <div className="flex flex-col md:text-right">
                                                        <span className="text-[13px] text-grey-500 font-bold leading-[18px]">Per Item</span>
                                                        <span className="font-semibold leading-[22px]">{getFormatedAmount(item.price)}</span>
                                                    </div>
                                                    <div className="flex flex-col text-right">
                                                        <span className="text-[13px] text-grey-500 font-bold leading-[18px]">Total</span>
                                                        <span className="font-semibold leading-[22px]">{getFormatedAmount(item.price * item.qnty)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-4/12 xl:w-4/12">
                            <div className="shadow-elevationMiddle px-7 py-8 divide-y divide-y-grey-200">
                                <div className="flex items-end gap-6 mb-3">
                                    <h4 className="text-[22px] font-bold text-grey-500">Summary</h4>
                                </div>
                                <div className="py-2">
                                    <div className="flex my-3">
                                        <span className="w-[50%] text-left font-semibold text-grey-500">Total Items</span>
                                        <span className="w-[50%] text-right font-bold">{getTotalItems()}</span>
                                    </div>
                                    <div className="flex my-3">
                                        <span className="w-[50%] text-left font-semibold text-grey-500">Transaction Fee</span>
                                        <span className="w-[50%] text-right font-bold">{getFormatedAmount(calculateRazorpayCharges(getTotalPrice())?.fee)}</span>
                                    </div>
                                    <div className="flex my-3">
                                        <span className="w-[50%] text-left font-semibold text-grey-500">GST (18% on Transaction Fee)</span>
                                        <span className="w-[50%] text-right font-bold">{getFormatedAmount(calculateRazorpayCharges(getTotalPrice())?.gst)}</span>
                                    </div>
                                    <div className="flex my-3">
                                        <span className="w-[50%] text-left font-semibold text-grey-500">Net Amount</span>
                                        <span className="w-[50%] text-right font-bold">{getFormatedAmount(calculateRazorpayCharges(getTotalPrice())?.netPayout)}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex mt-4 mb-7">
                                        <span className="w-[50%] text-left font-semibold text-grey-500">Total</span>
                                        <span className="w-[50%] text-right text-[18px] font-bold">{getFormatedAmount(getTotalPrice())}</span>
                                    </div>
                                    <Button isLoading={loading} onClick={handlePayment} className={"w-full"} title={"Checkout"} variant={"primary"} size={"large"} />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col w-full">
                        <h2 className="text-[24px] font-semibold block w-full mx-auto text-center my-8">No Products in Cart</h2>
                        <p className="mx-auto text-center mb-4">Shop with our Top chosen Categories</p>
                        <div className="flex flex-wrap lg:flex-nowrap gap-4">
                            {categories?.map((category, idx) => (
                                <div key={`${category}${idx}`} onClick={() => navigate({ pathname: `/products`, search: `?category=${category}` })} className="relative w-full sm:w-[calc(50%-8px)] lg:w-1/5 border border-gray-100 hover:border-grey-200 cursor-pointer px-4 pt-7 pb-4 flex flex-col items-center gap-6">
                                    <span className="absolute text-[80px] text-gray-100 right-[0px] top-[4px] font-[800] uppercase aspect-square h-[60px] leading-[60px] align-middle text-center">{category.split("")[0]}</span>
                                    <h6 className="capitalize me-auto">{category}</h6>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
