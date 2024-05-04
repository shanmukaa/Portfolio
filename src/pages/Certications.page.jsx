import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import BaseHOC from '../layouts/BaseHOC';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ReactNEC Images
import Image1 from '../assets/react/sih1 (1).jpeg'
import Image2 from '../assets/react/sih2.jpeg'
import Image3 from '../assets/react/sih3.jpeg'
import Image4 from '../assets/react/sih4.jpeg'

// VVIT Images
import VVIT4 from '../assets/VVIT/WhatsApp Image 2024-05-03 at 14.08.59 (3).jpeg'
import VVIT5 from '../assets/VVIT/WhatsApp Image 2024-05-03 at 14.08.59 (2).jpeg'
import VVIT6 from '../assets/VVIT/WhatsApp Image 2024-05-03 at 14.08.59 (1).jpeg'
import VVIT7 from '../assets/VVIT/WhatsApp Image 2024-05-03 at 14.08.58.jpeg'
const Certicationspage = () => {
    const ReactImages = [
        {
            "id":1,
            "path":Image1
        },
        {
            "id":2,
            "path":Image2
        },
        {
            "id":3,
            "path":Image3
        },
        {
            "id":4,
            "path":Image4
        },
    ]
    const VVITImages = [
      {
          "id":4,
          "path":VVIT4
      },
      {
        "id":5,
        "path":VVIT5
    },
    {
      "id":6,
      "path":VVIT6
  },
  {
    "id":7,
    "path":VVIT7
},
  ]
  const CertificatesLG = ()=>{
    return(
      
      <div className='w-[100%] flex flex-col font-[Montserrat]'>
        <div className='flex items-center bg-[#121212] text-white'>
        <div id='reactimage' className='w-[30%] pl-4'>
            <Swiper spaceBetween={410}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          loop={true}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className='mx-2 my-2 w-full'
        >
            {ReactImages.map((images) => (
                <SwiperSlide>
                    <img src={images.path} alt="ReactImages" className=' rounded-lg' />
                </SwiperSlide>
        ))}
            </Swiper>
        </div>
        <div id='reacttext' className='w-auto flex items-center justify-center flex-col text-xl ml-2'>
        <h1>My team and I embarked on an exhilarating journey to the SIH finals hosted at Veer Surendra Sai University in Sambalpur, Odisha. Immersed in the intensity of the 36-hour hackathon, we embraced the challenge with unwavering determination. Fueled by a shared passion for innovation and technology, we worked tirelessly, navigating through the complexities of problem-solving and coding. As the competition progressed, we thrived on collaboration, pooling our diverse skills and perspectives to create something truly impactful. Despite the sleepless nights and relentless challenges, the camaraderie within our team never wavered. As the final moments of the hackathon approached, we stood united, proud of our efforts and the memories forged amidst the exhilarating journey.</h1>
        <br />
        </div>
        </div>
        <hr className="mx-7 h-1  mx-auto my-4 bg-black border-1 rounded md:my-10 dark:bg-gray-700"/>
        <div className='flex '>
        <div id='reacttext' className='w-auto flex items-center justify-center flex-col text-xl mr-2'>
            <h1>
                Also in My design path I participated in Several Design Competitons , but the Memory I had in VVIT (vasireddy venkatadri institute of technology)
                 is memorable as me and my team have gained valuble experience in that Event and It was 24Hour Hackathon which contained alot of Challanges and Hurdles but 
                 we managed to get through each and every step and have Secured the top spot in that Event
            </h1>

            </div>
        <div id='vvitimages' className='w-[45%] lg:w-[45%]'>
            <Swiper spaceBetween={410}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          loop={true}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className='mx-2 my-2 w-full'
        >
            {VVITImages.map((images) => (
                <SwiperSlide className='flex items-center justify-center'>
                    <img src={images.path} alt="ReactImages" className='rounded-lg h-[35vh] lg:h-[45vh] w-auto lg:w-full ' />
                </SwiperSlide>
        ))}
            </Swiper>
        </div>

        </div>
      </div>
    )
  }
  return (
    <div>
      <div className='hidden md:flex lg:flex'>
        <CertificatesLG/>
      </div>
    </div>
  )
}

export default BaseHOC(Certicationspage)
