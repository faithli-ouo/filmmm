import React from 'react'

export default function PageFooter () {
    return (
        <footer className="bg-transparent text-white w-full z-50 absolute bottom-0 ">
        <div className="container mx-auto px-4 flex flex-row justify-center align-middle w-full
         border-gray-700 text-center text-white text-xs my-8
        ">
            <p className='self-center'>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    )
}