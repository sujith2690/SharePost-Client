import React from 'react'
import Navbar from './Navbar'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BiCut } from 'react-icons/bi'
import { toast } from 'react-toastify';

const Single = () => {
    const handleDelete =()=>{
        toast.success('Deleted')
    }
    const handleEdit =()=>{
        toast.success('Edit')
    }
    return (
        <div className='bg-slate-500 h-screen'>
            <Navbar />
            <div className='bg-slate-300 flex justify-center'>

                <div className="flex flex-col max-w-md p-6 bg-gray-50 text-gray-800">
                    <img src="https://source.unsplash.com/200x200/?portrait?2" alt="" className="flex-shrink-0 object-cover  h-60 rounded-sm  bg-gray-500 " />
                    <div className=''>
                        <div >
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h2 className="text-xl font-semibold">Heading</h2>
                                    <span className="block pb-2 text-sm text-gray-600">date: </span>
                                    <span className="block pb-2 text-sm text-gray-600">time: </span>
                                </div>
                                <div className='flex justify-between gap-10 p-4 text-xl'>
                                    <RiDeleteBin6Line  onClick={handleDelete} className='text-red-500 cursor-pointer'/>
                                    <BiCut onClick={handleEdit} className='text-grey-500 cursor-pointer' />
                                </div>
                            </div>
                        </div>
                        <p>description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Single