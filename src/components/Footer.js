import React from 'react'
import {RiCopyrightLine} from 'react-icons/ri'
const Footer = () => {
    return (
        <>
            <div className='lg:flex lg:text-lg text-xs mt-10 ml-7 space-y-2 grid grid-cols-2 md:flex md:flex-wrap justify-evenly lg:mx-5 lg:mt-32'>
                <div className='bg rounded-lg w-32 h-10 lg:w-44 pt-1  mt-2 text-white lg:text-sm text-center lg:pt-2 lg:h-14'>Financial health<br /> checkup</div>
                <div className='bg-[#404EED26] rounded-lg w-32 h-10 lg:w-44 text-[#404EED] font-semibold text-center pt-3 lg:pt-4 lg:h-14'>Buying Home</div>
                <div className=' bg-[#404EED26] rounded-lg w-32 h-10 lg:w-44 text-[#404EED] font-semibold text-center pt-3 lg:pt-4 lg:h-14'>Allocate Savings</div>
                <div className='bg-[#404EED26] rounded-lg w-32 h-10 lg:w-44 text-[#404EED] font-semibold text-center  pt-3 lg:pt-4 lg:h-14'>Debt Management</div>
                <div className=' bg-[#404EED26] rounded-lg w-32 h-10 lg:w-44 text-[#404EED] font-semibold text-center pt-3 lg:pt-4 lg:h-14'>Value Spending</div>
                <div className='bg-[#404EED26] rounded-lg w-32 h-10 lg:w-44 text-[#404EED] font-semibold text-center lg:pt-4   pt-3 lg:h-14'>Saving for a Goal</div>
            </div>
            <div className='flex justify-between p-2 bg lg:py-2 mt-20 lg:mt-32 lg:px-10'>
                <div className='lg:flex lg:text-xl lg:block   text-xs text-white '>
                    <p>About</p>
                    <p className='lg:ml-10'>Contact</p>
                    <p  className='lg:ml-10'>Button</p>
                </div>
                <div className='flex'>
                    <div className='lg:pt-2'><RiCopyrightLine className='text-white lg:mr-3'/></div>
                    <div className=' text-xs text-white'>
                        <p> All rights Reserved</p>
                        <p>Developed by Mayonity</p>
                    </div>
                </div>
                <div className='flex mt-2'>
                    <img src="f.png" className='lg:w-7 w-4 h-4 mr-2 lg:mr-5 lg:h-7'/>
                    <img src="t.png" className='lg:w-7 w-4 h-4  mr-2 lg:mr-5 lg:h-7'/>
                    <img src="ln.png" className='lg:w-7 w-4 h-4  lg:h-7'/>
                </div>
            </div>
        </>
    )
}

export default Footer
