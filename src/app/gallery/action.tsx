'use server'

import cloudinary from 'cloudinary'
import { revalidatePath } from 'next/cache';

export async function addTags(publicId:string, fav:boolean) {
    if (fav) {
        
    await cloudinary.v2.uploader.remove_tag("Favourite",[publicId]);
    
    }
    else{
    await cloudinary.v2.uploader.add_tag("Favourite",[publicId]);
    }

    await new Promise ((resolve)=>{
        setTimeout(resolve),1000
    })
    revalidatePath('/gallery')
}

export async function CreateFolder(folder:string,image:string) {
    await cloudinary.v2.api.create_folder(folder)
    await cloudinary.v2.uploader.rename(image, `${folder}/${image}`)
}