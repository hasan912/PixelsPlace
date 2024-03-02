'use client'
import { CldImage } from "next-cloudinary";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { addTags } from "./action";
import { useState } from "react";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const View = ({ src, tag }: { tag: string[]; src: string }) => {
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
      
      <div className="absolute top-2 left-2"
        onClick={() => {
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
      <div className="absolute top-2 right-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size='sm' variant="outline"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <Link href={`/edit?publicId=${src}`}>
                <DropdownMenuItem>
                  <span className="font-semibold text-base">Edit</span>
                  <DropdownMenuShortcut><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>

          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
};
export default View;