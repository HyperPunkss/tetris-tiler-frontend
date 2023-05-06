import Grid from "@/components/Grid";
import LetterPicker from "@/components/LetterPicker";
import SizePicker from "@/components/SizePicker";
import axios from "axios";
import Image from "next/image";
import {useEffect, useState} from "react";
import ColRowPicker from "@/components/ColRowPicker";
import LetterPickerUnique from "@/components/LetterPickerUnique";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export default function Home() {
    const [sizeData, setSizeData] = useState("");
    const [columnData, setColumnData] = useState(5);
    const [rowData, setRowData] = useState(5);
    const [uniqueLetterData, setUniqueLetterData] = useState('')

    //TASK 2 - Getting all the shape information from the API
    const [shapes, setShapes] = useState([]);

    async function task2apiCall() {
        await axios.get("http://matsaki95.ddns.net:8900/api/v1/a2-task").then((response) => {
            setShapes(response.data);
        });
    }

    //TASK 3 
    const [rotations, setRotations] = useState([])
    async function task3apiCall() {
      await axios.get("http://matsaki95.ddns.net:8900/api/v1/a3-task/?letter=f").then((response) => {
        setRotations(response.data)
        console.log(response.data);
      })
    }

    //TASK 10 - Generating Data and Sending them to the API with Axios
    function task10apiCall() {
        var data = JSON.stringify({
            x: 5,
            y: 5,
            holes: [{x: 2, y: 2}],
            allow_rotations: true,
            allow_flips: false,
            shapes: ["T", "L"],
        });

        // var config = {
        //   method: 'post',
        //   url: 'api',
        //   data: data
        // }
        axios.post("/api/user", data).then(
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
    function handleColRowChange(newSize) {
        setColumnData(newSize[0]);
        setRowData(newSize[1]);
    }

    function handleUniqueLetterChange(newUniqueLetter) {
        setUniqueLetterData(newUniqueLetter)
    }

    console.log(uniqueLetterData)
    return (
        <div className="my-4 p-2">
            <h1 className="font-bold bg-blue-400 p-2 rounded">TASK 1</h1>
            <div className="flex flex-col">
                <div className="flex justify-center items-center">
                    <Grid rows={rowData} columns={columnData} sizeData={sizeData} colorData={""}/>
                </div>
                <div className="flex justify-center items-center p-4">
                    <SizePicker onSizeChange={handleSizeChange}/>
                    <ColRowPicker onColRowChange={handleColRowChange}/>
                </div>
                <div className="ml-32 grid ">
                    <LetterPicker/>
                </div>
            </div>
            <h1 className="font-bold bg-blue-400 p-2 rounded">TASK 2</h1>
            <div className="md:ml-4 lg:ml-8">
                <button className="rounded bg-white p-2 my-2 border-2 border-black flex" onClick={task2apiCall}>
                    Generate all the shapes!
                </button>
            </div>
            {shapes.map((shape, i) => {
                console.log("SHAPE CONTENT", shape.content);
                return <Grid key={i} rows={5} columns={5} sizeData={sizeData} colorData={shape.content}/>;
            })}
                        <h1 className="font-bold bg-blue-400 p-2 rounded">TASK 3</h1>
            <div className=''>
                <LetterPickerUnique onUniqueLetterChange={handleUniqueLetterChange}/>
                <button className="rounded bg-white p-2 m-4 border-2 border-black flex" onClick={task3apiCall}>
                    Generate the Shape`s Rotations
            </button>
            </div>
            {rotations.map((rotation, i) => {
                return <Grid key={i} rows={5} columns={5} sizeData={sizeData} colorData={rotation.content}/>
              })
            }
        </div>
    );
}
