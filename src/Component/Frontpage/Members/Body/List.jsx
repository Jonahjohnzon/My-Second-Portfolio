import React, { useState } from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-hook-inview'

const List = () => {
  const [ref, isVisible] = useInView({
    threshold: 0.2,
  })
 const [show,setshow]=useState(false)

 useEffect(()=>{
  if(isVisible)
  {
    setshow(true)
  }
 },[isVisible])
    const slide={
      hidden:{
        y:40,
        opacity:0
      },
      show:{
        y:0,
        opacity:1,
        transition:{
          type:'tween',
          duration:0.001,
          stiffness:400,
          when:'beforeChildren',
          staggerChildren:0.1
        }
      }
     
    }
    const children={
      hidden:{
       opacity:0,
       y:20,
      },
      show:{
        opacity:1,
        y:0
      }}
  return (
    <div className='' ref={ref}>
        {show
         &&<motion.div variants={slide} initial='hidden' animate='show' className=' flex justify-between flex-wrap'>
            <motion.div variants={children} className=' border-2 border-textgreen rounded-md text-textgreen  shadow-[0px_0px_4px_black] py-2  w-28  mb-5  mr-3 text-center bg-textgreen bg-opacity-10 hover:bg-opacity-0 transition duration-300 cursor-pointer'>Html</motion.div>
            <motion.div variants={children} className=' border-2 border-textgreen rounded-md text-textgreen  shadow-[0px_0px_4px_black] py-2  w-28  mb-5  mr-3 text-center bg-textgreen bg-opacity-10 hover:bg-opacity-0 transition duration-300 cursor-pointer'>Css</motion.div>
            <motion.div variants={children} className=' border-2 border-textgreen rounded-md text-textgreen  shadow-[0px_0px_4px_black] py-2  w-28  mb-5  mr-3 text-center bg-textgreen bg-opacity-10 hover:bg-opacity-0 transition duration-300 cursor-pointer'>Typescript</motion.div>
            <motion.div variants={children} className=' border-2 border-textgreen rounded-md text-textgreen  shadow-[0px_0px_4px_black] py-2  w-28  mb-5  mr-3 text-center bg-textgreen bg-opacity-10 hover:bg-opacity-0 transition duration-300 cursor-pointer'>Javascript</motion.div>
            <motion.div variants={children} className=' border-2 border-textgreen rounded-md text-textgreen  shadow-[0px_0px_4px_black] py-2  w-28  mb-5  mr-3 text-center bg-textgreen bg-opacity-10 hover:bg-opacity-0 transition duration-300 cursor-pointer'>Dart</motion.div>
            <motion.div variants={children} className=' border-2 border-textgreen rounded-md text-textgreen  shadow-[0px_0px_4px_black] py-2  w-28  mb-5  mr-3 text-center bg-textgreen bg-opacity-10 hover:bg-opacity-0 transition duration-300 cursor-pointer'>Shell</motion.div>
            <motion.div variants={children} className=' border-2 border-textgreen rounded-md text-textgreen  shadow-[0px_0px_4px_black] py-2  w-28  mb-5  mr-3 text-center bg-textgreen bg-opacity-10 hover:bg-opacity-0 transition duration-300 cursor-pointer'>Tailwind</motion.div>
            <motion.div variants={children} className=' border-2 border-textgreen rounded-md text-textgreen  shadow-[0px_0px_4px_black] py-2  w-28  mb-5  mr-3 text-center bg-textgreen bg-opacity-10 hover:bg-opacity-0 transition duration-300 cursor-pointer'>React js</motion.div>
            <motion.div variants={children} className=' border-2 border-textgreen rounded-md text-textgreen  shadow-[0px_0px_4px_black] py-2  w-28  mb-5  mr-3 text-center bg-textgreen bg-opacity-10 hover:bg-opacity-0 transition duration-300 cursor-pointer'>Flutter</motion.div>
            <motion.div variants={children} className=' border-2 border-textgreen rounded-md text-textgreen  shadow-[0px_0px_4px_black] py-2  w-28  mb-5  mr-3 text-center bg-textgreen bg-opacity-10 hover:bg-opacity-0 transition duration-300 cursor-pointer'>Express js</motion.div>
            <motion.div variants={children} className=' border-2 border-textgreen rounded-md text-textgreen  shadow-[0px_0px_4px_black] py-2  w-28  mb-5  mr-3 text-center bg-textgreen bg-opacity-10 hover:bg-opacity-0 transition duration-300 cursor-pointer'>Mongo DB</motion.div>
            <motion.div variants={children} className=' border-2 border-textgreen rounded-md text-textgreen  shadow-[0px_0px_4px_black] py-2  w-28  mb-5  mr-3 text-center bg-textgreen bg-opacity-10 hover:bg-opacity-0 transition duration-300 cursor-pointer'>Graph QL</motion.div>
        </motion.div>}
    </div>
  )
}

export default List