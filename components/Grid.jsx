import React, { useState } from "react";

const Grid = ({ rows, columns, sizeData }) => {
    const [cellSize, setCellSize] = useState("medium");

    const handleClick = (id) => {
        console.log(id);
    };

    const handleSizeChange = (event) => {
        setCellSize(event.target.value);
    };

    const cellClasses = {
        small: "w-2 h-2",
        medium: "w-8 h-8",
        large: "w-10 h-10",
    };

    const grid = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            const id = `${i}-${j}`;
            row.push(<div className={`${cellClasses[sizeData]} border border-black`} key={id} onClick={() => handleClick(id)}></div>);
        }
        grid.push(
            <div className="flex" key={i}>
                {row}
            </div>
        );
    }
    return (
        <div className="mt-4">
            <div className="flex flex-col">{grid}</div>
        </div>
    );
};

export default Grid;
