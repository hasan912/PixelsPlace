"use client"

import { Button } from '@/components/ui/button';
import { CldUploadButton } from 'next-cloudinary';
import { useRouter } from 'next/navigation';

interface UploadImage {
  event: "success";
  info: { public_id: string };
}

const Upload = () => {
const router = useRouter()
    return <div>
            <Button asChild className="overflow-hidden md:flex sm:flex lg:flex 2xl:flex relative w-[95px] p-2 h-11 bg-slate-300 text-slate-950  rounded-lg text-lg font-bold cursor-pointer z-10 group">
      <div>
      <CldUploadButton uploadPreset="mpaddpit" 
       onUpload={(result)=>{
        let res = result as UploadImage;
        setTimeout(()=>{router.refresh();},1000)
      }}
    />
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-white  rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-slate-500  rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2  bg-slate-700 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2 left-4 z-10">
            <CldUploadButton uploadPreset="mpaddpit" 
            onUpload={(result)=>{
              let res = result as UploadImage;
              setTimeout(()=>{router.refresh();},1000)
            }}
        /></span>
        </div>
    </Button>
    </div>     

}
export default Upload 