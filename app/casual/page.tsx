import React from "react";

import MagicButton from "@/components/ui/MagicButton";
import { BsRewindCircle } from "react-icons/bs";
import Art from "./art";
import Blogs from "./blogs";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Guitar from "./guitar";

function page() {
  return (
    <main className="relative bg-yellow-100 dark:bg-yellow-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="h-screen w-full bg-yellow-400 dark:bg-yellow-400 bg-grid-white/[0.08] flex justify-center items-center absolute top-0 left-0">
        <div className="absolute pointer-events-none -inset-2 flex justify-center items-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,white)]">
          </div>
      </div>

      <div className="my-10">
        <a href="/">
          <MagicButton
            title="Go back to Formal Life"
            icon={<BsRewindCircle />}
            position="left"
          />
        </a>
      </div>

      <div className="my-10 z-10 flex justify-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center ">
          <TextGenerateEffect
            className="text-center text-white text-[20px] md:text-4xl lg:text-5xl flex justify-center"
            words={`Peek in my`}
          />
          <TextGenerateEffect
            className="text-black text-[40px] md:text-5xl lg:text-6xl flex justify-center text-center"
            words={`Casual Life 👀`}
          />
        </div>
      </div>

      <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-center my-10">
        <Blogs />
        <Art />
        <Guitar />
      </div>
    </main>
  );
}

export default page;
