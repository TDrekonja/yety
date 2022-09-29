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

        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">

            <BackgroundShapes/>
            <div className={""}>
                <h1 className={"text-4xl uppercase tracking-[10px] font-semibold"}>YETY
                </h1>
                <h1>
                    <span >{text}</span>
                    <Cursor cursorColor="black"/>
                </h1>
            </div>

        </div>
    )
}