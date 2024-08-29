import React from 'react'
import {motion } from 'framer-motion'
const Toppage = () => {
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
        duration:0.8,
        delay:1,
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
    <motion.div  variants={slide} initial='hidden' animate='show' className='h-[100vh] overflow-hidden flex items-center'>
     <div className=' ml-10 tablet:ml-[24vw]' >
        <div className=' text-start'>
            <motion.div variants={children} className=' text-textgreen  text-lg font-firacode break-words tracking-widest ml-2'>Hi, my name is</motion.div>
            <motion.h1 variants={children} className=' font-bold text-4xl tablet:text-[3.7vw]  text-fontcolor mt-3  tablet:mt-5'>Ominyi Jonah.</motion.h1>
            <motion.h1 variants={children} className=' font-bold text-4xl tablet:text-[3.7vw]  text-fontnude mt-3 tablet:mt-5 laptop:mt-16'>I bring ideas to life.</motion.h1>
            <motion.div variants={children} className=' text-fontnude w-2/3 laptop:w-1/2 my-8 mb-12 text-lg text leading-6'>
     I'm a professional fullstack web and mobile developer based in Nigeria. Currently, I'm focused on buiding websites with a secured backend. </motion.div>
     <motion.div variants={children} className='border-textgreen border-[1px] w-fit rounded-md '>
     <a href='https://mail.google.com/mail/u/0/?fs=1&to=jonahjohnzon@gmail.com&su=Hello&body=Hi+Jonah&tf=cm'><div className=' text-textgreen  font-firacode tracking-widest py-3 px-14 cursor-pointer hover:bg-textgreen hover:bg-opacity-10 transition ease-in-out duration-300'>Get in touch!</div></a>
     </motion.div>

        </div>
     </div>
    </motion.div>
  )
}

export default Toppage