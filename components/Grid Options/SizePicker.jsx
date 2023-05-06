import React, { useEffect, useState } from "react";

function SizePicker({ onSizeChange }) {
    const [sizeValue, setSizeValue] = useState("medium");

    useEffect(() => {
        onSizeChange(sizeValue);
    }, [sizeValue]);

    return (
        <div className="my-4 mr-4">
            <div>
                <h1 className="text-center font-semibold mr-[2px] mb-2 text-sm">Canvas size</h1>
            </div>
            <select
                name="sizePicker"
                value={sizeValue}
                onChange={(e) => setSizeValue(e.target.value)}
                className="hover:cursor-pointer h-[43px] border-[2px] border-purple-700 p-2 rounded-lg shadow-md"
            >
                <option value="small" className="text-black">
                    Small
                </option>
                <option value="medium" className="text-black">
                    Medium
                </option>
                <option value="large" className="text-black">
                    Large
                </option>
            </select>
        </div>
    );
}

export default SizePicker;
