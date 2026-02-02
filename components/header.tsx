"use client";
import Link from "next/link";
import React, { useState } from "react";

import {
    House,
    UserRound,
    Settings,
    Layers,
    FingerprintPattern,
    Github,
    Send,
    Globe,
    ChevronRight,
    ChevronLeft,
} from "lucide-react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

type Props = {
    lang: boolean;
    changeLang: any;
};

const navigation: any = {
    main: "Главная",
    about: "Кто я",
    projects: "Проекты",
    services: "Услуги",
    contacts: "Контакты",
};

const iconStyles = "w-[20px] h-[20px] mb-[3px]";

export default function Header({ lang, changeLang }: Props) {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState<number>(0);

    useMotionValueEvent(scrollY, "change", (latest: number) => {
        setIsScrolled(latest);
    });
    const icons = [
        <House className={iconStyles} />,
        <FingerprintPattern className={iconStyles} />,
        <Layers className={iconStyles} />,
        <Settings className={iconStyles} />,
        <UserRound className={iconStyles} />,
    ];

    return (
        <motion.header className="w-full will-change-transform z-200 fixed top-0 py-5 left-0">
            <div className="container  relative flex z-20 justify-between border border-[white] rounded-full gap-[30px] py-[10px] items-center backdrop-blur-sm">
                <Link
                    href="/"
                    className="nunito flex items-center max-2xl:text-[23px] text-[25px] capitalize"
                >
                    <div className="flex text-secondary items-center">
                        <ChevronLeft className="max-2xl:w-[20px] text-primary" />
                        <span className="mx-[-5px] text-[30px] max-2xl:text-[27px] text-primary">
                            {"/M"}
                        </span>
                        <ChevronRight className="max-2xl:w-[20px] text-primary" />
                    </div>
                    {lang ? "Hovsep" : "Овсеп"}
                </Link>
                <nav className="relative">
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 
               w-[40%] h-[60px] 
               bg-radial from-secondary/90 to-transparent 
               blur-2xl scale-[3.5]
               opacity-70 pointer-events-none z-[-1] 
               will-change-transform"
                    ></div>
                    <ul className="flex justify-between gap-[30px] items-center">
                        {Object.keys(navigation).map((e: string, i: number) => (
                            <li key={i}>
                                <Link
                                    href="#"
                                    className={`flex capitalize primary-hover transition-colos duration-300 max-2xl:text-[14px] hover:text-primary cursor-pointer items-center gap-[5px] ${
                                        i == 0 ? "primary" : ""
                                    }`}
                                >
                                    {icons[i]}
                                    {lang ? e : navigation[e]}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex gap-[20px] text transiton-colors duration-300 items-center">
                    <a href="#">
                        <Github className="max-2xl:w-[22px] cursor-pointer hover:text-secondary transition-colors duration-300 h-[25px] " />
                    </a>

                    <a href="https://t.me/Meytikhanyan_Hovsep">
                        <Send className="max-2xl:w-[22px] cursor-pointer hover:text-secondary transition-colors duration-300 h-[25px] " />
                    </a>
                    <Globe
                        onClick={changeLang}
                        className="max-2xl:w-[22px] cursor-pointer hover:text-secondary transition-colors duration-300 h-[25px] "
                    />
                </div>
            </div>
        </motion.header>
    );
}
