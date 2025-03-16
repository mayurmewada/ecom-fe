import React, { useEffect, useState } from "react";
import CheckboxFilter from "../CheckboxFilter";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../redux/slices/filterSlice";

const index = ({ data }) => {
    const dispatch = useDispatch();

    const [checked, setChecked] = useState([]);

    const handleChange = (e, filterName) => {
        const isFilter = checked.filter((filter) => filter.name === filterName);
        const existFilterIndex = checked.findIndex((filter) => filter.name === filterName);

        if (isFilter.length > 0) {
            const isChecked = isFilter[0]?.values?.filter((check) => check === e.target.name);
            const prevValues = isFilter[0].values;
            let tempChecked = [...checked];
            if (isChecked.length) {
                let tempValues = prevValues.filter((check) => check !== e.target.name);
                tempChecked[existFilterIndex] = { name: filterName, values: [...tempValues] };
                setChecked(tempChecked);
            } else {
                tempChecked[existFilterIndex] = { name: filterName, values: [...prevValues, e.target.name] };
                setChecked(tempChecked);
            }
        } else {
            setChecked([...checked, { name: filterName, values: [e.target.name] }]);
        }
    };

    useEffect(() => {
        if (checked.length > 0) {
            dispatch(setFilters(checked));
        }
    }, [checked]);

    return (
        <>
            {data.map((filterData, i) => (
                <div key={i} className="flex flex-col gap-2">
                    <CheckboxFilter filterData={[filterData]} handleChange={handleChange} checked={checked} />
                </div>
            ))}
        </>
    );
};

export default index;
