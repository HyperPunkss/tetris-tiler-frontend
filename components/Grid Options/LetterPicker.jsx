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
import { useEffect, useState } from "react";

const images = [
    { src: fImage, alt: "f-letter", id: "f" },
    { src: iImage, alt: "i-letter", id: "i" },
    { src: lImage, alt: "l-letter", id: "l" },
    { src: nImage, alt: "n-letter", id: "n" },
    { src: pImage, alt: "p-letter", id: "p" },
    { src: tImage, alt: "t-letter", id: "t" },
    { src: uImage, alt: "u-letter", id: "u" },
    { src: vImage, alt: "v-letter", id: "v" },
    { src: wImage, alt: "w-letter", id: "w" },
    { src: xImage, alt: "x-letter", id: "x" },
    { src: yImage, alt: "y-letter", id: "y" },
    { src: zImage, alt: "z-letter", id: "z" },
];

function LetterPicker({ onLettersChange }) {
    const [selectedLetters, setSelectedLetters] = useState([]);

    useEffect(() => {
        onLettersChange(selectedLetters);
    }, [onLettersChange,selectedLetters]);

    const handleLetterSelect = (event) => {
        const letterId = event.target.id;
        if (selectedLetters.includes(letterId)) {
            setSelectedLetters(selectedLetters.filter((letter) => letter !== letterId));
        } else {
            setSelectedLetters([...selectedLetters, letterId]);
        }
    };

    
    return (
        <div className="grid grid-cols-3 my-4 mr-5">
            {images.map((image) => (
                <>
                    <div key={image.id} className="flex justify-center items-center">
                        <Image key={image.id} src={image.src} alt={image.alt} width={50} height={50} />
                        
                        <input
                            className="hover:cursor-pointer ml-4"
                            type="checkbox"
                            name="letter-picker"
                            onChange={handleLetterSelect}
                            id={image.id}
                        />
                    </div>
                </>
            ))}
        </div>
    );
}

export default LetterPicker;
