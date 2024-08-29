import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import {MdClose} from 'react-icons/md'
const Menu = ({setDrop}) => {
    const Close=()=>{
        setDrop(false)
    }
  return (
    <div className=' bg-newblue shadow-2xl h-[100vh] w-[70vw] right-0 fixed z-50'>

        <div className=' h-full'>
        <div className='w-full h-full flex justify-center  '>
                <div className=' text-lg flex flex-col  items-end w-full'>
                <MdClose className=' text-4xl text-textgreen mb-[20%] mt-5 mr-9' onClick={Close}/>
                    <ul className='w-full h-[50%] justify-between items-center flex flex-col text-textgreen font-firacode tracking-wider '>
                        <Link 
                 to='about'spy={true}
                smooth={true}
                hashSpy={true}
                offset={-80}
                duration={500} onClick={Close} ><li className='flex flex-col items-center cursor-pointer'><span className='mr-1 font-robot text-xs'>01.</span> <div className=' text-fontcolor hover:text-textgreen'>About</div></li></Link>
                        <Link 
                        to='web'spy={true}
                smooth={true}
                hashSpy={true}
                offset={-80}
                duration={500} onClick={Close}><li className='flex flex-col items-center cursor-pointer'><span className='mr-1 font-robot text-xs'>02.</span> <div className=' text-fontcolor hover:text-textgreen'>Web Project</div></li></Link>
                         <Link 
                        to='app'spy={true}
                smooth={true}
                hashSpy={true}
                offset={-80}
                duration={500} onClick={Close}><li className='flex flex-col   items-center cursor-pointer'><span className='mr-1 font-robot text-xs'>03.</span> <div className=' text-fontcolor hover:text-textgreen'>Mobile</div></li></Link>
                         <Link 
                        to='contact'spy={true}
                smooth={true}
                hashSpy={true}
                offset={-80}
                duration={500} onClick={Close}><li className='flex flex-col  items-center cursor-pointer'><span className='mr-1 font-robot text-xs'>04.</span> <div className=' text-fontcolor hover:text-textgreen'>Contact</div></li></Link>
                        <a href="https://drive.google.com/file/d/1sXfFhCfFIhiD9FQXIr8-7MA2DH2gGPJK/view?usp=share_link"><div className=' border-textgreen border-[1px] py-2 px-4 rounded-md cursor-pointer hover:bg-textgreen hover:bg-opacity-10 transition ease-in-out duration-300'>Resume</div></a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu