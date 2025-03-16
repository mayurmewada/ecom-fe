import React, { useRef, useState } from "react";
import logoTrademark from "../../../assets/images/dealdeck-logo-trademark.png";
import Button from "../../common/Button";
import Input from "../../common/Input";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../../../redux/slices/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import { pageBaseUrl } from "../../../utils/constants";

const SearchHighlight = ({ text, query }) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return (
        <>
            {parts.map((part, index) =>
                regex.test(part) ? (
                    <span key={index} className="bg-grey-200">
                        {part}
                    </span>
                ) : (
                    part
                )
            )}
        </>
    );
};

const index = () => {
    const dispatch = useDispatch();
    const searchMenu = useRef(null);
    const { data } = useSelector((state) => state.searchSlice);

    const [searchDD, setSearchDD] = useState(false);
    const [currSearchText, setCurrSearchText] = useState("");

    const handleChange = (e) => {
        setSearchDD(true);
        setCurrSearchText(e.target.value);
        dispatch(getSearch(e.target.value));
    };

    const closeOpenMenus = (e) => {
        if (!e?.target?.className?.split(" ").includes("searchdata") && searchDD && !searchMenu.current?.contains(e.target)) {
            setSearchDD(false);
        }
    };

    document.addEventListener("mousedown", closeOpenMenus);

    return (
        <nav className="border-b border-gray-100 shadow-elevationClose min-h-[80px] flex">
            <div className="container h-full !my-6 lg:!my-auto">
                <div className="flex justify-between">
                    <div className="max-w-[150px] my-auto">
                        <Link to={"/"}>
                            <img src={logoTrademark} />
                        </Link>
                    </div>
                    <div className="hidden lg:flex w-full max-w-[500px]">
                        <SearchBar searchMenu={searchMenu} handleChange={handleChange} searchDD={searchDD} currSearchText={currSearchText} data={data} />
                    </div>
                    <div className="flex items-center gap-5 my-auto">
                        <Button viewType="icon" leadingIcon={<i className="ri-shopping-cart-2-fill text-[20px]"></i>} variant="text" size="large" />
                        <Button title="Sign In" trailingIcon={<i className="ri-arrow-right-fill !font-normal"></i>} variant="primary" size="medium" />
                    </div>
                </div>
                <div className="flex lg:hidden w-full h-[40px] mt-5">
                    <SearchBar searchMenu={searchMenu} handleChange={handleChange} searchDD={searchDD} currSearchText={currSearchText} data={data} />
                </div>
            </div>
        </nav>
    );
};

const SearchBar = ({ searchMenu, handleChange, searchDD, data, currSearchText }) => {
    const navigate = useNavigate();
    return (
        <div ref={searchMenu} className="relative z-[2] w-full">
            <Input onChange={handleChange} placeholder="Seach anything..." trailingIcon={"ri-search-line text-[20px]"} className="h-full" name="searchbar" type="text" />
            {searchDD ? (
                <div className="absolute top-[120%] w-full bg-white rounded-[8px] shadow-elevationMiddle max-h-[300px] overflow-y-scroll py-3 z-[3]">
                    <ul>
                        {data?.length > 0 ? (
                            data?.map((searchResult) => (
                                <li onClick={() => navigate({ pathname: "/product", search: `?id=${searchResult?._id}` })} key={searchResult.id} className="py-1 px-4 hover:bg-grey-50 searchdata">
                                    <SearchHighlight text={searchResult.name} query={currSearchText} />
                                </li>
                            ))
                        ) : (
                            <li className="py-1 px-4 hover:bg-grey-50 searchdata">No Search results</li>
                        )}
                    </ul>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default index;
