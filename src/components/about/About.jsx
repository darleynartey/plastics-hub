import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold text-teal-600'>Begin Your Sustainable Journey Today</h2>
                <p className='text-3xl py-6 text-gray-500'>At Plastics Hub, we believe that every piece of plastic has value. <br /> We empower individuals and businesses alike to transform their <br /> plastic waste into a profitable and environmentally conscious resource</p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center mt-20'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-gray-700'>100%</p>
                    <p className='text-gray-400 mt-2'>Sales Completion</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-gray-700'>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-gray-700'>100K</p>
                    <p className='text-gray-400 mt-2'>Transactions</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About