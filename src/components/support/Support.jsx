import React from 'react'
import { AcademicCapIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ArchiveIcon, UserAddIcon} from '@heroicons/react/solid'

const Support = () => {
  return (
    <div name='support' className='w-full h-full mt-24 bg-neutral-300'>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h2 className='text-3xl pt-8 text-gray-700 uppercase text-center'>Support</h2>
              <h3 className='text-5xl font-bold py-6 text-center text-teal-600'>Finding the right team</h3>
              <p className='py-4 text-3xl text-gray-600'>At Plastics Hub, we are your gateway to turning environmental responsibility into profitable ventures. With us, you can not only responsibly dispose of your plastic waste but also sell it and earn income.</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <UserAddIcon className='w-16 p-4 bg-teal-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6 text-gray-600'>Consultation Services</h3>
                      <p className='text-gray-600 text-xl'>Offering expert advice on waste management strategies, and disposal options tailored to the client's specific needs and goals.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-teal-600'>Get In Touch <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <ArchiveIcon className='w-16 p-4 bg-teal-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6 text-gray-600'>Recycling Services</h3>
                      <p className='text-gray-600 text-xl'> Processing plastic waste through recycling facilities to convert it into reusable materials, thereby reducing the need for virgin plastic production.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-teal-600'>Get In Touch <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <AcademicCapIcon className='w-16 p-4 bg-teal-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6 text-gray-600'>Education and Training</h3>
                      <p className='text-gray-600 text-xl'>Providing training programs and educational resources to help clients understand the importance of proper waste management practices.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-teal-600'>Get In Touch <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>

          </div>
      </div>
  </div>
  )
}

export default Support