import React, { useEffect, useState } from "react";

const Grid = ({ rows, columns, sizeData, colorData }) => {
    const [cellSize, setCellSize] = useState("medium");
    const [cellColors, setCellColors] = useState([]);

    useEffect(() => {
        // Letter Compare and returning the matching Colour
        const letterArray = [
            { letter: "F", color: "#001fc4" },
            { letter: "I", color: "#9c1516" },
            { letter: "L", color: "#efee29" },
            { letter: "N", color: "#e719e2" },
            { letter: "P", color: "#07d4f3" },
            { letter: "T", color: "#8a8a8a" },
            { letter: "U", color: "#00e53f" },
            { letter: "V", color: "#f19a05" },
            { letter: "W", color: "#d5d5d5" },
            { letter: "X", color: "#2097b8" },
            { letter: "Y", color: "#b82082" },
            { letter: "Z", color: "#ff0011" },
            { letter: "B", color: "#000000" },
            { letter: "E", color: "#ffffff" },
        ];
        console.log("colordata", colorData.length);
        console.log(colorData);
        const newColorData = colorData.replace(/\s/g,'')
        console.log(newColorData);
        const colors = [];
        for (let i = 0; i < newColorData.length; i++) {
            const result = letterArray
                .filter((item) => {
                    return item.letter === newColorData[i];
                })
                .map((item) => {
                    return item.color;
                });
            console.log("result", result);
            colors.push(result[0]);
        }
        setCellColors(colors);
    }, [colorData]);

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
            row.push(
                <div
                    className={`${cellClasses[sizeData]} border border-black`}
                    key={id}
                    onClick={() => handleClick(id)}
                    style={{ backgroundColor: cellColors[i * columns + j] }}
                ></div>
            );
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
