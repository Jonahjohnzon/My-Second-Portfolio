
import Mainpage from './Component/Frontpage/Mainpage';
import Navbar from './Component/Navbar';
import Email from './Component/Email';
import Icons from './Component/Icons';
import {motion} from 'framer-motion'
import { useState } from 'react';

function App() {
  const [display,setdisplay]=useState(true)
  const slide={
    hidden:{
      opacity:0
    },
    show:{
      opacity:1,
      transition:{
        type:'tween',
        duration:0.9,
        delay:2.7,
        stiffness:400,
        when:'beforeChildren',
        staggerChildren:0.1
      }
    }
   
  }
  setTimeout(()=>{
    setdisplay(false)
  },3000)
  return (
    <div className="App h-full select-none" >
    {display?<div className='w-full h-[100vh] bg-greennude flex justify-center items-center'>
    <div className='w-10 h-10  border-textgreen border-[3px] animate-bounce py-9 px-9 rounded-md flex justify-center  items-center cursor-pointer'> 
                <div className=' text-4xl font-semibold border-textgreen text-textgreen'>J</div></div>
    </div>:
    <div  className=' h-full' id="home" >
    <Navbar/>
     <Mainpage/>
     <motion.div variants={slide} initial='hidden' animate='show'><Icons/></motion.div>
     <motion.div variants={slide} initial='hidden' animate='show'><Email/></motion.div>
    </div>}
    </div>
  );
}

export default App;
