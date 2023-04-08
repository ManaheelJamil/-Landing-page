import React from 'react'
import { VscCircleFilled } from 'react-icons/vsc'
import { VscCircleLargeFilled } from 'react-icons/vsc'
const Current = () => {
    return (
        <>
            <div className='lg:mt-80  md:mt-[110%] mt-[310%] lg:mr-10 '>
                <div className='bg1 lg:ml-9 text-white flex justify-between font-bold md:w-[73%] md:ml-28 lg:text-3xl ml-5 p-2 lg:py-3 w-[88%] lg:px-3 lg:w-[56%] '><h1>Current Surplus</h1>
                </div>
                <div className='lg:ml-32 lg:mt-10 w-80 '>
                    <h1 className='lg:text-xl px-5 py-2 lg:w-[100%] bg-blue-100 md:ml-72 lg:ml-0 ml-16 text-xs mt-2 mb-3 w-[70%] text-blue-500 font-bold'>Monthly Expenses vs Savings</h1>
                </div>
                <div className='flex ml-3 lg:space-x-6 md:ml-20'>
                    <div className='text-center lg:text-xs md:text-lg text-xs font-semibold mt-20 lg:mt-20'><h1>Monthly Slack,<br />$4000</h1></div>
                    <div><img src="Untitled.png" className='lg:mt-3  lg:w-96  w-[200%] ring-offset-2 ring border-8 my-5 lg:mx-4  rounded-full' />
                        <h1 className='text-center md:text-lg lg:text-xs  text-xs  font-semibold  '>Housing or Rent,<br /> Tax, Insurance,<br />$2000</h1>
                    </div>
                    <div><h1 className='w-20 md:w-32 text-center md:text-lg lg:text-xs  text-xs mt-5 font-semibold  lg:mt-10'>Monthly Expenses,<br />$3000</h1>
                        <h1 className='w-20 md:w-40 text-center  md:text-lg lg:text-xs text-xs mt-20 font-semibold lg:mt-20'>Monthly Debt pm <br />(credit card, car etc),<br />1000</h1>
                        <h1 className='lg:text-xl px-5 py-2 md:text-lg bg-blue-100 lg:mt-96 ml-5 w-80 absolute lg:block hidden rounded-lg text-blue-500 font-bold'>Total Assets vs Liabilities</h1>
                    </div>
                    <div className='text-md lg:block hidden lg:mt-40 lg:ml-20 '>
                        <ul className='lg:text-xl'>
                            <li className='text-red-700 flex align-middle font-semibold'> You may have too much debt, which is considered  risky to lenders.</li>
                            <li className='text-red-700 flex font-semibold'> You have less than 3 months of savings to cover your  expenses and debt obligations.</li>
                            <li className='text-green-400 flex font-semibold'> You have a positive net worth.</li>
                            <li className='text-red-700 flex font-semibold'> Your savings can be liquidated to cover months of payments. 6 months or more is a good sign.</li>
                            <li className='text-green-400 flex font-semibold'>Your housing cost is manageable to your income.</li>
                            <li className='text-green-400 lg:text-2xl flex lg:my-16 font-bold'><h1 className='text-black'>Your Networth is:</h1> $150,000</li>
                        </ul>
                    </div>
                </div>
                <div className='text-md  mx-5 mt-10 lg:mt-20 lg:ml-20 lg:hidden block '>
                        <ul className=''>
                            <li className='text-red-700 md:text-lg text-xs flex align-middle font-semibold'><VscCircleFilled className='lg:w-6 lg:h-6 w-8 lg:mr-3 lg:block hidden text-blue-500' /> You may have too much debt, which is considered  risky to lenders.</li>
                            <li className='text-red-700  md:text-lg text-xs  flex font-semibold'><VscCircleFilled className='lg:w-6 lg:h-6 lg:mr-3 w-8 mt-2 lg:block hidden text-blue-500' /> You have less than 3 months of savings to cover your  expenses and debt obligations.</li>
                            <li className='text-green-400  md:text-lg text-xs  flex font-semibold'><VscCircleFilled className='lg:w-6 lg:h-6 lg:mr-3 lg:block hidden w-8 text-blue-500' /> You have a positive net worth.</li>
                            <li className='text-red-700  md:text-lg text-xs  flex font-semibold'><VscCircleFilled className='lg:w-8 lg:h-8 lg:mr-3 w-8 lg:block hidden mt-2 text-blue-500' /> Your savings can be liquidated to cover months of payments. 6 months or more is a good sign.</li>
                            <li className='text-red-700  md:text-lg text-xs  flex font-semibold'><VscCircleFilled className='lg:w-6 lg:h-6  w-8 lg:mr-3 lg:block hidden text-blue-500' />Your housing cost is manageable to your income.</li>
                            <li className='text-green-400 md:text-2xl  text-xl mt-10  lg:text-2xl flex lg:my-24 font-bold'><h1 className='text-black'>Your Networth is:</h1> $150,000</li>
                        </ul>
                    </div>
                    <h1 className='lg:text-xl px-5 py-2 bg-blue-100 lg:mt-44 ml-6 w-72 mt-5 absolute lg:hidden block rounded-lg text-blue-500 font-bold'>Total Assets vs Liabilities</h1>
            </div>
         
        </>
    )
}

export default Current
