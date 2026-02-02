import React from "react";
import Title from "../title";
import TechBlock from "./techBlock";

type Props = { lang: boolean };

export default function About({ lang }: Props) {
    const cubes = [
        { logo: "github", color: "#ffffff", x: 2, y: 0, z: 0, ind: 9 },
        { logo: "docker", color: "#1D63ED", x: 2, y: 1, z: 0, ind: 7 },
        { logo: "bootstrap", color: "#602C50  ", x: 1, y: 1, z: 0, ind: 8 },
        { logo: "tailwind", color: "#38bdf8 ", x: 0, y: 2, z: 0, ind: 7 },
        { logo: "figma", color: "#f24e1e", x: 1, y: 2, z: 0, ind: 6 },
        { logo: "framer", color: "#000000 ", x: 2, y: 2, z: 0, ind: 4 },
        { logo: "nest", color: "#EA2845", x: 3, y: 2, z: 0, ind: 2 },
        { logo: "node", color: "#44883e", x: 2, y: 2, z: 1, ind: 4 },
        { logo: "react", color: "#61DBFB", x: 3, y: 1, z: 3, ind: 4 },
        { logo: "next", color: "#000", x: 3, y: 2, z: 3, ind: 3 },
        { logo: "js", color: "#F0DB4F", x: 0, y: 2, z: 3, ind: 4 },
        { logo: "html", color: "#E34C26", x: 0, y: 2, z: 2, ind: 3 },
        { logo: "css", color: "#2965f1 ", x: 1, y: 2, z: 3, ind: 3 },
        { logo: "ts", color: "#007acc", x: 3, y: 2, z: 2, ind: 2 },
    ];

    const getStyles = (item: any) => {
        const { x, y, z, ind, logo } = item;
        let left = x * 70 + z * 70;
        let top = y * 80 - 45 * x + z * 40;
        console.log(x * 80, 45 * x, logo);

        return {
            isBottom: y == 2,
            styles: { top: top + "px", left: left + "px", zIndex: ind },
        };
    };

    const tags = [
        ["Clean Architecture", "Чистая архитектура"],
        ["SEO & Performance", "SEO и скорость"],
        ["Type-Safe Code", "Безопасный код"],
        ["Next.js Expert", "Эксперт по Next.js"],
        ["State Management", "Управление состоянием"],
    ];
    return (
        <section className="py-30 -mt-30">
            <div className="container grid grid-cols-2 gap-10 items-center">
                <div className="relative ml-[50px] h-[200px]">
                    {/* {cubes.map((e, i) => (
                        <TechBlock
                            key={i}
                            color={e.color}
                            style={getStyles(e)["styles"]}
                            isBottom={getStyles(e)["isBottom"]}
                            logoUrl={e.logo}
                        />
                    ))} */}
                </div>
                <div className="flex flex-col">
                    <Title index={1}>{lang ? "About me" : "О себе"}</Title>
                    <div className="flex flex-col gap-5">
                        <p className="text-gray text-[18px]">
                            {lang
                                ? "I am a web developer specializing in website development and the client side of web applications. I work with modern technologies, creating responsive interfaces and clear project structures."
                                : "Я веб-разработчик, специализируюсь на разработке сайтов и клиентской части веб-приложений. Работаю с современными технологиями, делаю адаптивные интерфейсы и понятную структуру проекта."}
                        </p>
                        <p className="text-gray text-[18px]">
                            {lang
                                ? "In my work, I focus on logic, performance, and user experience. I try not to complicate solutions unnecessarily and always focus on the task at hand and the result that the client needs."
                                : "В процессе работы уделяю внимание логике, производительности и удобству пользователя. Стараюсь не усложнять решения без необходимости и всегда ориентируюсь на задачу и результат, который нужен клиенту."}
                        </p>
                        <div className="flex  flex-wrap gap-x-3 gap-y-4 ">
                            {tags.map((e, i) => (
                                <p
                                    key={i}
                                    className="bg-white/10 px-4 py-1 border border-transparent transition-colors duration-300 hover:border-white rounded-2xl"
                                >
                                    {"[" + e[lang ? 0 : 1] + "]"}
                                </p>
                            ))}
                        </div>
                        <div className="grid grid-cols-3">
                            <div className=" flex flex-col capitalize items-center py-5 border-r-4 border-primary/50">
                                <span className="text-primary leading-[100%]  flex items-center gap-2  relative text-[46px]">
                                    10
                                    <span className="text-secondary absolute top-[42%] -translate-1/2 left-[calc(132%)]">
                                        +
                                    </span>
                                </span>
                                <p className="text-[22px]">
                                    {lang ? "Clients" : "Клиентов"}
                                </p>
                            </div>
                            <div className=" flex flex-col capitalize items-center py-5 border-r-4 border-primary/50">
                                <span className="text-primary leading-[100%]  flex items-center gap-2  relative text-[46px]">
                                    20
                                    <span className="text-secondary absolute top-[42%] -translate-1/2 left-[calc(132%)]">
                                        +
                                    </span>
                                </span>
                                <p className="text-[22px]">
                                    {lang ? "Projects" : "Проектов"}
                                </p>
                            </div>
                            <div className=" flex flex-col capitalize items-center py-5">
                                <span className="text-primary leading-[100%]  flex items-center gap-2  relative text-[46px]">
                                    04{" "}
                                    <span className="text-secondary absolute top-[42%] -translate-1/2 left-[calc(132%)]">
                                        +
                                    </span>
                                </span>
                                <p className="text-[22px]">
                                    {lang ? "years" : "лет опыта"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
