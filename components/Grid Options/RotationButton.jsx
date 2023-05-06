import React, { useEffect, useState } from "react";

function RotationButton({ onRotationChange }) {
    const [isRotationTrue, setIsRotationTrue] = useState(false);

    useEffect(() => {
        onRotationChange(isRotationTrue);
    }, [isRotationTrue, onRotationChange]);

    function handleRotationChange(e) {
        setIsRotationTrue(Boolean(e.target.value));
    }

    return (
        <div className="my-4">
            <div className="flex">
                <h1 className="text-center font-semibold mr-[2px] mb-2 text-sm ">Rotation Allowed?</h1>
            </div>

            {/*Column*/}
            <select
                name="sizePicker"
                className="border-[2px] border-purple-700 bg-gray-200 p-2 rounded-lg shadow-md w-[120px] h-[43px] mr-4"
                value={isRotationTrue}
                onChange={handleRotationChange}
            >
                <option value="false" className="text-black">
                    No
                </option>
                <option value="true" className="text-black">
                    Yes
                </option>
            </select>
        </div>
    );
}

export default RotationButton;

// className = "border-[2px] border-purple-700 bg-gray-200 p-2 rounded-lg shadow-md w-[80px] mr-4";
