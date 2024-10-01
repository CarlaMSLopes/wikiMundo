import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='bg-indigo-400 flex justify-center'>
         <div>
          <Image
            src="/Logo.svg"
            alt="Logo Wiki-Mundo"
            width={250}
            height={80}
          />
         </div>
      </header>
  )
}

export default Header