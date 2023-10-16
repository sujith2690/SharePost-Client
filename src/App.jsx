import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Single from './components/Single'
import AddPost from './components/AddPost'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single" element={<Single />} />
        <Route path="/addPost" element={<AddPost />} />
      </Routes>
    </>
  )
}

export default App