import React from 'react'

import {
    FaGithub,
    FaInstagram,
    FaYoutube,
    FaLinkedin,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-800 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Recycling</li>
                    <li className='py-1'>Resources</li>
                    <li className='py-1'>Dealers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Consultation</li>
                    <li className='py-1'>Training</li>
                    <li className='py-1'>Education</li>

                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Dealers</li>
                    <li className='py-1'>Resources</li>
                </ul>
            </div>
            
            <div className='col-span-3 justify-end pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-400'>
        <p className='py-4'>2022 Workflow, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
           <a><FaInstagram /></a>
            <a href='https://www.youtube.com/channel/UCg2r7n2_7Hv4VWAk9LKzpWQ' target='_blank'><FaYoutube /></a>
            <a href='https://www.linkedin.com/in/barbara-nartey-274961194/' target='_blank'><FaLinkedin /></a>
            <a href='https://github.com/darleynartey' target='_blank'><FaGithub /></a>
        </div>
        </div>
    </div>
  )
}

export default Footer