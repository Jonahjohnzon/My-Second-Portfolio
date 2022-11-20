import React, { useEffect, useState } from 'react'
import { useAnimation,motion,AnimatePresence } from 'framer-motion'
import Link from 'react-scroll/modules/components/Link'
import {HiOutlineMenuAlt3} from "react-icons/hi"
import Menu from './Menu'
const Navbar = () => {
    const anime=useAnimation()
    const animes=useAnimation()
    const [data,setdata]=useState('')
    const [display,setDisplay]=useState(false)
    
    window.addEventListener('scroll',()=>{
    setdata(window.scrollY)
    })
 
    useEffect(()=>{
     if(data>=20){
        anime.start({
            y:-100,
       opacity:1
        })
     }
     if(data<=20){
        animes.start({
            y:-100,
       opacity:0
        })
     }
     
     if(data<=21){
        anime.start({
            y:0,
       opacity:1
        })
     }
     if(data>=21){
        animes.start({
            y:0,
       opacity:1
        })
     }
    },[data])
    const slide={
        hidden:{
          y:-20,
          opacity:0
        },
        show:{
          y:0,
          opacity:1,
          transition:{
            type:'tween',
            duration:0.5,
            stiffness:400,
            when:'beforeChildren',
            staggerChildren:0.1
          }
        }
       
      }
      const slidemenu={
        hidden:{
          x:300,
          opacity:0
        },
        show:{
          x:0,
          opacity:1,
          transition:{
            type:'tween',
            duration:0.2,
            stiffness:400,
         
          }
        },
        exit:{
            x:300,
            opacity:0,
            transition:{
                duration:0.2,
                stiffness:400,
             
              }
        }
       
      }
      const children={
        hidden:{
         opacity:0,
         y:-20,
        },
        show:{
          opacity:1,
          y:0
        }}
        const Drop=()=>{
            setDisplay(!display)
        }
  return (
    <div>
    <motion.div animate={anime} className=' w-full bg-greennude bg-opacity-95 flex justify-center fixed top-0 z-50'>
        <motion.div variants={slide} initial='hidden' animate='show' className='flex justify-between w-[95%] py-8'>
            <div className='text-textgreen'>
                <div className='flex pl-5'>
                <Link
                 to='home'spy={true}
                smooth={true}
                hashSpy={true}
                offset={-80}
                duration={500} ><div className='w-10 h-10  border-textgreen border-[2px] py-2 px-4 rounded-md flex justify-center  items-center cursor-pointer'> 
                <div className=' text-2xl font-semibold border-textgreen'>J</div></div></Link>
                </div>
            </div>
            <div className='w-full tablet:hidden justify-end flex'><HiOutlineMenuAlt3 className=' text-textgreen text-4xl'  onClick={Drop}/></div>
            <div className='w-full tablet:flex justify-end hidden'>
                <div className='text-sm'>
                    <ul className='w-full justify-between items-center flex text-textgreen font-firacode tracking-wider '>
                        <Link             
                 to='about'spy={true}
                smooth={true}
                hashSpy={true}
                offset={-80}
                duration={500}><motion.li variants={children} className='flex mr-8 items-center cursor-pointer'><span className='mr-1 font-robot text-xs'>01.</span> <div className=' text-fontcolor hover:text-textgreen'>About</div></motion.li></Link>
                         <Link             
                 to='about'spy={true}
                smooth={true}
                hashSpy={true}
                offset={-80}
                duration={500}><motion.li variants={children} className='flex  mr-8 items-center cursor-pointer'><span className='mr-1 font-robot text-xs'>02.</span> <div className=' text-fontcolor hover:text-textgreen'>Web Project</div></motion.li></Link> 
                          <Link             
                 to='about'spy={true}
                smooth={true}
                hashSpy={true}
                offset={-80}
                duration={500}><motion.li variants={children} className='flex  mr-8 items-center cursor-pointer'><span className='mr-1 font-robot text-xs'>03.</span> <div className=' text-fontcolor hover:text-textgreen'>Mobile</div></motion.li></Link>
                         <Link             
                 to='about'spy={true}
                smooth={true}
                hashSpy={true}
                offset={-80}
                duration={500}><motion.li variants={children} className='flex  mr-8 items-center cursor-pointer'><span className='mr-1 font-robot text-xs'>04.</span> <div className=' text-fontcolor hover:text-textgreen'>Contact</div></motion.li></Link> 
                        <a href="https://drive.google.com/file/d/1sXfFhCfFIhiD9FQXIr8-7MA2DH2gGPJK/view?usp=share_link"><motion.div variants={children} className=' border-textgreen border-[1px] py-2 px-4 rounded-md cursor-pointer hover:bg-textgreen hover:bg-opacity-10 transition ease-in-out duration-300'>Resume</motion.div></a>
                    </ul>
                </div>
            </div>
        </motion.div>
    </motion.div>
    <motion.div animate={animes} className=' w-full bg-greennude bg-opacity-95 flex justify-center fixed top-0 z-30 shadow-xl'>
        <div className='flex justify-between w-[95%] py-8'>
            <div className='text-textgreen'>
                <div className='flex pl-5'>
                <Link
                 to='home'spy={true}
                smooth={true}
                hashSpy={true}
                offset={-100}
                duration={500} ><div className='w-10 h-10  border-textgreen border-[2px] py-2 px-4 rounded-md flex justify-center  items-center cursor-pointer'> 
                <div className=' text-2xl font-semibold border-textgreen'>J</div></div></Link>
                </div>
            </div>
            <div className='w-full tablet:hidden justify-end flex'><HiOutlineMenuAlt3 className=' text-textgreen text-4xl' onClick={Drop}/></div>
            <div className='w-full tablet:flex justify-end hidden '>
                <div className='text-sm'>
                    <ul className='w-full justify-between items-center flex text-textgreen font-firacode tracking-wider '>
                        <Link 
                 to='about'spy={true}
                smooth={true}
                hashSpy={true}
                offset={-80}
                duration={500} ><li className='flex mr-8 items-center cursor-pointer'><span className='mr-1 font-robot text-xs'>01.</span> <div className=' text-fontcolor hover:text-textgreen'>About</div></li></Link>
                        <Link 
                        to='web'spy={true}
                smooth={true}
                hashSpy={true}
                offset={-80}
                duration={500}><li className='flex  mr-8 items-center cursor-pointer'><span className='mr-1 font-robot text-xs'>02.</span> <div className=' text-fontcolor hover:text-textgreen'>Web Project</div></li></Link>
                         <Link 
                        to='app'spy={true}
                smooth={true}
                hashSpy={true}
                offset={-80}
                duration={500}><li className='flex  mr-8 items-center cursor-pointer'><span className='mr-1 font-robot text-xs'>03.</span> <div className=' text-fontcolor hover:text-textgreen'>Mobile</div></li></Link>
                         <Link 
                        to='contact'spy={true}
                smooth={true}
                hashSpy={true}
                offset={-80}
                duration={500}><li className='flex  mr-8 items-center cursor-pointer'><span className='mr-1 font-robot text-xs'>04.</span> <div className=' text-fontcolor hover:text-textgreen'>Contact</div></li></Link>
                        <a href="https://drive.google.com/file/d/1sXfFhCfFIhiD9FQXIr8-7MA2DH2gGPJK/view?usp=share_link"><div className=' border-textgreen border-[1px] py-2 px-4 rounded-md cursor-pointer hover:bg-textgreen hover:bg-opacity-10 transition ease-in-out duration-300'>Resume</div></a>
                    </ul>
                </div>
            </div>
           
        </div>
    </motion.div>
    <AnimatePresence>
   {display && <motion.div variants={slidemenu} exit="exit" initial='hidden' animate='show' className='tablet:hidden w-[100vw] h-[100vh] fixed top-0 z-50 backdrop-blur-sm backdrop-brightness-80' >
                <Menu setDrop={Drop=>setDisplay(Drop)}/>
            </motion.div>}
            </AnimatePresence>
    </div>
  )
}

export default Navbar