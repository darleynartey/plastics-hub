import React from 'react'
import image1 from '../../assets/image1.jpg';

const DealersPage = () => {
  return (
      <div className="bg-neutral-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
                    
                    <div>
                        <h2 className="text-4xl font-bold text-zinc-800 mb-3">Real People, Real Reviews</h2>
                        <p className="text-zinc-600 mb-6">Explore genuine customer feedback from across the web, all in one place.</p>
                          <div className='flex flex-col justify-center items-center pt-4'>
                            <div className="flex flex-col items-center mb-2">
                                <img src={image1} alt="User" className="h-60 w-60 rounded-full"/> 
                                <div className="text-sm text-zinc-800">John Doe</div>
                            </div>
                            <p className="text-zinc-600 text-sm">"Great service, very satisfied with the quick response!"</p>
                            <div className="text-yellow-400 mt-2">
                                ★★★★★
                            </div>
                            <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300">Contact Us</button>
                          </div>
                        
                    </div>
        
                    
                    <div className="bg-teal-600 p-8 rounded-lg shadow-lg">
                        <form>
                            <div className="mb-4">
                                <input type="text" placeholder="Name" className="w-full p-3 rounded-lg focus:outline-none"/>
                            </div>
                            <div className="mb-4">
                                <input type="email" placeholder="Email" className="w-full p-3 rounded-lg focus:outline-none"/>
                            </div>
                            <div className="mb-4">
                                <input type="tel" placeholder="Phone" className="w-full p-3 rounded-lg focus:outline-none"/>
                            </div>
                            <div className="mb-6">
                                <textarea placeholder="What Can We Help You With?" className="w-full p-3 rounded-lg focus:outline-none" rows="4"></textarea>
                            </div>
                            <button type="submit" className="bg-gray-700 text-white w-full p-3 rounded-lg hover:bg-teal-600 transition duration-300">Request Service</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


  )
}

export default DealersPage