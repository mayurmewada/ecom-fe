import { Checkbox } from "@headlessui/react";
import { useState } from "react";

const CheckboxFilter = ({ filterData, handleChange, checked }) => {
    const getChecked = (name, selector) => {
        const filterChecked = checked?.filter((check) => check.name === name);
        const filterValueChecked = filterChecked[0]?.values?.filter((value) => value === selector);
        if (filterValueChecked?.length > 0) {
            return true;
        } else {
            false;
        }
    };

    return (
        <>
            {filterData.map((filter) => (
                <>
                    <p className="uppercase font-semibold text-grey-600 tracking-[0.4px]">{filter.name}</p>
                    <ul className="divide-y">
                        {filter.values.map((filterValue) => (
                            <li className="py-1">
                                <button className="py-1 flex gap-3 w-full relative">
                                    <input onChange={(e) => handleChange(e, filter.name)} name={filterValue.selector} type="checkbox" className="absolute cursor-pointer inset-0 w-full h-full opacity-0" id="" />
                                    <Checkbox name={filterValue.selector} checked={getChecked(filter.name, filterValue.selector)} className="group block pointer-events-none min-w-[18px] min-h-[18px] max-w-[18px] max-h-[18px] rounded border border-grey-300 bg-white data-[checked]:bg-grey-700">
                                        <svg className="stroke-white opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
                                            <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Checkbox>
                                    <span className="text-left text-grey-500 leading-[19px]">{filterValue.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
            ))}
        </>
    );
};

export default CheckboxFilter;
