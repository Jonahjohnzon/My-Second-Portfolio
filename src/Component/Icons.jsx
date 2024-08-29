import React from 'react'
import {BsWhatsapp} from 'react-icons/bs';
import {FiGithub,FiTwitter,FiInstagram,FiLinkedin} from 'react-icons/fi'

const Icons = () => {

  return (
    <div className='hidden tablet:flex fixed bottom-0 laptop:left-20 left-10 '>
    <div className='flex  flex-col items-center relative'>
    <div className=' absolute bottom-32 '>
    <a href='https://www.instagram.com/luze_box/'><FiInstagram  className='mb-5 cursor-pointer text-fontnude hover:text-textgreen text-lg hover:scale-125 transition duration-200'/></a>
    <a href='https://github.com/Jonahjohnzon'><FiGithub className='mb-5 cursor-pointer text-fontnude hover:text-textgreen text-lg hover:scale-125 transition duration-200' /></a>
    <a href='https://twitter.com/Luzebox'><FiTwitter  className='mb-5 cursor-pointer text-fontnude hover:text-textgreen text-lg hover:scale-125 transition duration-200'/></a>
    <a href='https://www.linkedin.com/in/jojome'><FiLinkedin   className='mb-5 cursor-pointer text-fontnude hover:text-textgreen text-lg hover:scale-125 transition duration-200'/></a>
    <a href='https://wa.link/ed38zd'><BsWhatsapp   className=' cursor-pointer text-fontnude hover:text-textgreen text-lg hover:scale-125 transition duration-200' /></a>

</div>
     <div className='w-[2px] h-24 bg-fontnude mt-10 absolute bottom-0 right-0'></div>
     </div>
 </div>
  )
}

export default Icons