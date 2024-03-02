'use client'

import { Button } from './ui/button'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { FadeIn } from '../../variants'
import Link from 'next/link'

const Recommendation = () => {
    return (
        <>
      
        <motion.section variants={FadeIn('right',0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.4}}
         className='pb-12 xl:pt-[157px] xl:pb-112[px] bg-soft_green-secondary relative'>
            <motion.div
            variants={FadeIn('up',0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.4}}
            >

                            <div className='flex mt-10 flex-col xl:flex-row xl:pl-[100px] gap-y-12 xl:gap-y-0'>
                                {/* text */}
                                <div className='max-w-[445px] xl:max-w-[900px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0' >
                                    <h2 className='text-3xl text-gray-400 mb-4'>Upload & Organize</h2>
                                    <p className='text-gray-500 text-sm mb-6'>Our Service</p>
                                    <p className='mb-[10px]'>With PixelPalace, you can effortlessly upload your images and create personalized albums for easy access. Sort your photos into categories, events, or themes to keep them organized and readily available whenever you need them.</p>
                                    <h2 className='text-xl mb-4'>Favorite & Save</h2>
                                    <p className='mb-[40px]'> Found an image you absolutely adore? Mark it as a favorite with just a click! PixelPalace lets you curate your own gallery of cherished images, making it simple to revisit and share your most beloved moments.</p>
                                    <div className='flex items-center gap-x-[50px]'>
                                        <Button size='default' className='px-10 py-5 bg-white text-black hover:bg-gray-400 hover:text-gray-900 duration-300'><Link href={'/gallery'}>View More!</Link></Button>
                                    </div>
                                </div>

                                {/* Image & testinomial */}

                                <div className='order-1 xl:order-2 flex-1 justify-center xl:justify-end relative h-[634px]'>
                                    <div>
                                        <Image  src={"/1.png"} width={905} height={528} quality={100} alt='' className=' xl:rounded-tl-[25px] xl:rounded-bl-[25px]' />
                                        <div className='bg-neutral-700 p-4 text-white xl:ml-10 text-center xl:text-left xl:max-w-[668px] xl:min-h-[150px] xl:absolute xl:bottom-0 md:flex-col md:max-w-[900px] xl:rounded-xl xl:px-10'>
                                            <p className='mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6'> Unleash your creativity with PixelPalace editing tools. From basic adjustments like cropping and resizing to advanced features such as filters and effects, you can transform your images into masterpieces with ease. Experiment, refine, and let your imagination soar!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </motion.div>
        </motion.section>
        </>
    );
}

export default Recommendation;
