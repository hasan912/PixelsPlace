import cloudinary from "cloudinary"

import FavouriteList from "./favouriteList";
import Navbar from "@/components/navbar";

export interface MyImage {
    public_id: string;
    tags:string[];
}

const Page = async () => {

    
    let res = (await cloudinary.v2.search
        .expression("resource_type: image AND tags=Favourite")
        .sort_by("public_id", "desc")
        .max_results(100000)
        .with_field('tags')
        .execute())as {resources:MyImage[]};

        

    return(
    <>
    <Navbar/>
     <div className="py-5 px-5 flex items-center justify-between">
            <h2 className="text-3xl font-semibold tracking-tight">Favourite</h2>
        </div>
        <FavouriteList resources={res.resources} />
    </>
)};
export default Page;
