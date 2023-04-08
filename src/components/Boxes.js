import React from 'react'
import { BsGraphUp } from 'react-icons/bs'
import { BsGraphUpArrow } from 'react-icons/bs'
const Boxes = () => {
    return (
        <>
            <div className='lg:flex md:inline-block md:ml-20 lg:mx-4 xl:flex 2xl:flex   justify-around absolute top-20 left-5 lg:top-32  '>
                <div className='bg-white lg:w-[60%] pt-2 w-[115%]  lg:px-5 lg:pt-10 shadow-2xl pb-10 lg:h-[100%] '>
                    <div className='bg1  mx-2 py-2 px-2 text-white m flex justify-between font-bold lg:text-2xl  lg:py-3  lg:px-3  '><h1>Basic Financial Inputs($)</h1>
                        <BsGraphUp />
                    </div>
                    <div className='lg:flex md:flex xl:flex 2xl:flex   justify-between lg:w-[52%]'>
                        <div className='lg:mt-8 mt-3 ml-3 md:mx-4 lg:space-y-2 space-y-1 '>
                            <h1 className='lg:text-sm text-xs  md:text-sm'>Monthly Income</h1>
                            <input type="text" placeholder='$10,000' className='lg:w-60 w-64  lg:mt-4 rounded-xl text-xl p-1 lg:text-3xl lg:pl-5 lg:h-14   bg-gray-100' />
                            <h1 className='lg:text-sm text-xs md:text-sm'>Monthly Expenses</h1>
                            <input type="text" className='lg:w-60 w-64 lg:mt-4 rounded-xl text-3xl lg:pl-5 lg:h-14   bg-gray-100' />
                            <h1 className='lg:text-sm text-xs md:text-sm '>Monthly Debt pmt (credit card, car etc)</h1>
                            <input type="text" className='lg:w-60 w-64 lg:mt-4 rounded-xl text-3xl lg:pl-5 lg:h-14  bg-gray-100' />
                            <h1 className='lg:text-sm text-xs md:text-sm'>Housing / Rent, Tax, Inurance</h1>
                            <input type="text" className='lg:w-60 w-64 lg:mt-4 rounded-xl text-3xl lg:pl-5 lg:h-14   bg-gray-100' />
                        </div>
                        <div className='lg:mt-9 lg:space-y-2 ml-3 md:space-y-1 md:mx-4 md:mt-3 lg:ml-1'>
                            <h1 className='lg:text-sm text-xs md:text-sm'>Total Savings (Liquid Funds)</h1>
                            <input type="text" className='lg:w-60 w-64 lg:mt-4 rounded-xl text-3xl lg:pl-5 lg:h-14   bg-gray-100' />
                            <h1 className='lg:text-sm text-xs md:text-sm'>Investments (401K, IRA, Stocks, Bonds)</h1>
                            <input type="text" className='lg:w-60 w-64 lg:mt-4 rounded-xl text-3xl lg:pl-5 lg:h-14  bg-gray-100' />
                            <h1 className='lg:text-sm text-xs md:text-sm'>Total Debt (except mortgage)</h1>
                            <input type="text" className='lg:w-60 w-64 lg:mt-4 rounded-xl text-3xl lg:pl-5 lg:h-14   bg-gray-100' />
                            <h1 className='lg:text-sm text-xs md:text-sm'>Mortgage Balance</h1>
                            <input type="text" className='lg:w-60 w-64 lg:mt-4 rounded-xl text-3xl lg:pl-5 lg:h-14  bg-gray-100' />
                        </div>
                    </div>
                </div>
                <div className='  bg-white lg:mt-0 mt-4 w-[115%] lg:w-[150%] shadow-2xl lg:ml-5'>
                    <div className='lg:mx-5  '>
                        <div className='bg1 lg:mt-10 pl-2 py-2 text-white flex  lg:justify-center font-bold lg:text-xl lg:w-[100%]  lg:py-3    '><h1>Your Financial Health Checkup</h1>
                            <BsGraphUpArrow />
                        </div>
                        <div className='lg:mt-6 mt-3 md:space-y-4 space-y-3 text-center pb-9'>
                            <h1 className='text-xs md:text-xl'>Debt / Income ratio</h1>
                            <input type="text" placeholder='10%' className=' mt-1 text-center lg:w-60 lg:mx-10 bg-gray-100 rounded-xl lg:text-3xl text-xl lg:pl-5 lg:h-14  ' />
                            <h1 className='text-xs md:text-xl'>Expense coverage ratio by savings</h1>
                            <input type="text" placeholder='8.33' className=' mt-1 text-center  lg:w-60  bg-gray-100 rounded-xl lg:text-3xl text-xl lg:pl-5 lg:h-14  ' />
                            <h1 className='text-xs md:text-xl'>Assets / Liabilities</h1>
                            <input type="text" placeholder='23%' className=' mt-1 text-center lg:w-60  bg-gray-100 rounded-xl lg:text-3xl text-xl lg:pl-5 lg:h-14 ' />
                            <h1 className='text-xs md:text-xl'>Assets / (Rent + Debt) coverage</h1>
                            <input type="text" placeholder='1667%' className='mt-1 text-center lg:w-60  bg-gray-100 rounded-xl lg:text-3xl text-xl lg:pl-5 lg:h-14  ' />
                            <h1 className='text-xs md:text-xl'>Housing cost ratio</h1>
                            <input type="text" placeholder='20%' className='mt-1 text-center lg:w-60  bg-gray-100 rounded-xl lg:text-3xl text-xl lg:pl-5 lg:h-14  ' />
                            <h1 className='text-xs md:text-xl'>Slack in Budget</h1>
                            <input type="text" placeholder='$2000' className='text-center  lg:w-60  bg-blue-200  rounded-xl lg:text-3xl text-xl lg:pl-5 lg:h-14 ' />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Boxes
