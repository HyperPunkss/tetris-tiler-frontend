import { useEffect, useState } from "react";

function FlipButton({ onFlipChange }) {
    const [isFlipTrue, setIsFlipTrue] = useState(false);

    useEffect(() => {
        onFlipChange(isFlipTrue);
    }, [isFlipTrue, onFlipChange]);

    function handleRotationChange(e) {
        setIsFlipTrue(Boolean(e.target.value));
    }

    return (
        <div className="my-4">
            <div className="flex">
                <h1 className="text-center font-semibold mr-[2px] mb-2 text-sm ">Flip Allowed?</h1>
            </div>

            {/*Column*/}
            <select
                name="sizePicker"
                className="hover:cursor-pointer border-[2px] border-purple-700 bg-gray-200 p-2 rounded-lg shadow-md w-[120px] h-[43px] mr-4"
                value={isFlipTrue}
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

export default FlipButton;
