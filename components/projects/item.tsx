import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Props = {
    img: string;
    link: string;
    name: string;
};

export default function Item({ img, link, name }: Props) {
    return (
        <Link href={link}>
            <motion.div
                whileHover={{
                    y: -10,
                    translateY: -5,
                }}
                style={{ perspective: 1000 }}
                className="rounded-[20px]  shadow-2xl shadow-secondary/10 pb-4 flex flex-col gap-5 overflow-hidden group"
            >
                <div className="w-full relative ab max-h-[300px] overflow-hidden">
                    <Image
                        src={img}
                        className="w-full object-cover full transtion-transform duration-300 will-change-transform group-hover:scale-[1.03]"
                        width={400}
                        height={300}
                        alt="Preview"
                    />
                    <span className=" absolute group-hover:opacity-100 transition-all duration-300 opacity-0 -right-2 top-4  group-hover:right-4 z-100">
                        <ArrowUpRight className="w-10 h-10  p-1  object-contain color white bg-white/30 border border-white rounded-full" />
                    </span>
                </div>
                <h3 className="px-3 text-[24px] text-white">{name}</h3>
            </motion.div>
        </Link>
    );
}
