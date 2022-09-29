import React from 'react'
import {SocialIcon} from "react-social-icons";
import { motion } from "framer-motion"

type Props={}

export default function Header({}: Props){
    return(
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-12 xl:items-center">
            <motion.div
                        initial={{
                        x:-500,
                        opacity:0,
                        scale:0.5
                        }}
                        animate={{
                            x:0,
                            opacity:1,
                            scale:1
                        }}
                        transition={{
                            duration:1.5
                        }}
                        className="flex flex-row items-center ">
                <SocialIcon  className="mx-2" url="https://www.facebook.com/realyety" fgColor="transparent" bgColor="#0036FF"/>
                <SocialIcon className="mx-2" url="https://www.youtube.com/channel/UCwFC8qRhJNlvHSKX8LFHYfg" fgColor="transparent" bgColor="#FF2B00"/>
                <SocialIcon className="mx-2" url="https://soundcloud.com/yety-2" fgColor="transparent" bgColor="#FFFFFF"/>
            </motion.div>
            <motion.div
                initial={{
                    x:500,
                    opacity:0,
                    scale:0.5
                }}
                animate={{
                    x:0,
                    opacity:1,
                    scale:1
                }}
                transition={{
                    duration:1.5
                }}
                className="flex flex-row items-center text-#000104-300 cursor-pointer">
                <SocialIcon className="cursor-pointer" network="email" fgColor="#03A4FE" bgColor="transparent"/>
                <p className="uppercase hidden md:inline-flex text-sm text-#03A4FE">kontakt</p>
            </motion.div>
        </header>
    )
}