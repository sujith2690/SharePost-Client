import React from 'react'
import Navbar from './Navbar'

const AddPost = () => {
    return (
        <div className='bg-slate-500 h-screen'>
            <Navbar />
            <div className='bg-slate-300 flex justify-center'>
                <div className="flex flex-col max-w-md p-6 bg-gray-50 text-gray-800">
                    <img src="https://source.unsplash.com/200x200/?portrait?2" alt="" className="flex-shrink-0 object-cover  h-60 rounded-sm  bg-gray-500 " />
                    <form className='mt-3'>
                        <div className='bg-gray-300 p-2 rounded'>
                            <input type="file" />
                        </div>
                        <input type="text" className='bg-gray-300 mt-1 w-full p-2 border border-none outline-none rounded' placeholder='Heading' />
                        <textarea
                            className='bg-gray-300 mt-1 w-full p-2 border border-none outline-none rounded'
                            placeholder='Description'
                            rows='4'
                        ></textarea>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddPost