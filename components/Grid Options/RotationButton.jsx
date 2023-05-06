import React from "react";

function RotationButton() {
    return (
        <div className="my-4">
            <div className="flex">
                <h1 className="text-center font-semibold mr-[2px] mb-2 text-sm ml-[40px]">Columns</h1>
            </div>

            {/*Column*/}
            <select
                name="sizePicker"
                className="border-[2px] border-purple-700 bg-gray-200 p-2 rounded-lg shadow-md w-[80px] mr-4"
            >
                <option value="small" className="text-white">
                    Small
                </option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </div>
    );
}

export default RotationButton;

// className = "border-[2px] border-purple-700 bg-gray-200 p-2 rounded-lg shadow-md w-[80px] mr-4";
