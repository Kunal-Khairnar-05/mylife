"use client";
import React from "react";
import { projects } from "@/data";
import { HoverEffect } from "./ui/card-hover-effect";
import { LampContainer } from "./ui/Tubelight";

export function Projects() {
  return (
    <section id="projects">
      <div className="max-w-5xl mx-auto px-8 -mt-20">
        <LampContainer className="-mt-20 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-blue-200 md:text-5xl ease-in ">
          Projects I've Done...
        </LampContainer>

        <div className="-mt-64">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  );
}
