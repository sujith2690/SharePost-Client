import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Single from './components/Single'
import AddPost from './components/AddPost'

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single" element={<Single />} />
        <Route path="/addPost" element={<AddPost />} />
    </Routes>
  )
}

export default App