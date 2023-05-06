import Grid from "@/components/Grid";
import LetterPicker from "@/components/LetterPicker";
import RowPicker from "@/components/RowPicker";
import SizePicker from "@/components/SizePicker";
import axios from "axios";
import Image from "next/image";
import {useState} from "react";
import ColRowPicker from "@/components/ColRowPicker";

export default function Home() {

    const [sizeData, setSizeData] = useState('')
    const [columnData, setColumnData] = useState(5)
    const [rowData, setRowData] = useState(5)

    //TASK 2 - Getting all the shape information from the API
    const [shapes, setShapes] = useState([])

    const testObj = [
        {letter: "F", content: "EEEEE EEEEE EEFFE EFFEE EEFEE"},
        {letter: "I", content: "EEIEE EEIEE EEIEE EEIEE EEIEE"}
    ]
    const testObjJSON = JSON.stringify(testObj)

  const task2apiCall = async() =>{
    await axios.get('http://matsaki95.ddns.net:8900/api/v1/a2-task').then((response) => {
      setShapes(JSON.parse(response.data))
    })
    // setShapes(JSON.parse(testObjJSON))
    console.log(shapes);
    for(let i=0; i<shapes.length; i++){
      console.log(shapes[i].content);
    }
    
  }

  //TASK 10 - Generating Data and Sending them to the API with Axios
  function task10apiCall(){
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
        setSizeData(newSize)
    }

    function handleColRowChange(newSize) {
        setColumnData(newSize[0])
        setRowData(newSize[1])
    }

    console.log('COL DATA', columnData)
    console.log('ROW DATA', rowData)
    return (
        <div className="my-4 p-2">
            <h1 className="font-bold bg-blue-400 p-2 rounded">TASK 1</h1>
            <div className="flex flex-col">
                <div className="flex justify-center items-center">
                    <Grid rows={rowData} columns={columnData} sizeData={sizeData}/>
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
            <div className="">
                <button className="rounded bg-white p-2 m-4 border-2 border-black flex" onClick={task2apiCall}>
                    Generate all the shapes!
                </button>
            </div>
        </div>
    );
}
