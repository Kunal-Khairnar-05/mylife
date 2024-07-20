"use client"
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { BsRewindCircle } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 items-center">
      <div>
        <Spotlight
          className="-top-10 -left-40 md:-left-22 md:-top-10 h-screen w-[20vw]"
          fill="blue"
        />
       
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="white" />

        <Spotlight
          className="-top-10 left-40 md:left-32 md:-top-10 h-screen w-[50vw]"
          fill="blue"
        />
       
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="white" />
{/* 
        <Spotlight className="top-58 left-100 h-[80vh] w-[80vw]" fill="white" /> */}


      </div>

      <div className="h-screen w-full  bg-black-300 bg-grid-white/[0.08] flex justify-center items-center absolute top-0 left-0">
        <div className="absolute pointer-events-none -inset-2 flex justify-center items-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,white)]" />
      </div>


      <div className="my-10 z-10 flex justify-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center ">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 justify-center">
            Dive into
          </h2>
            <TextGenerateEffect className="text-center text-white text-[20px] md:text-4xl lg:text-5xl flex justify-center" words={`Uploaded life of`}/>
            <TextGenerateEffect className="text-purple text-[40px] md:text-5xl lg:text-6xl flex justify-center text-center" words={`KUNAL KHAIRNAR`}/>
           

            <p className="md:tracking-wider mb-20 text-sm md:text-lg lg:text-2xl text-blue-100">
                a Software Developer & Writer from India 📱
            </p>

            <a href="#experiance"><MagicButton title="Previously in My Life" icon={<BsRewindCircle />} position="left"/></a>
            
        </div>
      </div>
    </div>
  );
};

export default Hero;
