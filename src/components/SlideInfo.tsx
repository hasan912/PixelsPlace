import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { IoMdBookmark } from "react-icons/io";
import { Data, CurrentSlideData } from "@/app/page";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
  return (
    <>
      <motion.span layout className=" mb-2 h-1 w-5 rounded-full bg-white" />
      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />
      <motion.div layout className=" mt-5 flex items-center gap-3">
        
        <Button
          className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-yellow-500 text-xs  transition 
            duration-300 ease-in-out hover:opacity-80 "
        >
          
          <Link href={'/favourite'}>
          <IoMdBookmark className=" text-xl" />
          </Link>
        </Button>
        <Button
          className=" w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-[10px] font-semibold text-sm transition duration-300 
            ease-in-out hover:bg-white hover:text-black "
        ><Link href={'gallery'}>View Gallery</Link>
        </Button>
      </motion.div>
    </>
  );
}

export default SlideInfo;
