"use client"
import React, { useState, useEffect } from 'react';
import CreateJobDialog from './CreateJobDialog';


const Navbar = ({ setRefresh, addNewJob }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    // const [refresh, setRefresh] = useState(false);
    useEffect(() => {
      if (!isDialogOpen) {
        setRefresh(prev => !prev);  // Toggle refresh state to force re-render
      }
    }, [isDialogOpen, setRefresh]);

  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex justify-center items-center space-x-8 rounded-full bg-white shadow-lg w-full max-w-4xl mx-auto px-4 py-2">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <a href="#" className="text-gray-700 hover:text-black">Home</a>
        <a href="#" className="text-gray-700 hover:text-black">Find Jobs</a>
        <a href="#" className="text-gray-700 hover:text-black">Find Talents</a>
        <a href="#" className="text-gray-700 hover:text-black">About us</a>
        <a href="#" className="text-gray-700 hover:text-black">Testimonials</a>
        {/* <button className="bg-[#6100AD] text-white px-4 py-2 rounded-full hover:bg-[#7A00C8]">
          Create Jobs
        </button> */}
        <button
            onClick={() => setIsDialogOpen(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-full"
        >
            Create Jobs
        </button>
        <CreateJobDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} addNewJob={addNewJob}/>
      </div>
    </nav>
  );
};

export default Navbar;