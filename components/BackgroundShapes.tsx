import React from 'react'
import { motion } from "framer-motion";
import yetyLogo from '{“yety”}/../public/yety-logo.png';
import Image from 'next/image'

const handleOnMouseOver=(e: React.MouseEvent<HTMLAudioElement>)=>{
    e.currentTarget.play();

}
const handleOnMouseOut=(e: React.MouseEvent<HTMLAudioElement>)=>{
    e.currentTarget.pause();
}

const headMotion={
    rest:{},
    hover:{
        transition: {
            staggerChildren: 0.1,

        }
    }
}

const borderMotion={
    rest:{
        scale:1,
        transition:{
            duration:2
        }
    },
    hover:{
        scale: [1,1.2,1,1.2],
        transition: {
            duration: 1,
            repeat: Infinity
        }
    }
}

type Props={}

export default function BackgroundShapes({}: Props) {
    return(
        <div

            className="relative flex justify-center items-center">

            <div className="absolute border rounded-full h-[300px] w-[300px] " >
                <Image id={"yety"} className="relative rounded-full h-32 w-32 mx-auto object-cover" src={yetyLogo} alt="Yety-logo"/>
            </div>

                <motion.div  variants={headMotion} initial={"rest"} whileHover={["hover"]} onClick={()=> window.open("https://share.amuse.io/track/yety-da-killa", "_blank")}   className="group h-[300px] w-[300px]  ">

                    <motion.div variants={borderMotion} className="absolute border border-white-500 rounded-full h-[300px] w-[300px] "></motion.div>
                    <motion.div variants={borderMotion} className="absolute border border-red-500 rounded-full h-[300px] w-[300px]  "></motion.div>
                    <motion.div variants={borderMotion} className="absolute border border-blue-500 rounded-full h-[300px] w-[300px]"></motion.div>
                    <audio controls className="absolute border  opacity-0 rounded-full h-[300px] w-[300px]" src="/DaKillaClip.mp3" onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}></audio>

                </motion.div>

        </div>
    )
}
