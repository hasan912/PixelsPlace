'use client'
import { Label } from './ui/label';
import { Button } from './ui/button';

import { motion } from 'framer-motion';
import { FadeIn } from '../../variants';
import Link from 'next/link';


const SearchBox = () => {
  return (
    <motion.div
    variants={FadeIn('up',0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false, amount:0}}
    className="w-full max-w-[788px] max-h-max flex flex-col  rounded-[20px] p-5">
      {/* input calender date picker */}
      <div className='md-[20px]'>
        {/* label */}
        <Label htmlFor='destination' className='text-5xl  text-[#8793a163]'>Welcome to  Pixel Palace </Label>
        {/* input & icon  */}
        <div className='relative flex text-white font-semibold items-center mt-8 mb-[20px]'>
          <p>PixelPalace is your go-to destination for managing, saving, and enhancing your favorite images. Whether you are an amateur photographer, a social media enthusiast, or just someone who loves visuals, PixelPalace offers a seamless platform to organize and refine your image collection.</p>
        </div>
        {/* date picker */}
      </div>
      {/* slect, checkbox, btn */}
      <div className=''>
        {/* btn */}
        <Button size='default' className='px-10 py-5 bg-white text-black hover:bg-gray-400 hover:text-gray-900 duration-300'><Link href={'/'}>Explore More</Link></Button>
      </div>

    </motion.div>
  );
}

export default SearchBox;
