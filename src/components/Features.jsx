import { Children, useRef ,useState } from "react";
import { TiLocationArrow } from "react-icons/ti";


const Bentotilt=({children,className=""})=>{
  const [transformStyle, settransformStyle] = useState("")
  const itemref =useRef()
  const handlemousemove = (e)=>{
    if(!itemref.current) return

     const { left, top, width, height } =
      itemref.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    settransformStyle(newTransform);
  }
  const handlemouseleave = (e)=>{
    settransformStyle("")
  }
  return (

    <div className={className} ref={itemref} onMouseMove={handlemousemove} onMouseLeave={handlemouseleave}  style={{transform:transformStyle}} >  
      {children}
    </div>
  )
}
const Bentocard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />

      <div className="relative z-10 flex flex-col p-5 size-full justify-between text-blue-50">
        <h1 className="bento-title special-font">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-64 text-xs md:text-base">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const Features = () => {
  return (
<section className="bg-black pb-52" >
    <div className="container mx-auto px-3 md:px-10 " >
<div className="px-5 py-32" >
<p className="font-display  text-lg text-blue-50" >Lorem ipsum dolor sit amet.</p>

<p className="max-w-md font-display text-lg text-blue-50 opacity-50" >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam a exercitationem magnam dolores? Libero, vel.
     Expedita totam maxime fugiat nihil repudiandae velit ratione iste, reiciendis blanditiis impedit corrupti, unde eum 
     cumque voluptatem atque veniam? 
    Modi tenetur accusamus inventore nesciunt magni veniam minus ipsum pariatur libero incidunt ducimus fuga, tempore voluptatum!
</p>
</div>

    <Bentotilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
<Bentocard
src="/videos/feature-1.mp4"
title={
    <>radi<b>n</b>t </>
}
description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nemo corporis quidem eligendi ut aspernatur nostrum, corrupti minima voluptas eius?"

/>
    </Bentotilt>
    <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7" >
<Bentotilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2" >

    <Bentocard
    src="videos/feature-2.mp4"
    title={<>zi<b>g</b>ma</>} 
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolor. Nobis nisi tempora aut praesentium numquam consequuntur repudiandae ratione voluptatem."
    />
</Bentotilt>
<Bentotilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0" >
     <Bentocard
    src="videos/feature-3.mp4"
    title={<>zi<b>g</b>ma</>} 
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolor. Nobis nisi tempora aut praesentium numquam consequuntur repudiandae ratione voluptatem."
    />
</Bentotilt>
<Bentotilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0" >
     <Bentocard
    src="videos/feature-4.mp4"
    title={<>zi<b>g</b>ma</>} 
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolor. Nobis nisi tempora aut praesentium numquam consequuntur repudiandae ratione voluptatem."
    />
</Bentotilt>
<Bentotilt className="bento-tilt_2" >
    <div className="flex flex-col size-full justify-between bg-violet-300 p-5" >
        <h1 className="bento-title special-font max-w-64 text-black">more coming soon</h1>
        <TiLocationArrow className="m-5 scale-[5] self-end" />
    </div>
</Bentotilt>
<Bentotilt className="bento-tilt_2" >
<video src="videos/feature-5.mp4"  loop muted autoPlay className="size-full object-cover object-center" />

</Bentotilt>
    </div>
    </div>
</section>
  )
}

export default Features
