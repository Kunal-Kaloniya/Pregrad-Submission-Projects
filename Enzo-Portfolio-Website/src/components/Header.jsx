import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
    return (
        <div className=' absolute w-full flex items-center justify-end z-10 p-15'>
            <button className='bg-black text-xl hover:bg-gray-500 text-white border-2 px-6 py-3 rounded-full'>
                Hire me
            </button>
            <i className="ri-more-2-fill text-4xl ml-3"></i>
        </div>
    )
}

export default Header