import Aboutus from '@/components/Aboutus';
import Hero from '@/components/Hero';
import OurServe from '@/components/OurServe';
import Navbar from '@/components/navbar';
import React from 'react';

const Page = () => {
  return (
    <div>
      <div>
        <Hero/>
        <Aboutus/>
        <OurServe/>
      </div>
    </div>
  );
}

export default Page;
