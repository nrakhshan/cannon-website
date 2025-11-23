'use client';
import { React }  from 'react'
import { motion } from 'framer-motion';
import feature from '../data/feature.json';
import issues from '../data/issues.json';
import Image from 'next/image';

// const Landing = () => {
//   const cover = issues[0].thumbnail;

//   return (
//     <div>
//       <div >

//       </div>
//     </div>
//   )
// }

const Landing = () => {
  const cover = issues[0].thumbnail;

  return (
    <div className=''>
        <motion.div 
        className="cantata text-[14vw] leading-none uppercase text-left w-[70%] m-auto mt-50 z-10">
            The Cannon
        </motion.div>

        <div className='grid place-items-center overflow-clip mb-150 lg:mb-500'>
          <motion.div 
          style={{
              transformStyle: "preserve-3d",
              rotateY: "-10deg",
              rotateX: "30deg",
              rotateZ: "30deg"
          }}
          className='col-start-1 row-start-1 z-20 translate-x-20 grid place-items-center'>
              <div 
              style={{
                  transform: "translateZ(-20px)"
              }}
              className='col-start-1 row-start-1 bg-black blur-xs opacity-35 w-[60vw] h-[80vw]'>
              </div>

              <Image
                  width={660}
                  height={880}
                  src={cover}
                  alt="Cover Image"
                  priority
                  className="col-start-1 row-start-1 w-[60vw] h-[80vw] shadow-md"
                  style={{
                      transform: "translateZ(0px)"
                  }}
              />
          </motion.div>

          <div className="w-full overflow-x-hidden col-start-1 row-start-1">
            <p className="poppins w-[120%] text-[4vw]/[7vw] text-left relative z-10 -translate-x-[10%] mt-15 text-secondary">
              {feature.map((item) => item.text)}
            </p>
          </div>
        </div>
    </div>
  )
}

export default Landing
