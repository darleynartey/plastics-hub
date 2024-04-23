import React from 'react'
import image1 from '../../assets/deal1.jpg'

const DealerCard = () => {
  return (
    <div className="bg-neutral-300 p-8">
        <div className="flex items-end justify-end">
            <input type="text" className="border border-zinc-300 p-2 w-72 rounded-l-lg focus:outline-none" placeholder="Search..."/>
            <button className="bg-green-300 text-white p-2  rounded-r-lg" id="searchButton">Search</button>
        </div>
            <h2 className="text-2xl font-bold mb-4">Plastic Bottle Dealers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="relative">
                    <img src={image1} alt="" className="rounded-lg"/>
                  
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Name</h3>
                        <p className="text-sm text-zinc-600">Location</p>
                        <p className="text-sm text-yellow-500">4.4</p>
                    </div>
                </div>
                
                <div className="relative">
                    <img src={image1} alt="" className="rounded-lg shadow-xl"/>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Name</h3>
                        <p className="text-sm text-zinc-600">Location</p>
                        <p className="text-sm text-yellow-500">4.2</p>
                    </div>
                </div>
                
                <div className="relative">
                    <img src={image1} alt="" className="rounded-lg shadow-xl"/>
                    
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Name</h3>
                        <p className="text-sm text-zinc-600">Location</p>
                        <p className="text-sm text-yellow-500">4.3</p>
                    </div>
                </div>
                
                <div className="relative">
                   <img src={image1} alt="" className="rounded-lg shadow-xl"/> 
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Name</h3>
                        <p className="text-sm text-zinc-600">Location</p>
                        <p className="text-sm text-yellow-500">4.3</p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Cans & Cups Dealers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative">
                    <img src={image1} alt="" className="rounded-lg shadow-xl"/>
                  
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Name</h3>
                        <p className="text-sm text-zinc-600">Location</p>
                        <p className="text-sm text-yellow-500">4.4</p>
                    </div>
                </div>
                
                <div className="relative">
                    <img src={image1} alt="" className="rounded-lg"/>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Name</h3>
                        <p className="text-sm text-zinc-600">Location</p>
                        <p className="text-sm text-yellow-500">4.2</p>
                    </div>
                </div>
                
                <div className="relative">
                    <img src={image1} alt="" className="rounded-lg"/>
                    
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Name</h3>
                        <p className="text-sm text-zinc-600">Location</p>
                        <p className="text-sm text-yellow-500">4.3</p>
                    </div>
                </div>
                
                <div className="relative">
                   <img src={image1} alt="" className="rounded-lg"/> 
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Name</h3>
                        <p className="text-sm text-zinc-600">Location</p>
                        <p className="text-sm text-yellow-500">4.3</p>
                    </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Polythene & Straw Dealers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative">
                    <img src={image1} alt="" className="rounded-lg shadow-xl"/>
                  
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Name</h3>
                        <p className="text-sm text-zinc-600">Location</p>
                        <p className="text-sm text-yellow-500">4.4</p>
                    </div>
                </div>
                
                <div className="relative">
                    <img src={image1} alt="" className="rounded-lg"/>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Name</h3>
                        <p className="text-sm text-zinc-600">Location</p>
                        <p className="text-sm text-yellow-500">4.2</p>
                    </div>
                </div>
                
                <div className="relative">
                    <img src={image1} alt="" className="rounded-lg"/>
                    
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Name</h3>
                        <p className="text-sm text-zinc-600">Location</p>
                        <p className="text-sm text-yellow-500">4.3</p>
                    </div>
                </div>
                
                <div className="relative">
                   <img src={image1} alt="" className="rounded-lg"/> 
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Name</h3>
                        <p className="text-sm text-zinc-600">Location</p>
                        <p className="text-sm text-yellow-500">4.3</p>
                    </div>
                </div>
              </div>
            
        </div>
  )
}

export default DealerCard
