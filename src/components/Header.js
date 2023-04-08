import React from 'react'

const Header = () => {
    return (
        <>
            {/* <div className='bg lg:h-96 h-40 pl-3 pt-3 flex  lg:pl-10 lg:pt-10 relative'>
                <div>
                    <img src="logo.png" alt="image" className='w-20 h-10  lg:w-32 lg:h-16' />
                </div>
                <div>
                    <h1 className='lg:text-4xl md:text-2xl md:pl-40  pl-5 pt-2 text-sm  text-white font-poppins font-bold lg:ml-56 '>Financial Health Checkup</h1>
                </div>
            </div> */}
             <div className='bg lg:h-96 h-40 pl-9 pt-3 columns-3   relative'>
                <div>
                    <img src="logo.png" alt="image" className='w-10 h-5  lg:w-32 lg:h-16' />
                </div>
                <div>
                    <h1 className='lg:text-2xl md:text-sm  2xl:text-xl  text-xs  text-white  font-bold '>Financial Health Checkup</h1>
                </div>
            </div>
        </>
    )
}

export default Header
