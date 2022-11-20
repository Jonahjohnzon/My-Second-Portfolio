import React from 'react'

const Contact = () => {
  return (
    <div className='pb-3' id='contact'>
        <div className=' flex justify-center'>
            <div className=' flex items-center flex-col'>
            <div className='flex items-center justify-center mb-5'><span className=' text-lg font-robot text-textgreen mr-2'>04.</span><div className='  text-lg text-textgreen font-robot  mr-10'>Contact</div></div>
            <div className=' text-fontcolor text-5xl font-bold mb-6'>Get In Touch</div>
            <div className=' text-fontnude text-lg w-2/5 mb-16 '> I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll get back to you!</div>
            <a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtVbFlRBkNFtDTDbjpgnhwkjvZQdfMZdGfkxfnKkWMsqJgxzXPhHRzdHkwSMDTwwgXGxkFhq'><div className='border-textgreen border-[1px] w-fit rounded-md mb-72'>
          <div className=' text-textgreen  font-firacode tracking-widest py-3 px-14 cursor-pointer hover:bg-textgreen hover:bg-opacity-10 transition ease-in-out duration-300'>Message me</div>
          </div></a>
          <div className=' text-fontnude text-sm mb-3'>Designed & Built by Ominyi Jonah</div>
          <div className=' text-fontnude text-sm'>&copy;Copyright 2022.</div>
            </div>
        </div>
    </div>
  )
}

export default Contact