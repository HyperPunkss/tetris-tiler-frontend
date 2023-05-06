import Image from 'next/image'
import fImage from '../styles/icons/f-letter.png'
import iImage from '../styles/icons/i-letter.png'
import lImage from '../styles/icons/l-letter.png'
import nImage from '../styles/icons/n-letter.png'
import pImage from '../styles/icons/p-letter.png'
import tImage from '../styles/icons/t-letter.png'
import uImage from '../styles/icons/u-letter.png'
import vImage from '../styles/icons/v-letter.png'
import wImage from '../styles/icons/w-letter.png'
import xImage from '../styles/icons/x-letter.png'
import yImage from '../styles/icons/y-letter.png'
import zImage from '../styles/icons/z-letter.png'

function LetterPicker() {
  return (
    <div>
        <Image src={fImage} width={70} height={70} alt='broken-f-letter'/>
    </div>
  )
}

export default LetterPicker