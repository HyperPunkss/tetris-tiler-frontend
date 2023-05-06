import Grid from "@/components/Grid";
import axios from "axios";
import Image from "next/image";
import fImage from '../styles/icons/letterF.png'
export default function Home() {
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
            console.log(response);
        },
        (error) => {
            console.log(error);
        }
    );

    function handleSizeChange() {

    }

    return (
        <div className="my-4 p-2">
            <div className="flex justify-center items-center flex-col">
                <Grid rows={3} columns={21} />
                <div className="my-4">
                    <select>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                    <Image src={fImage} alt='broken-img' width={70} height={20}/>
                </div>
            </div>
        </div>
    );
}
