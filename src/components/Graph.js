import React from 'react'

const Graph = () => {
  return (
  <>
  <div className='bg-gray-200 md:px-5 md:py-2 border-2 rounded-lg mt-40 lg:py-6 lg:mx-10 flex lg:px-10 mx-2  lg:mt-32'>
    <div >
        <ul className='lg:space-y-4 lg:text-lg space-y-2 text-xs pr-2 text-right border-r-2 border-black lg:pr-4'>
            <li>$250,000</li>
            <li>$200,000</li>
            <li>$150,000</li>
            <li>$100,000</li>
            <li>$50,000</li>
            <li>$0</li>
            <li>-$50,000</li>
            <li>-$100,000</li>
            <li>-$150,000</li>
            <li>-$200,000</li>
            <li>-$250,000</li>
        </ul>
    </div>
    <div className='lg:w-[94%] md:w-[90%] lg:text-lg text-xs w-[77%]' >
        <div className='lg:mt-14 mt-6' ><h1 className='text-green-400 lg:text-lg text-xs flex justify-end'>Networth<br/>$150,000</h1><hr className='border-black '/></div>
       <div className='flex'>
        <div  ><p className='lg:ml-24 mt-12 ml-5 md:ml-10 lg:mt-12'>$50,000</p><div className='lg:w-20 w-10 ml-5  h-4 lg:h-10 lg:ml-20 md:ml-10  bg-green-700'></div></div>
        <div><p  className='lg:ml-32 ml-7 mt-6 md:ml-24 lg:mt-8'>$55,000</p><div  className='lg:w-20 ml-7  lg:h-14 w-10 h-10 lg:ml-28 md:ml-24 bg-green-700'></div></div>
        <p className='lg:ml-32 mt-16 ml-5 md:ml-28 lg:mt-20'>$2000</p>
        <p className='lg:ml-44 mt-16 ml-6 md:ml-40 lg:mt-20'>$200,000</p>
        </div>
        <div><hr className='border-black '/></div>
        <div className='flex md:ml-[30%] lg:ml-[40%]'>
        <div><div className='lg:w-20 lg:h-5 w-10 h-3 ml-36 bg-red-600  '></div></div>
        <div><div className='lg:w-20 lg:h-40 w-10 h-20 md:ml-40  bg-red-800  ml-6 lg:ml-40'></div></div>
        </div>
    
        <div className='lg:flex lg:justify-evenly  flex justify-around  mb-5  lg:mr-10 lg:mt-20'>
            <h1 className='lg:mr-10 lg:text-lg ml-6 text-xs '>Total Savings</h1>
            <h1 className='text-xs ml-2 lg:text-lg'>Investments</h1>
            <h1  className='text-xs  lg:text-lg ml-2  '>Total Debt (except mortgage)</h1>
            <h1  className='text-xs lg:text-lg ml-2 '>Mortgage Balance</h1>
        </div>
    </div>
   
  </div>
  </>
  )
}

export default Graph
