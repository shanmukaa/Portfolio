import React from "react";
import Shannu from '../assets/trap door.png'
import BaseHOC from "../layouts/BaseHOC";
import Typed from 'react-typed';
import Shannu1 from '../assets/laptop wave.png'
import Shannu2 from '../assets/equation meme.png'
import bms from '../assets/bms.png'
import zomato from '../assets/zomato.png'
import figma from '../assets/figma.png'
import Github from '../assets/github.png'
import {BsGithub,BsFacebook, BsLinkedin} from 'react-icons/bs'
import {FcGoogle}from 'react-icons/fc'
import {motion} from'framer-motion';
const Homepage = () => {
const AboutLG = ()=>{
  return(
    <div className="w-full flex">
  <div className="w-[40%] flex items-center">
    <img src={Shannu1} alt="" className="w-[30vh] lg:w-[50vh] mx-4"/>
  </div>
  <div className="font-[Montserrat] w-[60%] lg:w-[60%] mt-4 mx-2 font-semibold text-[2.5vh] flex flex-col justify-center">
    <h1>Hey guys I am Shanmukha Guggilam . I am a CS undergraduate at Narasaraopeta Engineering college who is curious about exploring new technologies. I am starter who can work with little guidance and proper path way to learn new stuff. 
      I can seamlessly work for hours and will try to ensure that I can deliver the best out of my potential.
      </h1><br />
      <h1>
      Webstack: HTML,CSS,JS,React,React Native, ExpressJS
      </h1>
      <br />
      <h1>
Looking Forwad to contact me:
Mail: 456shanmukha@gmail.com
      </h1>
  </div>
  <div>
    <h1>

    </h1>
  </div>
  </div>
  )
}
const AboutSM = ()=>{
  return(
    <div className="w-full flex">
  <div className="w-[40%] flex items-center">
    <img src={Shannu1} alt="" className="w-[30vh] lg:w-[50vh] mx-4"/>
  </div>
  <div className="font-[Montserrat] w-[60%] mt-4 mx-2 font-semibold text-[2vh] flex flex-col justify-center">
    <h1>Hey guys I am Shanmukha Guggilam.I am a CS undergraduate at Narasaraopeta Engineering college who is curious about exploring new technologies
      </h1><br />
      <h1>
      Webstack: HTML,CSS,JS,React,React Native, ExpressJS
      </h1>
      <br />
      <h1>
Looking Forwad to contact me:
Mail: 456shanmukha@gmail.com
      </h1>
  </div>
  <div>
    <h1>

    </h1>
  </div>
  </div>
  )
}
  return (
  <>
      {/* Main Section or Hero Section */}
  <div className="bg-[#121212] font-[Montserrat]  text-white">

  <div className="flex font-[Montserrat] w-full">
    <div className="flex flex-col justify-center mx-4 w-[60%]">
        <h1 className=" font-bold text-[05vh]">Hey 👋, I am Shanmukha Guggilam </h1>
        <h1 className="font-bold text-[02vh] lg:mx-6">
            I am a <Typed
        strings={['Developer','Student',]}
        backSpeed={50}
        typeSpeed={50}
        loop
        /> 
        </h1>
        <div className="flex mt-6">
          <a href="https://www.linkedin.com/in/shanmukha-guggilam-794a9b284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <motion.li
            className="mr-6 mb-6 rounded-full shadow-xl w-[6vh] grid place-items-center justify-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            id="facebook-login"
          >
            <BsLinkedin size={35} color="#3b5998" />
          </motion.li>
          </a>
   
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=456shanmukha@gmail.com&tf=cm">
          <motion.li
            className="mr-6 mb-6 rounded-full shadow-xl w-[6vh] grid place-items-center justify-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FcGoogle size={35} />
          </motion.li>
          </a>
         
          <a href="">
          <motion.li
            className="mr-6 mb-6 rounded-full shadow-xl w-[6vh] grid place-items-center justify-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <BsGithub size={30} color="grey" />
          </motion.li>
          </a>
         
    </div>
    </div>
    <div className="flex w-[40%]">
        <img src={Shannu} alt="ShannuPhoto" className="w-[50vh] flex flex-end"  />
    </div>
    </div>
  </div>
  <div>
      <div className="flex flex-col md:hidden lg:hidden">
        <AboutSM/>
      </div>
      <div className="hidden md:flex lg:flex">
        <AboutLG/>
      </div>
  </div>  </>
  )

};

export default BaseHOC(Homepage);
