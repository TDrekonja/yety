import React from 'react';
import {motion} from "framer-motion";

type Props={}

export default function About({}:Props){
    return(
        <motion.div
            initial={{
                opacity:0
            }}
            whileInView={{
                opacity:1
            }}
            transition={{
                duration:4
            }}
            className={"h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"}>
            <h3 className={"absolute top-24 uppercase tracking-[20px] text-2xl"}>About</h3>
            <motion.img
                initial={{
                    x:-200
                }}
                whileInView={{
                    x:0
                }}
                className={"-mb-20 md:mb-0 flex-shrink-0 h-60 w-60 rounded-full object-cover  md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px] mt-20"} src={"/nejc.jpg"}/>
        <div className={"space-y-10 px-0 mt-20 md:px-10"}>
            <h4 className={"text-4xl font-semibold"}>Something about me</h4>
            <p>
                Hello! I'm Nejc Marković, better known as Yety. Since primary school I produce my own music. I even mixmaster my own music which inspired me to go to Media school, where i learned even more. Now i work on radio/television staion.
            </p>
            <p>
                I prefer to produce progressive house, house, EDM. My new experiment is a song Da killa which is a phunk song.
            </p>
        </div>
        </motion.div>

    )
}