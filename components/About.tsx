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
                duration:1.5
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
                className={"-mb-20 md:mb-0 flex-shrink-0 h-60 w-60 rounded-full object-cover  md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"} src={"/nejc.jpg"}/>
        <div className={"space-y-10 px-0 md:px-10"}>
            <h4 className={"text-4xl font-semibold"}>Something about me</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        </motion.div>

    )
}