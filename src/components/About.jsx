import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Animatedtitle from './Animatedtitle'
gsap.registerPlugin(ScrollTrigger)
const About = () => {
    useGSAP(()=>{
const clipAnimation=gsap.timeline({
    scrollTrigger:{
        trigger:'#clip',
        start:'center center',
        end:'+=800 center',
        scrub:0.5,
        pin:true,
        pinSpacing:true
    }
})
clipAnimation.to('.mask-clip-path',{
    width:'100vw',
    height:'100vh',
      borderRadius:0
})
    })
  return (
    <div id='about' className='min-h-screen w-screen' >
      <div className='relative mb-8 mt-36 flex flex-col items-center gap-5' >
        <h2 className='font-general text-sm uppercase md:text-[10px]' >Welcom to world</h2>
       <Animatedtitle
  containerClass="mt-5 !text-black text-center text-4xl sm:text-5xl md:text-6xl font-bold"
  title="Disc<b>o</b>ver the world's <br />l <b>a</b>rgest shared adventure"
/>
      
        <div className='about-subtext ' >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, repudiandae?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
<div className='h-dvh w-screen overflow-hidden' id='clip'>
        <div className='mask-clip-path about-image'>
            <img src="./img/about.webp" alt="background" className='absolute left-0 top-0 size-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default About
  