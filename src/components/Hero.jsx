import { useState, useRef, useEffect } from 'react'
import Button from './button'
import { TiLocationArrow } from 'react-icons/ti'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import{ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const Hero = () => {
    const [currentIndex, setcurrentIndex] = useState(1)
    const [hasClicked, sethasCLicked] = useState(false)

    const [isLoading, setisLoading] = useState(true)
    const [loadedVideos, setloadedVideos] = useState(0)

    const totalvideos = 4
    const nextvidref = useRef(null)
    const currentvidref = useRef(null);
    

    const handlevideolaod = () => {
        console.log("video-loaded")
        setloadedVideos((prev) => prev + 1)
    }
    useEffect(() => {
     if (loadedVideos >= totalvideos) {
    setisLoading(false);
}
}, [loadedVideos])
  
    const handleminividclick = () => {
        sethasCLicked(true)
        setcurrentIndex((prevIndex) => (prevIndex % totalvideos) + 1);
    }



    useGSAP(() => {
        if (hasClicked&& nextvidref.current) {
            gsap.set('#next-video', { 
                opacity: 0,
            scale: 0.9,
            width: '100%',
            height: '100%',

             })
            gsap.to('#next-video', {
                transformOrigin: 'center center',
                opacity:1,
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextvidref.current.play(),
            })
            gsap.fromTo('#current-video',
                 { scale: 1, opacity: 1 },
                  {
            scale: 0.7,
                opacity: 0,
                duration: 1,
                ease: 'power1.inOut'
            })
        }
    }, { dependencies: [currentIndex], revertOnUpdate: true })
    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
            borderRadius: '0 0 40% 10%'
        })
        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true
            }
        })
    })
    const getvidsrc = (index) => `videos/hero-${index}.mp4`
    return (
        <div className='overflow-x-hidden d-dvh w-screen relative'>
            {/* {isLoading && (
                <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
                    <div className='three-body'>
                        <div className='three-body__dot' ></div>
                        <div className='three-body__dot' ></div>
                        <div className='three-body__dot' ></div>
                    </div>
                </div>
            )} */}
            <div id="video-frame" className='relative  z-10 h-dvh rounded-lg overflow-hidden w-screen bg-black' >
                <div>
                    <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg' >
                        <div className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100' onClick={handleminividclick} >
                            <video ref={currentvidref}     onError={() => console.error("Error loading video")}   src={getvidsrc((currentIndex % totalvideos) + 1)}loop muted id='current-video' className='size-64 origin-center scale-150 object-cover object-center' onLoadedData={handlevideolaod} />
                        </div>
                    </div>
                    <video ref={nextvidref}   onError={() => console.error("Error loading video")} src={getvidsrc(currentIndex)} loop muted id='next-video' className='absolute-center opacity-0 absolute z-20 size-64 object-cover object-center' onLoadedData={handlevideolaod} />
                    <video   onError={() => console.error("Error loading video")} src={getvidsrc(currentIndex === totalvideos - 1 ? 1 : currentIndex)}
                        autoPlay
                        loop muted
                         className='absolute left-0 top-0 size-full object-cover  object-full'
                         onLoadedData={handlevideolaod} />

                </div>
                <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75' >G <b>A</b>MING</h1>
                <div className='absolute   left-0 top-0 z-40 size-full'>
                    <div className='mt-24 px-5 sm:px-10' >
                        <h1 className='special-font hero-heading text-blue-100' >REDI <b>F</b> ING</h1>
                        <p className='mb-5 max-w-64 font-robert-regular text-blue-100' > This is a gaming landing page <br /> play harder</p>
                        <Button id="watch-trailer" title="watch trailer" leftIcon={<TiLocationArrow />} containerClass="bg-yellow-300 flex-center gap-1" />
                    </div>
                </div>
            </div>
            <h1 className='special-font hero-heading absolute bottom-5 right-5  text-black' >G <b>A</b>MING</h1>
        </div>
    )
}

export default Hero
