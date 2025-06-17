import React from 'react'
import Button from './button';
const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);
const Contanct = () => {
  return (
    <div id='contact' className='my-20 min-h-96 w-screen px-10' >
      <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden '>
        <div className='absolute -left-20 top-0 hidden w-72 h-full overflow-hidden sm:block lg:left-20 lg:w-96 ' >
<ImageClipBox
clipClass="contact-clip-path-1"
src='/img/contact-1.png'
/>
<ImageClipBox
clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60  "
src='/img/contact-2.jpg'
/>
        </div>
          <div className='absolute -top-40 left-20  w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80 ' >
          <ImageClipBox
clipClass="absolute md:scale-125"
src='/img/swordman-partial.png'
/>
<ImageClipBox
clipClass="sword-man-clip-path md:scale-125 "
src='/img/swordman.jpg'
/>
          </div>
          <div className='flex flex-col items-center text-center' >
            <p className=' font-general text-[10x] uppercase '>join now </p>
            <p className='special-font leading-[0.9] mt-10 w-full font-zentry text-5l md:text-[6rem] '>lets b<b>u</b>ild the <br /> ne<b>w</b> era of <br /> gaming now</p>
                 <Button  title="contact us" containerClass="mt-10 cursor-pointer" />
          </div>
      </div>
    </div>
  )
}

export default Contanct
