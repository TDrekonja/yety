import React from "react";
import ReactPlayer from "react-player";
import {motion} from "framer-motion";


type Props={};

function Songs({}:Props){
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
          className={"h-screen flex relative overflow-hidden flex-col md:flex-row max-w-full px10 justify-evenly mx-auto items-center"}>
          <h3 className={"absolute top-24 uppercase tracking-[20px] text-2xl"}>Songs features</h3>

          <div className={"w-full flex space-x-5 p-10 snap-x snap-mandatory"}>
              <ReactPlayer
                  url="https://www.youtube.com/watch?v=P_LBST0H4Ok&ab_channel=Yety"
              />
              <ReactPlayer
                  url="https://www.youtube.com/watch?v=0plRM_Qm7w8&ab_channel=Yety"
              />
              <ReactPlayer
                  url="https://www.youtube.com/watch?v=hYaOek426Xo&ab_channel=Yety"
              />
          </div>
      </motion.div>
    )
}
export default Songs;