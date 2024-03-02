'use client'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CldImage } from "next-cloudinary"

export function TabsDemo({src}:{src:string},) {
  return (
    <Tabs defaultValue="account" className="w-full py-5 px-5">
      <TabsList className=" grid w-full grid-cols-3 md:grid-cols-6">
        <TabsTrigger value="original">Original</TabsTrigger>
        <TabsTrigger value="Blur">Blur</TabsTrigger>
        <TabsTrigger value="sharpen">Sharpen</TabsTrigger>
        <TabsTrigger className='hidden xl:flex' value="saturation">Saturation</TabsTrigger>
        <TabsTrigger value="improve" className='hidden xl:flex'>Improve</TabsTrigger>
        <TabsTrigger value="grayscale" className='hidden xl:flex'>Grayscale</TabsTrigger>
      </TabsList>
      <TabsList className=" grid w-full my-5 grid-cols-3 md:grid-cols-6">
        <TabsTrigger value="autoBrightness">Auto Brightness</TabsTrigger>
        <TabsTrigger value="autoContrast">Auto Contrast</TabsTrigger>
        <TabsTrigger value="pixelateFaces">Pixelate Faces</TabsTrigger>
        <TabsTrigger className='hidden xl:flex' value="blurFaces">Blur Faces</TabsTrigger>
        <TabsTrigger value="gradientFade" className='hidden xl:flex'>Gradient Fade</TabsTrigger>
        <TabsTrigger value="opacity" className='hidden xl:flex'>opacity</TabsTrigger>
      </TabsList>
      <TabsList className="xl:hidden mt-5 grid w-full grid-cols-3">
        <TabsTrigger value="blurFaces">Blur Faces</TabsTrigger>
        <TabsTrigger value="gradientFade">Gradient Fade</TabsTrigger>
        <TabsTrigger value="opacity">opacity</TabsTrigger>
      </TabsList>
      <TabsList className="xl:hidden mt-5 grid w-full grid-cols-3">
        <TabsTrigger  value="saturation">Saturation</TabsTrigger>
        <TabsTrigger value="improve">Improve</TabsTrigger>
        <TabsTrigger value="grayscale">Grayscale</TabsTrigger>
      </TabsList>

      <TabsContent value="original">
       <div className="xl:flex  gap-7 justify-center py-7">
       <CldImage
        width="400"
        height="400"
        src={src}
        className="my-5 xl:my-0"
        sizes="100vw"
        alt="Description of my image"
      />
      <CldImage
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />
       </div>
      </TabsContent>
      <TabsContent value="Blur">
       <div className="xl:flex gap-7 justify-center py-7">
       <CldImage
        width="400"
        height="400"
        src={src}
        className="my-5 xl:my-0"
        sizes="100vw"
        alt="Description of my image"
      />
      <CldImage
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        effects={[{ blur: "800" }]}
        alt="Description of my image"
      />
       </div>
      </TabsContent>
      <TabsContent value="sharpen">
       <div className="xl:flex gap-7 justify-center py-7">
       <CldImage
        width="400"
        height="400"
        src={src}
        className="my-5 xl:my-0"
        sizes="100vw"
        alt="Description of my image"
      />
      <CldImage
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        effects={[{ sharpen: '100' }]}
        alt="Description of my image"
      />
       </div>
      </TabsContent>
      <TabsContent value="saturation">
       <div className="xl:flex gap-7 justify-center py-7">
       <CldImage
        width="400"
        height="400"
        src={src}
        className="my-5 xl:my-0"
        sizes="100vw"
        alt="Description of my image"
      />
      <CldImage
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        alt="Description of my image"
        effects={[{ saturation:'70' }]}
        
      />
       </div>
      </TabsContent>
      <TabsContent value="improve">
       <div className="xl:flex gap-7 justify-center py-7">
       <CldImage
        width="400"
        height="400"
        src={src}
        className="my-5 xl:my-0"
        sizes="100vw"
        alt="Description of my image"
      />
      <CldImage
        width="400"
        height="400"
        src={src}
        effects={[{ improve:true }]}
        sizes="100vw"
        alt="Description of my image"
      />
       </div>
      </TabsContent>
      <TabsContent value="grayscale">
       <div className="xl:flex gap-7 justify-center py-7">
       <CldImage
        width="400"
        height="400"
        src={src}
        className="my-5 xl:my-0"
        sizes="100vw"
        alt="Description of my image"
      />
      <CldImage
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        effects={[{ grayscale:800 }]}
        alt="Description of my image"
      />
       </div>
      </TabsContent>
      {/* next feature */}
      <TabsContent value="autoBrightness">
       <div className="xl:flex  gap-7 justify-center py-7">
       <CldImage
        width="400"
        height="400"
        src={src}
        className="my-5 xl:my-0"
        sizes="100vw"
        alt="Description of my image"
      />
      <CldImage
        width="400"
        height="400"
        src={src}
        effects={[{autoBrightness:true }]}
        sizes="100vw"
        alt="Description of my image"
      />
       </div>
      </TabsContent>
      <TabsContent value="autoContrast">
       <div className="xl:flex gap-7 justify-center py-7">
       <CldImage
        width="400"
        height="400"
        src={src}
        className="my-5 xl:my-0"
        sizes="100vw"
        alt="Description of my image"
      />
      <CldImage
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        effects={[{autoContrast:true }]}
        alt="Description of my image"
      />
       </div>
      </TabsContent>
      <TabsContent value="pixelateFaces">
       <div className="xl:flex gap-7 justify-center py-7">
       <CldImage
        width="400"
        height="400"
        src={src}
        className="my-5 xl:my-0"
        sizes="100vw"
        alt="Description of my image"
      />
      <CldImage
        width="400"
        height="400"
        src={src}
        effects={[{pixelateFaces:true }]}
        sizes="100vw"
        alt="Description of my image"
      />
       </div>
      </TabsContent>
      <TabsContent value="blurFaces">
       <div className="xl:flex gap-7 justify-center py-7">
       <CldImage
        width="400"
        height="400"
        src={src}
        className="my-5 xl:my-0"
        sizes="100vw"
        alt="Description of my image"
      />
      <CldImage
        width="400"
        height="400"
        src={src}
        effects={[{blurFaces:true }]}
        sizes="100vw"
        alt="Description of my image"
      />
       </div>
      </TabsContent>
      <TabsContent value="gradientFade">
       <div className="xl:flex gap-7 justify-center py-7">
       <CldImage
        width="400"
        height="400"
        src={src}
        className="my-5 xl:my-0"
        sizes="100vw"
        alt="Description of my image"
      />
      <CldImage
        width="400"
        height="400"
        src={src}
        effects={[{gradientFade:true }]}
        sizes="100vw"
        alt="Description of my image"
      />
       </div>
      </TabsContent>
      <TabsContent value="opacity">
       <div className="xl:flex gap-7 justify-center py-7">
       <CldImage
        width="400"
        height="400"
        src={src}
        className="my-5 xl:my-0"
        sizes="100vw"
        alt="Description of my image"
      />
      <CldImage
        width="400"
        height="400"
        src={src}
        effects={[{opacity:40 }]}
        sizes="100vw"
        alt="Description of my image"
      />
       </div>
      </TabsContent>
    </Tabs>
  )
}
