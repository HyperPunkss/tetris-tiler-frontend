import React from "react";

const Grid = ({ rows, columns }) => {
    const handleClick = (id) => {
        console.log(id);
    };

    const grid = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            const id = `${i}-${j}`;
            row.push(<div className="w-5 h-5 border border-black" key={id} onClick={() => handleClick(id)}></div>);
        }
        grid.push(
            <div className="flex" key={i}>
                {row}
            </div>
        );
    }
    return <div className="flex flex-col">{grid}</div>;
};

export default Grid;
