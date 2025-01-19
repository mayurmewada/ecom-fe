import React, { useRef, useState } from "react";
import logoTrademark from "../../assets/images/dealdeck-logo-trademark.png";
import Button from "../common/Button";
import Input from "../common/Input";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../../redux/slices/searchSlice";
import { Link } from "react-router-dom";

const SearchHighlight = ({ text, query }) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    console.log(regex);
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
        if (searchDD && !searchMenu.current?.contains(e.target)) {
            setSearchDD(false);
        }
    };

    document.addEventListener("mousedown", closeOpenMenus);

    return (
        <nav className="border-b border-gray-100 shadow-elevationClose min-h-[80px] flex">
            <div className="container h-full !my-auto">
                <div className="flex justify-between">
                    <div className="max-w-[150px] my-auto">
                        <Link to={"/"}>
                            <img src={logoTrademark} />
                        </Link>
                    </div>
                    <div ref={searchMenu} className="relative w-full max-w-[500px]">
                        <Input onchange={handleChange} placeholder="Seach anything..." trailingIcon={"ri-search-line text-[20px]"} className="h-full" name="searchbar" type="text" />
                        {searchDD ? (
                            <div className="absolute top-[120%] w-full bg-white rounded-[8px] shadow-elevationClose">
                                <ul>
                                    {data.map((searchResult) => (
                                        <li key={searchResult.id} className="py-1 px-4 hover:bg-grey-50">
                                            <SearchHighlight text={searchResult.name} query={currSearchText} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex items-center gap-5 my-auto">
                        <Button viewType="icon" leadingIcon={<i className="ri-shopping-cart-2-fill text-[20px]"></i>} variant="text" size="large" />
                        <Button title="Sign In" trailingIcon={<i className="ri-arrow-right-fill !font-normal"></i>} variant="primary" size="medium" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default index;
