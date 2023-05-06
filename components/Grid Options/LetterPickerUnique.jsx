import Image from "next/image";
import fImage from "../../styles/icons/f-letter.png";
import iImage from "../../styles/icons/i-letter.png";
import lImage from "../../styles/icons/l-letter.png";
import nImage from "../../styles/icons/n-letter.png";
import pImage from "../../styles/icons/p-letter.png";
import tImage from "../../styles/icons/t-letter.png";
import uImage from "../../styles/icons/u-letter.png";
import vImage from "../../styles/icons/v-letter.png";
import wImage from "../../styles/icons/w-letter.png";
import xImage from "../../styles/icons/x-letter.png";
import yImage from "../../styles/icons/y-letter.png";
import zImage from "../../styles/icons/z-letter.png";
import {useEffect, useState} from "react";

const images = [
    {src: fImage, alt: "f-letter", id: "F"},
    {src: iImage, alt: "i-letter", id: "I"},
    {src: lImage, alt: "l-letter", id: "L"},
    {src: nImage, alt: "n-letter", id: "N"},
    {src: pImage, alt: "p-letter", id: "P"},
    {src: tImage, alt: "t-letter", id: "T"},
    {src: uImage, alt: "u-letter", id: "U"},
    {src: vImage, alt: "v-letter", id: "V"},
    {src: wImage, alt: "w-letter", id: "W"},
    {src: xImage, alt: "x-letter", id: "X"},
    {src: yImage, alt: "y-letter", id: "Y"},
    {src: zImage, alt: "z-letter", id: "Z"},
];

function LetterPicker({onUniqueLetterChange}) {
    const [specificLetterID, setSpecificLetterID] = useState('f')

    useEffect(() => {
        onUniqueLetterChange(specificLetterID)
    }, [specificLetterID,onUniqueLetterChange])

    function handleRadioChange(e) {
        setSpecificLetterID(e.target.id)
    }

    
    return (
        <>
            <div className="grid grid-cols-3 my-4 mr-8 md:grid-cols-4 lg:grid-cols-6">
                {images.map((image) => (
                    <>
                        <div className="flex justify-center items-center ">
                            <Image key={image.id} src={image.src} alt={image.alt} width={50} height={50}/>
                            <input className="hover:cursor-pointer ml-4" type="radio" name="letter-picker" id={image.id}
                                   value={specificLetterID} defaultChecked={image.id === 'F'}
                                   onChange={handleRadioChange}/> 
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}

export default LetterPicker;
