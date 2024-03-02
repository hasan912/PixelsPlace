'use client'
import { CldImage } from "next-cloudinary";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { addTags } from "../gallery/action";
import { useState } from "react";
const View = ({ src, tag, fun }: { tag: string[]; src: string, fun:any }) => {
  const [fav, setfav] = useState(tag.includes('Favourite'))
  return (
    <div className="relative">
      <CldImage
        className="rounded-md"
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        alt="Description of my image" />

      <div className="absolute top-2 right-2"
        onClick={() => {
          fun(src)
          setfav(!fav)
          addTags(src, fav)
        }}
      >
        {
          fav ? (<AiFillHeart className="h-7 w-7 cursor-pointer text-red-500 animate-pulse" />)
            :
            (<AiOutlineHeart className="h-7 w-7 cursor-pointer text-white hover:text-red-500 duration-300" />)

        }
      </div>
    </div>
  )
};
export default View;