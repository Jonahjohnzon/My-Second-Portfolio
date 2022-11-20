import React from 'react'
import { Mobile } from '../../../Experience'
import {FaExternalLinkAlt} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
const App = () => {
  const List =()=>{
    const data=Mobile.map((e)=>{
   return(
    <div>
      <div className=' flex  tablet:items-center mb-20' style={{flexDirection:e.flexact,justifyContent:"space-between"}}>
      <div className=' w-full'>
      <div>
          <div className=' text-textgreen font-robot'>Web Project</div>
          <div className=' text-fontcolor font-semibold text-xl mb-3'>{e.Title}</div>
          <div >
            <div className=' text-fontnude bg-newblue shadow-lg rounded-md py-5 px-5 '>{e.Info}
            <div>
            <div className=' flex flex-wrap text-xs text-textgreen font-robot '>{
              e.Tech.map((e)=>{
                return(
                  <div><div className='mt-2 px-3 '>{e}</div></div>
                )
              })
            }</div>
            </div>
            
            </div>
       
          </div>
          <div className='flex mt-8  justify-center'  >
          <a href={e.Github}><div className=' text-xl text-fontcolor cursor-pointer hover:text-textgreen  '><FiGithub/></div></a>

            
          </div>
          <div className=' flex justify-center mt-7'>
          <a href={e.Website}><div className='border-textgreen border-[1px] w-fit rounded-md '>
          <div className=' text-textgreen text-xs laptop:text-base  font-firacode tracking-widest py-3 px-14 cursor-pointer hover:bg-textgreen hover:bg-opacity-10 transition ease-in-out duration-300'>Download Apk</div>
          </div></a>
          </div>
        </div>
      </div>
      <div className='w-full tablet:flex justify-center hidden'>
      <a href={e.Website}><div className=' w-60 rounded-lg overflow-hidden shadow-lg relative'><div className=' bg-textgreen w-full h-full absolute opacity-20 hover:opacity-0 cursor-pointer'></div><img src={e.image}/></div></a></div>
      </div>
    </div>
   )
    })
    return data
  }
  return (
    <div className='mt-20 mb-20' id='app'>
          <div className='flex justify-center pb-10'>
        <div className=' laptop:w-1/2 w-3/4'>
        <div className='flex items-center mb-20'><span className=' tablet:text-xl font-robot text-textgreen mr-2'>03.</span><div className=' font-semibold text-xl whitespace-nowrap tablet:text-3xl text-fontcolor mr-10'>Mobile Applications</div><div className='w-full bg-fontnude h-[1px] opacity-50'></div></div>
        <div><List/></div>
        </div>
        </div>
    </div>
  )
}

export default App