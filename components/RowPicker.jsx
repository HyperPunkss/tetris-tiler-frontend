import React from "react";

function RowPicker() {
    return (
        <div className="my-4 mx-4">
            <div className="flex">
                <h1 className="text-center font-semibold mr-[2px] mb-2 text-sm ml-[40px]">Columns</h1>
                <h1 className="text-center font-semibold mr-[2px] mb-2 text-sm ml-[68px]">Rows</h1>
            </div>
            <input
                type="number"
                name=""
                id=""
                className=" border-[2px] border-purple-700 bg-gray-200 p-2 rounded-lg shadow-md w-[80px] mx-8"
                min={1}
                max={100}
                value={5}
            />
            <input
                type="number"
                name=""
                id=""
                className=" border-[2px] border-purple-700 bg-gray-200 p-2 rounded-lg shadow-md w-[80px]"
                min={1}
                max={100}
                value={5}
            />
        </div>
    );
}

export default RowPicker;
