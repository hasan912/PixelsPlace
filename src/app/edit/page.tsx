import React from 'react';
import {TabsDemo} from './tabs';
import Navbar from '@/components/navbar';
import cloudinary from "cloudinary"
import View from '../gallery/view';
interface MyImage {
  public_id: string;
  tags:string[];
}
const  Page = async ({searchParams: { publicId }}:
   {searchParams: { publicId:string }}) => {
  
  let res = (await cloudinary.v2.search
    .expression("resource_type: image")
    .sort_by("public_id", "desc")
    .max_results(6)
    .with_field('tags')
    .execute())as {resources:MyImage[]};
  return (
    
    <>
    <Navbar/>
    <div className="py-5 px-5">
            <h2 className="text-3xl font-semibold tracking-tight">Edit Picture</h2>
        </div>
        <TabsDemo src={publicId}/>
        <h1 className='text-3xl py-5 px-16'>More Images</h1>
        <div className="columns-2 md:columns-5 gap-4 space-y-4 mx-auto p-5">
                {res.resources.map((item , i)=>{
                    return(
                    <div key={i} className="break-inside-avoid">
                        <View src={item.public_id} tag={item.tags} />
                    </div>
                )})}
            </div>
        </>
  );
}

export default Page;
