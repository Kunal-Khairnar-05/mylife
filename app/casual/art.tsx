import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Link from "next/link";
import React from "react";

function Art() {
  return (
    <div className="justify-center z-10 text-center">
      <TextGenerateEffect
        words="Check out my Artwork"
        className="lg:text-2xl sm:text-2xl text-border backdrop:1 my-10"
      />

      <Link href="https://www.instagram.com/casual_kunal/" target="_blank">
        <div className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 border border-cyan-800">
          <img
            src={`/gallery.jpeg`}
            alt="gallery image"
            height="400"
            width="400"
            className="object-contain border border-black-100"
          />
          <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
            Give upvote to My Artwork 🖌️
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Art;
