import React, { useState } from 'react'
import { FaSlideshare } from 'react-icons/fa';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate= useNavigate()
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    
    return (
        <>
            <header className="p-3 bg-gray-100 text-gray-800">
                <div className="container flex justify-between h-16 mx-auto">
                    <div className="flex items-center">
                        <p className="flex items-center p-2 text-blue-800 text-4xl cursor-pointer" onClick={()=>navigate('/')}>
                            <FaSlideshare /> <span className='text-2xl font-bold ml-2'>Share Post</span>
                        </p>
                        <ul className="items-stretch hidden space-x-3 lg:flex px-4">
                            <li className="flex hover:bg-slate-600 px-2 font-bold rounded hover:text-white">
                                <Link to={'/'} >Home</Link>
                            </li>
                            <li className="flex hover:bg-slate-600 px-2  font-bold rounded hover:text-white">
                                <Link to={'/addPost'} >Add Post</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <button className="px-6 py-2 font-semibold rounded bg-blue-800 text-gray-50">Log in</button>
                    </div>
                    <button className="p-4 lg:hidden text-4xl text-blue-800" onClick={toggleMenu}>
                        <AiOutlineMenuFold />
                    </button>
                </div>

            </header>
            <div className=' flex items-center justify-end lg:hidden'>
                {showMenu && (
                    <ul className=" text-center w-56 rounded-md bg-slate-500 py-2">
                        <li className=' hover:bg-black hover:text-white p-2 rounded font-bold cursor-pointer'> <Link to={'/'} >Home</Link></li>
                        <li className=' hover:bg-black hover:text-white p-2 rounded font-bold cursor-pointer'> <Link to={'/addPost'} >Add Post</Link></li>
                        <li className=''><button className="px-6 py-2 font-semibold rounded bg-blue-800 text-gray-50">Log in</button></li>
                    </ul>
                )}
            </div>
        </>

    )
}

export default Navbar

