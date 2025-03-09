import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getFilteredProducts } from "../redux/slices/productSlice";
import Filters from "../components/Filters";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getFilters } from "../redux/slices/filterSlice";
import Button from "../components/common/Button";

const Products = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");

    const navigate = useNavigate();

    const filterState = useSelector((state) => state.filterSlice);
    const productState = useSelector((state) => state.productSlice);

    useEffect(() => {
        dispatch(getFilters(category));
        if (filterState?.activeFilters.length > 0) {
            dispatch(getFilteredProducts(category, filterState.activeFilters));
        } else {
            dispatch(getAllProducts(category));
        }
    }, [filterState?.activeFilters]);

    return (
        <div className="container flex w-full gap-7">
            <div className="w-5/12 lg:w-4/12 xl:w-3/12 sticky h-full top-[24px] flex flex-col gap-6">
                <Filters data={filterState.filters} />
            </div>
            <div className="w-7/12 lg:w-8/12 xl:w-9/12 flex flex-wrap">
                <div className="grid lg:grid-cols-4 gap-5 w-full">
                    {productState.loading ? (
                        <>
                            {Array.from({ length: 5 }, (_, i) => (
                                <div key={i} className="border border-gray-100 shadow-elevationClose p-4 w-full">
                                    <div className="animate-pulse flex flex-col space-y-4">
                                        <div className="bg-gray-200 aspect-square w-full"></div>
                                        <div className="flex flex-col py-1 gap-y-4">
                                            <div className="flex flex-col gap-y-1">
                                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                            </div>
                                            <div className="h-4 bg-gray-200 rounded w-5/12"></div>
                                            <div className="h-8 bg-gray-200 rounded w-full"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : productState?.products?.length ? (
                        productState?.products?.map((product, i) => {
                            const image = Array(product?.images?.split(","))?.[0]?.[0];
                            return (
                                <div key={i} onClick={() => navigate({pathname: '/product', search: `?id=${product._id}`} )} className="border border-gray-100 shadow-elevationClose px-4 py-3 w-full h-[fit-content]">
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex items-center justify-center aspect-square w-full">
                                            <img className="aspect-square object-contain" src={image} alt="" />
                                        </div>
                                        <div className="flex flex-col py-1 gap-y-4">
                                            <h6 className="line-clamp-2">{product.name}</h6>
                                            <p className="text-[20px]">&#8377; {product.price}</p>
                                            <Button title="Add to Cart" variant="secondary" size="medium" onClick={() => {}} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>No Products found for selected Filters</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
