import Grid from "@/components/Grid";
import LetterPicker from "@/components/Grid Options/LetterPicker";
import SizePicker from "@/components/Grid Options/SizePicker";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import ColRowPicker from "@/components/Grid Options/ColRowPicker";
import LetterPickerUnique from "@/components/Grid Options/LetterPickerUnique";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import RotationButton from "@/components/Grid Options/RotationButton";
import FlipButton from "@/components/Grid Options/FlipButton";

export default function Home() {
    const [sizeData, setSizeData] = useState("");
    const [columnData1, setColumnData1] = useState(5);
    const [columnData4, setColumnData4] = useState(8);
    const [rowData1, setRowData1] = useState(5);
    const [rowData4, setRowData4] = useState(8);
    const [uniqueLetterData3, setUniqueLetterData3] = useState("");
    const [uniqueLetterData4, setUniqueLetterData4] = useState("");
    const [blackCellsArray, setBlackCellsArray] = useState([]);
    const [rotationValue4, setRotationValue4] = useState(false);
    const [flipValue4,setFlipValue4] = useState(false)
    //TASK 2 - Getting all the shape information from the API
    const [shapes, setShapes] = useState([]);

    async function task2apiCall() {
        await axios.get("http://matsaki95.ddns.net:8900/api/v1/a2-task").then((response) => {
            setShapes(response.data);
        });
    }

    //TASK 3
    const [rotations, setRotations] = useState([]);

    async function task3apiCall() {
        await axios.get("http://matsaki95.ddns.net:8900/api/v1/a3-task/?letter=" + uniqueLetterData3).then((response) => {
            setRotations(response.data);
            console.log(response.data);
        });
    }

    //TASK 4
    const [allowedPositions, setAllowedPositions] = useState([])

    function task4apiCall() {
        const finalBlackCellsArray = [];
        for (let i = 0; i < blackCellsArray.length; i++) {
            finalBlackCellsArray.push([blackCellsArray[i].col, rowData4 - blackCellsArray[i].row - 1]);
        }
        let task4data = JSON.stringify({
            gridSizeX: rowData4,
            gridSizeY: columnData4,
            letter: uniqueLetterData4,
            blackHoles: finalBlackCellsArray,
            allowRotations: rotationValue4,
            allowFlip: flipValue4,
        });
        console.log(task4data);
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "http://matsaki95.ddns.net:8900/api/v1/a4-task",
            headers: {
                Key: "Content-Type",
                Value: "application/json",
                "Content-Type": "application/json",
            },
            data: task4data,
        };

        axios
            .request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setAllowedPositions(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    //TASK 10 - Generating Data and Sending them to the API with Axios
    function task10apiCall() {
        var task10data = JSON.stringify({
            x: 5,
            y: 5,
            holes: [{ x: 2, y: 2 }],
            allow_rotations: true,
            allow_flips: false,
            shapes: ["T", "L"],
        });

        // var config = {
        //   method: 'post',
        //   url: 'api',
        //   data: data
        // }
        axios.post("/api/user", task10data).then(
            (response) => {
                const data = response.data;
                //console.log(response)
            },
            (error) => {
                console.log(error);
            }
        );
    }

    //Callback function
    function handleSizeChange(newSize) {
        setSizeData(newSize);
    }

    //Callback function for Columns & Rows Size
    function handleColRowChange1(newSize) {
        setColumnData1(newSize[0]);
        setRowData1(newSize[1]);
    }

    function handleColRowChange4(newSize) {
        setColumnData4(newSize[0]);
        setRowData4(newSize[1]);
    }

    function handleUniqueLetterChange3(newUniqueLetter) {
        setUniqueLetterData3(newUniqueLetter);
    }

    function handleUniqueLetterChange4(newUniqueLetter) {
        setUniqueLetterData4(newUniqueLetter);
    }

    function handleBlackCellsArray(blackCellsArray) {
        setBlackCellsArray(blackCellsArray);
    }

    function handleRotationChange(newRotation) {
        setRotationValue4(newRotation);
    }

    function handleFlipChange(newFlip){
        setFlipValue4(newFlip)
    }

    console.log("INDEX LOG",flipValue4);
    console.log("INDEX LOG",rotationValue4);
    return (
        <div className="my-4 p-2 md:px-6 lg:px-14">
            <h1 className="font-semibold bg-red-500 p-2 rounded">TASK 1</h1>
            <div className="flex flex-col my-4">
                <div className="flex justify-center items-center">
                    <Grid
                        isClickable={false}
                        rows={rowData1}
                        columns={columnData1}
                        sizeData={sizeData}
                        colorData={""}
                        onHandleBlackCellsArray={handleBlackCellsArray}
                    />
                </div>
                <div className="flex justify-center items-center p-4">
                    <SizePicker onSizeChange={handleSizeChange} />
                    <ColRowPicker onColRowChange={handleColRowChange1} />
                </div>
            </div>
            <h1 className="font-semibold bg-[#f89622] p-2 rounded">TASK 2</h1>
            <div className="md:ml-4 lg:ml-8 my-4">
                <button className="rounded bg-white p-2 my-2 border-2 border-black flex" onClick={task2apiCall}>
                    Generate all the shapes!
                </button>
            </div>
            {shapes.map((shape, i) => {
                return (
                    <>
                        <div className="inline-block mx-2 text-center">
                            <Grid
                                onHandleBlackCellsArray={handleBlackCellsArray}
                                key={i}
                                rows={5}
                                columns={5}
                                sizeData={sizeData}
                                colorData={shape.content}
                            />
                        </div>
                    </>
                );
            })}
            <h1 className="font-semibold bg-[#fde100] p-2 rounded my-4">TASK 3</h1>
            <div className="md:ml-4 lg:ml-8 my-4">
                <button className="rounded bg-white p-2 my-2 border-2 border-black flex" onClick={task3apiCall}>
                    Generate the Shape`s Rotations
                </button>
            </div>
            <div className="">
                <LetterPickerUnique onUniqueLetterChange={handleUniqueLetterChange3} />
            </div>
            {rotations.map((rotation, i) => {
                return (
                    <>
                        <div className="inline-block mx-2">
                            <Grid
                                onHandleBlackCellsArray={handleBlackCellsArray}
                                isClickable={false}
                                key={i}
                                rows={5}
                                columns={5}
                                sizeData={sizeData}
                                colorData={rotation.content}
                            />
                        </div>
                    </>
                );
            })}
            <h1 className="font-semibold bg-[#4eb748] p-2 rounded my-4">TASK 4</h1>
            <div className="flex flex-col my-4">
                <div className="flex justify-center items-center">
                    <Grid
                        onHandleBlackCellsArray={handleBlackCellsArray}
                        isClickable={true}
                        rows={rowData4}
                        columns={columnData4}
                        sizeData={sizeData}
                        colorData={""}
                    />
                </div>
                <div className="flex justify-center items-center mr-10 mt-4">
                    <div>
                        <RotationButton onRotationChange={handleRotationChange} />
                    </div>
                    <div>
                        <FlipButton onFlipChange={handleFlipChange}/>
                    </div>
                    <div className="ml-[14px]">
                        <ColRowPicker onColRowChange={handleColRowChange4} />
                    </div>
                </div>
                <div>
                    <LetterPickerUnique onUniqueLetterChange={handleUniqueLetterChange4} />
                </div>
                <div className="md:ml-4 lg:ml-8 my-4">
                    <button className="rounded bg-white p-2 my-2 border-2 border-black flex" onClick={task4apiCall}>
                        Generate Any Allowed Position
                    </button>
                </div>
            </div>
            {allowedPositions.map((allowedPosition, i) => {
                return (
                    <>
                        <div className="inline-block mx-2">
                            <Grid
                                onHandleBlackCellsArray={handleBlackCellsArray}
                                isClickable={false}
                                key={i}
                                rows={rowData4}
                                columns={columnData4}
                                sizeData={sizeData}
                                colorData={allowedPosition}
                            />
                        </div>
                    </>
                );
            })}
        </div>
    );
}
