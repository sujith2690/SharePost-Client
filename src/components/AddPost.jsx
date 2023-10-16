import React, { useState } from 'react';
import Navbar from './Navbar';
import { newPost } from '../APIs/crudApi';

const AddPost = () => {
    const [data, setData] = useState({
        heading: '',
        description: '',
        image: null,
    });

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        const inputValue = type === 'file' ? files[0] : value;

        setData({
            ...data,
            [name]: inputValue,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await newPost(data)
        console.log(response,'--------response')
        console.log(data);
    };

    return (
        <div className='bg-slate-500 h-screen'>
            <Navbar />
            <div className='bg-slate-300 flex justify-center'>
                <div className="flex flex-col max-w-md p-6 bg-gray-50 text-gray-800">
                    <img
                        src="https://source.unsplash.com/200x200/?portrait?2"
                        alt=""
                        className="flex-shrink-0 object-cover h-60 rounded-sm bg-gray-500"
                    />
                    <form className='mt-3' onSubmit={handleSubmit}>
                        <div className='bg-gray-300 p-2 rounded'>
                            <input
                                type="file"
                                name="image"
                                onChange={handleInputChange}
                            />
                        </div>
                        <input
                            type="text"
                            name="heading"
                            value={data.heading}
                            onChange={handleInputChange}
                            className='bg-gray-300 mt-1 w-full p-2 border border-none outline-none rounded'
                            placeholder='Heading'
                        />
                        <textarea
                            name="description"
                            value={data.description}
                            onChange={handleInputChange}
                            className='bg-gray-300 mt-1 w-full p-2 border border-none outline-none rounded'
                            placeholder='Description'
                            rows='4'
                        ></textarea>
                        <button type='submit' className='bg-blue-700 w-full rounded text-white p-3'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPost;
