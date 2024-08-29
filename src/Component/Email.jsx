import React from 'react'

const Email = () => {
  return (
    <div className=' hidden tablet:flex fixed bottom-0 laptop:right-1  -right-10 '>
       <div className='flex  flex-col items-center'>
       <div className='rotate-90'>
        <a href='https://mail.google.com/mail/u/0/?fs=1&to=jonahjohnzon@gmail.com&su=Hello&body=Hi+Jonah&tf=cm'><div className=' font-robot text-xs text-fontcolor mr-2 tracking-wider cursor-pointer hover:text-textgreen hover:scale-105 transition duration-200'> jonahjohnzon@gmail.com</div></a></div>
        <div className='w-[2px] h-24 bg-fontnude mt-24  '></div>
        </div>
    </div>
  )
}

export default Email