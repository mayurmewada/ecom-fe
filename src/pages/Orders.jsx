import React, { useEffect, useState } from "react";
import { getOrders } from "../redux/slices/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { getFormatedAmount, getFormatedDate } from "../utils/helperFunctions";
import Loader from "../components/common/Loader";
import { useNavigate } from "react-router-dom";

const Orders = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { orders } = useSelector((state) => state.orderSlice);
    const { categories } = useSelector((state) => state?.homeSlice?.data);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            dispatch(getOrders());
            setLoading(false);
        }, 1500);
    }, []);
    return (
        <section>
            <div className="container">
                {orders?.length <= 0 && loading ? (
                    <Loader />
                ) : orders?.length > 0 ? (
                    <>
                        <h3 className="text-[24px] font-semibold mb-6">Orders</h3>
                        <div className="overflow-x-auto">
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead className="bg-grey-600 text-white p-[8px] px-[16px] bg-fixed">
                                    <tr className="h-[36px]">
                                        <th className="group text-white text-[13px] font-bold leading-[15.6px] tracking-[0px] uppercase pl-5 pr-3 py-2 text-left cursor-pointer">order id</th>
                                        <th className="group text-white text-[13px] font-bold leading-[15.6px] tracking-[0px] uppercase pl-5 pr-3 py-2 text-left cursor-pointer">status</th>
                                        <th className="group text-white text-[13px] font-bold leading-[15.6px] tracking-[0px] uppercase pl-5 pr-3 py-2 text-left cursor-pointer">date</th>
                                        <th className="group text-white text-[13px] font-bold leading-[15.6px] tracking-[0px] uppercase pl-5 pr-3 py-2 text-left cursor-pointer">payment mode</th>
                                        <th className="group text-white text-[13px] font-bold leading-[15.6px] tracking-[0px] uppercase pl-5 pr-3 py-2 text-left cursor-pointer">amount</th>
                                        <th className="group text-white text-[13px] font-bold leading-[15.6px] tracking-[0px] uppercase pl-5 pr-3 py-2 text-left cursor-pointer">total products</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders?.map((orders) => {
                                        const { refId, status, method, amount, date, products } = orders;
                                        let totalQuantity = 0;
                                        const totalProducts = products?.map((product) => {
                                            totalQuantity += Number(product.qnty);
                                        });
                                        return (
                                            <tr className="border-b-[1px] border-b-grey-100">
                                                <td className="bg-grey-50 text-[13px] leading-[15.6px] pl-5 pr-3 py-2 text-left">{refId?.split("_")?.[1]}</td>
                                                <td className="text-[13px] leading-[15.6px] pl-5 pr-3 py-2 text-left capitalize">{status === 1 ? "success" : "failed"}</td>
                                                <td className="text-[13px] leading-[15.6px] pl-5 pr-3 py-2 text-left">{getFormatedDate(date)}</td>
                                                <td className="text-[13px] leading-[15.6px] pl-5 pr-3 py-2 text-left uppercase">{method}</td>
                                                <td className="text-[13px] leading-[15.6px] pl-5 pr-3 py-2 text-left">{getFormatedAmount(amount)}</td>
                                                <td className="text-[13px] leading-[15.6px] pl-5 pr-3 py-2 text-left">{totalQuantity}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col w-full">
                        <h2 className="text-[24px] font-semibold block w-full mx-auto text-center my-8">No Orders.</h2>
                        <p className="mx-auto text-center mb-4">Shop with our Top chosen Categories and make order</p>
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
        </section>
    );
};

export default Orders;
