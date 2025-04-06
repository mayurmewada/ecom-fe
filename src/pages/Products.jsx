import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getFilteredProducts } from "../redux/slices/productSlice";
import Filters from "../components/common/Filters";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getFilters } from "../redux/slices/filterSlice";
import Button from "../components/common/Button";
import Offcanvas from "../components/common/Offcanvas";
import { getFormatedAmount } from "../utils/helperFunctions";
import { addToCart } from "../redux/slices/cartSlice";

const Products = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get("category");

    const [filterDrawer, setFilterDrawer] = useState(false);
    // const [render, setRender] = useState(false);

    const navigate = useNavigate();

    const filterState = useSelector((state) => state.filterSlice);
    const productState = useSelector((state) => state.productSlice);

    // const param = new URLSearchParams(searchParams);
    // const filtersParam = param.get("filters");

    // const updateUrl = () => {
    //     const filterNames = filterState?.filters?.map((d) => {
    //         let names = [];
    //         if (!names.includes(d.name.toLowerCase())) {
    //             names.push(d.name.toLowerCase());
    //         }
    //         return names;
    //     });

    //     const filters = filtersParam?.split(",") || {};

    //     let tempParam = [];
    //     for (let i = 0; i < filters.length; i++) {
    //         let [key, value] = filters[i].split(":");
    //         if (filterNames.flat().includes(key)) {
    //             tempParam.push(`${key}:${value}`);
    //         } else {
    //             param.delete(key);
    //         }
    //     }
    //     if (tempParam.length > 0) {
    //         param.set("filters", tempParam.join(","));
    //         setSearchParams(param);
    //     }
    // };

    // useEffect(() => {
    //     setRender(true);
    // }, [param]);

    // useEffect(() => {
    //     updateUrl();
    //     setRender(false);
    // }, [render]);

    useEffect(() => {
        dispatch(getFilters(category));
        if (filterState?.activeFilters.length > 0) {
            dispatch(getFilteredProducts(category, filterState.activeFilters));
        } else {
            dispatch(getAllProducts(category));
        }
    }, [filterState?.activeFilters, searchParams]);

    const handleAddToCart = (e, productId, brand, price) => {
        e.stopPropagation();
        dispatch(addToCart(productId, brand, price));
    };

    return (
        <div className="container">
            <div className="flex lg:hidden mb-8">
                <Button className={"ms-auto"} size="medium" variant={"secondary"} onClick={() => setFilterDrawer(true)} title={"Filter"} trailingIcon={<i className="ri-equalizer-fill"></i>} />
                <Offcanvas toggle={filterDrawer} setToggle={setFilterDrawer} title={"Filters"}>
                    <div className="flex flex-col gap-6">
                        <Filters data={filterState.filters} />
                    </div>
                </Offcanvas>
            </div>
            <div className="flex w-full gap-7">
                <div className="hidden w-5/12 lg:w-4/12 xl:w-3/12 sticky h-full top-[24px] lg:flex flex-col gap-6">
                    <Filters data={filterState.filters} />
                </div>
                <div className="w-full lg:w-8/12 xl:w-9/12 flex flex-wrap">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
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
                                    <div key={i} onClick={() => navigate({ pathname: "/product", search: `?id=${product._id}` })} className="border border-gray-100 shadow-elevationClose px-4 py-3 w-full h-[fit-content]">
                                        <div className="flex flex-col space-y-4">
                                            <div className="flex items-center justify-center aspect-square w-full">
                                                <img className="aspect-square object-contain" src={image} alt="" />
                                            </div>
                                            <div className="flex flex-col py-1 gap-y-4">
                                                <h6 className="line-clamp-2">{product.name}</h6>
                                                <p className="text-[20px]">{getFormatedAmount(product.price)}</p>
                                                <Button title="Add to Cart" variant="secondary" size="medium" onClick={(e) => handleAddToCart(e, product._id, product.brand, product.price)} />
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
        </div>
    );
};

export default Products;
