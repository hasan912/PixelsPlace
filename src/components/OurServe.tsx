'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '../../variants'

import Image from "next/image";
const OurServe = () => {
    return (
        <>
            <div>
                <section className="text-gray-400 body-font bg-soft_green-secondary">
                    <div className=" px-5 py-24 mx-auto">
                        <div className="text-center mb-20">
                            <h1 className="sm:text-3xl text-3xl font-bold mb-4">
                                <span className="text-[#034EA2]"> Our </span>Service
                            </h1>
                            <p className="text-base leading-relaxed xl:w-10/12 lg:w-3/4 mx-auto  font-semibold ">
                                With PixelPalace, every image tells a story. Start crafting yours today!
                            </p>
                            <div className="flex mt-6 justify-center">
                                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
                            </div>
                        </div>
                        <motion.div variants={FadeIn('up', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.4 }} className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-center">
                            <motion.div variants={FadeIn('down', 0.2)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.4 }} className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 items-center justify-center h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" /></svg>  </div>
                                <div className="flex-grow">

                                    <h1 className="mb-3 text-indigo-500 text-xl inline-flex items-center">
                                        Share & Connect:
                                    </h1>
                                    <p className="leading-relaxedfont-semibold text-lg">
                                        Share your edited masterpieces directly from PixelPalace to your favorite social media platforms or with friends and family. Connect with fellow photography enthusiasts, exchange tips, and discover new inspiration within the vibrant PixelPalace community.
                                    </p>

                                </div>
                            </motion.div>
                            <motion.div variants={FadeIn('down', 0.4)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.4 }} className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 items-center justify-center h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg></div>
                                <div className="flex-grow">

                                    <h1 className="mb-3 text-indigo-500 text-xl inline-flex items-center">
                                        Privacy & Security
                                    </h1>
                                    <p className="leading-relaxedfont-semibold text-lg">
                                        Rest assured, your images are safe and secure with PixelPalace. We prioritize your privacy and employ robust security measures to ensure that your personal data remains protected at all times.</p>
                                </div>
                            </motion.div>
                            <motion.div variants={FadeIn('down', 0.4)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.4 }} className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 item-center justify-center h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h1 className="mb-3 text-indigo-500 text-xl inline-flex items-center">
                                        Mobile Compatibility:
                                    </h1>
                                    <p className="leading-relaxedfont-semibold text-lg">
                                        : Access PixelPalace anytime, anywhere, with our mobile-friendly interface. Whether you are on your smartphone, tablet, or computer, enjoy seamless browsing and editing on the go.</p>
                                </div>
                            </motion.div>
                            <motion.div variants={FadeIn('down', 0.4)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.4 }} className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 items-center justify-center h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h1 className="mb-3 text-indigo-500 text-xl inline-flex items-center">
                                        Join the PixelPalace Family
                                    </h1>
                                    <p className="leading-relaxedfont-semibold text-lg">
                                        Sign up today and embark on a journey of creativity and discovery with PixelPalace. Experience the joy of image management, editing, and sharing like never before!</p>
                                </div>
                            </motion.div>



                        </motion.div>

                    </div>
                </section>

            </div>

        </>
    );
}

export default OurServe;
