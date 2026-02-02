"use client";
import React, { useEffect } from "react";
import HeroTypewriter from "./heroTypewriter";
import Globe from "./globe";
import Button from "../button";
import InteractiveGrid from "./gridArea";
import Image from "next/image";

type Props = { lang: boolean };

export default function Main({ lang }: Props) {
    return (
        <>
            <main className="h-screen relative w-full ">
                <InteractiveGrid />

                <div className="container grid grid-cols-2 h-full">
                    <div className="h-full items-start flex gap-[10px] flex-col max-w-min justify-center z-50 relative ">
                        <p className="text-[25px] mb-[-10px]">
                            <span className="satoshi text-[32px]">
                                [0<span className="text-primary">0</span>]
                            </span>{" "}
                            {lang ? "Hi I am" : "Привет я"}
                        </p>
                        <h1 className="text-primary text-[52px] whitespace-nowrap">
                            {lang ? "Hovsep Meytikhanyan" : "Овсеп Мейтиханян"}
                        </h1>
                        <HeroTypewriter
                            words={
                                lang
                                    ? [
                                          "Creative-Developer",
                                          "FrontEnd-Engineer",
                                          "Problem-Solver",
                                      ]
                                    : [
                                          "Креативный-разработчик",
                                          "Фронтенд-инженер",
                                          "Мастер-решений",
                                      ]
                            }
                        />
                        <p className="text-gray text-[18px] my-[25px]">
                            {lang
                                ? "I develop websites and web applications with a focus on usability, speed, and clean code."
                                : "Занимаюсь разработкой сайтов и веб-приложений с упором на удобство, скорость и чистый код."}
                        </p>
                        <Button>
                            {lang ? "Contact me" : "Связываться со мной"}
                        </Button>
                    </div>

                    <div className="h-full  max-w-full justify-end relative flex items-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25%] aspect-square bg-radial from-primary/40 to-transparent blur-[50px] scale-[4] opacity-100 pointer-events-none will-change-transform"></div>
                        <Image
                            src="/images/main.png"
                            alt="x"
                            className="min-w-[500px] object-contain"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </main>
        </>
    );
}
