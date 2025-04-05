import React, { useState } from "react";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import Input from "../components/common/Input";

const Cart = () => {
    const [loading, setLoading] = useState();
    return (
        <div className="container">
            <div className="flex flex-col lg:flex-row w-full gap-[64px]">
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <div className="w-full lg:w-8/12 xl:w-8/12 sticky h-full top-[24px] flex flex-col gap-6">
                            <ul className="divide-y divide-y-grey-200">
                                <li className="flex">
                                    <div className="bg-grey-50 w-[16px]"></div>
                                    <div className="flex gap-12 py-5 pl-4 justify-between w-full">
                                        <div className="flex flex-col justify-between w-full">
                                            <Link className="hover:text-black inline text-[18px] font-semibold leading-[1.2] text-grey-500">
                                                Product Name
                                                <i className="ri-arrow-right-fill ms-2"></i>
                                            </Link>
                                            <span className="block text-[13px] font-semibold text-grey-500">Product Brand</span>
                                        </div>
                                        <div className="flex gap-6">
                                            <div className="w-[175px] flex flex-col gap-3 items-center">
                                                <div className="flex w-full">
                                                    <Button onClick={() => {}} leadingIcon={<i class="ri-subtract-fill text-[24px]"></i>} variant="text" viewType="icon" size="large" type="button" />
                                                    <Input onchange={() => {}} value={"0"} type="number" wrapperClass={"w-full"} className="[&>input]:text-center" />
                                                    <Button onClick={() => {}} leadingIcon={<i class="ri-add-fill text-[24px]"></i>} variant="text" viewType="icon" size="large" type="button" />
                                                </div>
                                                <Button onClick={() => {}} title={"Remove"} leadingIcon={<i class="ri-delete-bin-6-fill"></i>} variant="text" viewType="icon" size="large" type="button" />
                                            </div>
                                            <div className="w-[100px] flex flex-col gap-3 justify-between">
                                                <div className="flex flex-col text-right">
                                                    <span className="text-[13px] text-grey-500 font-bold leading-[18px]">Per Item</span>
                                                    <span className="font-semibold leading-[22px]">49999</span>
                                                </div>
                                                <div className="flex flex-col text-right">
                                                    <span className="text-[13px] text-grey-500 font-bold leading-[18px]">Total</span>
                                                    <span className="font-semibold leading-[22px]">7812345</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
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
                                        <span className="w-[50%] text-right font-bold">4 </span>
                                    </div>
                                    <div className="flex my-3">
                                        <span className="w-[50%] text-left font-semibold text-grey-500">Subtotal</span>
                                        <span className="w-[50%] text-right font-bold">10</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex mt-4 mb-7">
                                        <span className="w-[50%] text-left font-semibold text-grey-500">Total</span>
                                        <span className="w-[50%] text-right text-[18px] font-bold">10</span>
                                    </div>
                                    <Button className={"w-full"} title={"Checkout"} variant={"primary"} size={"large"} />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
