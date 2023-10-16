import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    return (
        <div className='bg-slate-500 h-screen'>
            <Navbar />
            <div className='p-3 grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 grid-cols-6  gap-3'>
                
                <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-50 text-gray-800">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded bg-gray-500" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">Heading</h2>
                            <span className="text-sm text-gray-600">Date Time</span>
                        </div>
                        <div>
                            <p>HEllo Description</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home