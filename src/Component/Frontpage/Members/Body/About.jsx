import React from 'react'
import { CgCalibrate } from "react-icons/cg";
import List from './List';

export const About = () => {
  return (
    <div>
    <div className='flex justify-center pb-60' id='about'>
        <div className='w-3/4 laptop:w-1/2'>
            <div className='flex items-center mb-20'><span className=' tablet:text-xl font-robot text-textgreen mr-2'>01.</span><div className=' font-semibold whitespace-nowrap text-xl tablet:text-3xl text-fontcolor mr-10'>About Me</div><div className=' w-full bg-fontnude h-[1px] opacity-50'></div></div>
            <div className='flex flex-col tablet:flex-row items-center tablet:items-start'>
                <div className='mb-10 tablet:mb-0 text-lg text-fontnude text-start w-full '>
                    <div className=' mb-6'>Hello! I'm Ominyi Jonah Unogwu and I have a serious passion for writing coding and solving problems. I started building application back in 2020 and has since continued to get better </div>
                    <div className=' mb-6'>I currently work at 3chub as an IT assistant and web developer. My main focus these days is building easy to use,secured and well-designed applications for a variety of clients</div>
<div className='mb-6'>I'm a well-organised person with high attention to details, i believe whatever is worth doing is worth doing well .</div>
<div className='mb-6'>Here are some technologies i recently have been working with:</div>
<div className='flex'>
<div className='mr-20'>
    <div className='flex items-center mb-2'><div><CgCalibrate className=' text-sm text-textgreen mr-1 '/></div><div className=' text-sm'>JavaScript (ES6+)</div></div>
    <div className='flex items-center mb-2'><div><CgCalibrate className=' text-sm text-textgreen mr-1'/></div><div className=' text-sm'>React js</div></div>
    <div className='flex items-center'><div><CgCalibrate className=' text-sm text-textgreen mr-1'/></div><div className=' text-sm'>Node js</div></div>
</div>
<div>
    <div className='flex items-center mb-2'><div><CgCalibrate className=' text-sm text-textgreen mr-1 '/></div><div className=' text-sm'>React Native</div></div>
    <div className='flex items-center mb-2'><div><CgCalibrate className=' text-sm text-textgreen mr-1'/></div><div className=' text-sm'>Flutter</div></div>
    <div className='flex items-center'><div><CgCalibrate className=' text-sm text-textgreen mr-1'/></div><div className=' text-sm'>Mongo DB</div></div>
</div>

</div>
</div>
               <div className='tablet:w-[80%] w-full h-60 tablet:h-48 laptop:h-72 flex justify-center tablet:justify-end'>
                <div className=' w-60 tablet:w-48 laptop:w-64 cursor-pointer relative  '>
                <div className=' absolute bg-bermuda w-full h-full opacity-20 hover:opacity-0  transition duration-200 z-30'></div>
                   <img src='/Image/img.png'  className=' absolute z-20 h-full rounded-md'/>
                                    <div className='w-full h-full border-2 border-textgreen rounded-md z-0 absolute -bottom-5 -right-5'></div>
                </div>
                
                </div>
            </div>
            <div className=' w-full mt-16'>
                <List/>
            </div>
          
        </div>
        </div>
    </div>
  )
}
