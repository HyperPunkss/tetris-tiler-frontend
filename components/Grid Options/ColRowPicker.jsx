import React, { useEffect, useState } from "react";

function ColRowPicker({ onColRowChange }) {
    const [colValue, setColValue] = useState(5);
    const [rowValue, setRowValue] = useState(5);

    useEffect(() => {
        onColRowChange([colValue, rowValue]);
    }, [colValue, rowValue,onColRowChange]);

    function handleValueChange(event) {
        event.preventDefault();
    }

    return (
        <div className="">
            <div className="flex">
                <h1 className="text-center font-semibold mr-[2px] mb-2 text-sm ml-[10px]">Columns</h1>
                <h1 className="text-center font-semibold mr-[2px] mb-2 text-sm ml-[48px]">Rows</h1>
            </div>

            {/*Column*/}
            <input
                type="number"
                name=""
                id=""
                className="border-[2px] border-purple-700 bg-gray-200 p-2 rounded-lg shadow-md w-[80px] mr-4"
                min={1}
                max={100}
                defaultValue={5}
                onChange={(e) => setColValue(e.target.value)}
                onKeyDown={handleValueChange}
            />

            {/*Row*/}
            <input
                type="number"
                name=""
                id=""
                className=" border-[2px] border-purple-700 bg-gray-200 p-2 rounded-lg shadow-md w-[80px]"
                min={1}
                max={100}
                defaultValue={5}
                onChange={(e) => setRowValue(e.target.value)}
                onKeyDown={handleValueChange}
            />
        </div>
    );
}

export default ColRowPicker;
