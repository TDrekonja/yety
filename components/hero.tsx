import React from 'react'
import {Cursor,useTypewriter} from "react-simple-typewriter";
import BackgroundShapes from "./BackgroundShapes";



type Props={}

export default function Hero({}: Props) {
    const[text,count]=useTypewriter({
            words:["I am a producer from Slovenia",
                "Progressive house, phunk, house",
                "Addicted to music, love creating."
            ],
            loop:true,
            delaySpeed:1000
        }
    );
    return (

        <div className="relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">

            <BackgroundShapes/>
            <div className={""}>
                <h1 className={"text-4xl uppercase tracking-[10px] font-semibold"}>YETY
                </h1>
                <h1>
                    <span >{text}</span>
                    <Cursor cursorColor="black"/>
                </h1>
            </div>
            <div className="custom-shape-divider-bottom-1664989231">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <rect x="1200" height="3.6"></rect>
                    <rect height="3.6"></rect>
                    <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"
                          className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}