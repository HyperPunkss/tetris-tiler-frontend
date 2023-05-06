import Grid from "@/components/Grid";
import LetterPicker from "@/components/LetterPicker";
import SizePicker from "@/components/SizePicker";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  //TASK 2 - Getting all the shape information from the API
  const [shapes, setShapes] = useState([])
  
  const testObj = [
    {letter: "F", content: "EEEEE EEEEE EEFFE EFFEE EEFEE"},
    {letter: "I", content: "EEIEE EEIEE EEIEE EEIEE EEIEE"}
  ]
  const testObjJSON = JSON.stringify(testObj)

  function task2apiCall(){
    // axios.get('/url/user').then((response) => {
    //   setShapes(JSON.parse(response.data))
    // })
    
    setShapes(JSON.parse(testObjJSON))
    console.log(shapes);
    for(let i=0; i<shapes.length; i++){
      console.log(shapes[i].content);
    }
    
  }

  //TASK 10 - Generating Data and Sending them to the API with Axios 
    var data = JSON.stringify({
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
    axios.post("/api/user", data).then(
        (response) => {
            const data = response.data;
            //console.log(response)
        },
        (error) => {
            //console.log(error);
        }
    );

    //Letter Compare and returning the matching Colour
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
        {letter: "B", color: "#000000"},
        {letter: "E", color: "#ffffff"}
    ];
    var input;
    const result = letterArray
        .filter((item) => {
            return item.letter === input;
        })
        .map((item) => {
            return item.color;
        });
    //console.log(result[0]);

    return (
        <div className="my-4 p-2">
            <h1 className="font-bold bg-blue-400 p-2 rounded">TASK 1</h1>
            <div className="flex flex-col">
                <div>
                    <Grid rows={9} columns={9} />
                </div>
                <SizePicker />
                <LetterPicker />
                div
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
