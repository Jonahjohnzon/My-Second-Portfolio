import React, { useState } from 'react'
import { Project } from '../../../Experience'
import {FaExternalLinkAlt} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
const Web = () => {
  const [side,setside]=useState('row')
  const List=()=>{
    const New=Project.map((e)=>{
  
      return(
        <div className=' mb-44 laptop:mb-32'>
        <div className='relative flex '  style={{ justifyContent:`${e.side}`}}>
        <div className='  w-full tablet:w-3/5 rounded-md overflow-hidden '>
        <div className=' w-full'><a href={e.Website}><div className=' w-[100%] h-72 tablet:h-60 laptop:h-80  bg-cover bg-no-repeat bg-center relative' style={{backgroundImage:`url(${e.image})`}}>
        <div className=" w-full h-full opacity-20 hover:opacity-0 cursor-pointer transition duration-200 absolute bg-bermuda"></div>
        </div></a>
        </div></div>
        <div className='bg-newblue shadow-lg tablet:shadow-none rounded-md tablet:rounded-none h-full bg-opacity-[97%] tablet:bg-transparent absolute top-0 tablet:w-3/5 z-10' style={{right:`${e.content}`,left:`${e.contents}`,textAlign:`${e.text}`}}>
        <div className=' px-3 py-4 tablet:py-0 tablet:px-0'>
          <div className=' text-textgreen font-robot'>Web Project</div>
          <div className=' text-fontcolor font-semibold text-xl mb-3'>{e.Title}</div>
          <div >
            <div className=' text-fontnude tablet:bg-newblue tablet:shadow-lg rounded-md py-3 tablet:py-5 tablet:px-5 '>{e.Info}
            <div>
            <div className=' flex flex-wrap text-xs text-textgreen font-robot ' style={{justifyContent:`${e.sides}`}}>{
              e.Tech.map((e)=>{
                return(
                  <div><div className='mt-2 px-3 '>{e}</div></div>
                )
              })
            }</div>
            </div>
            
            </div>
       
          </div>
          <div className='flex tablet:mt-8 '  style={{ justifyContent:`${e.sides}`}}>
          <a href={e.Github} ><div className=' text-xl text-fontcolor cursor-pointer hover:text-textgreen  '><FiGithub/></div></a>
          <a href={e.Website} > <div className=' text-lg text-fontcolor ml-5 cursor-pointer hover:text-textgreen  '><FaExternalLinkAlt/></div></a>
            
          </div>
        </div>
       </div>
          </div>
        </div>
      )
  })
return New;
}
  return (
    <div>
        <div className='flex justify-center pb-10' id='web'>
        <div className=' laptop:w-1/2 w-3/4'>
        <div className='flex items-center mb-20'><span className=' tablet:text-xl font-robot text-textgreen mr-2'>02.</span><div className=' whitespace-nowrap font-semibold text-xl tablet:text-3xl text-fontcolor mr-10'>Web Applications</div><div className=' w-full  bg-fontnude h-[1px] opacity-50'></div></div>
        <div><List/></div>
        </div>
        </div>
    </div>
  )
}

export default Web