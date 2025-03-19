"use client"
import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 my-5 flex flex-col h-full">
      {/* <div className="flex items-center justify-between">
        <img src={logo} alt="Company Logo" className="h-12" />
        <span className="text-blue-500">{timeAgo}</span>
      </div> */}
      <h2 className="text-lg font-semibold mt-2">{job?.company}</h2>
      <h3 className="text-lg font-semibold mt-2">{job?.title}</h3>
      <div className="flex items-center text-gray-600 mt-1">
        <span>{job?.type}</span>
        <span className="mx-2">|</span>
        <span>{job?.location}</span>
        <span className="mx-2">|</span>
        <span>{job?.salary}</span>
      </div>
      <p className="text-gray-600 mt-2 flex-1">{job?.description}</p>
      <button className="bg-blue-500 text-white w-full mt-4 py-2 rounded-md">Apply Now</button>
    </div>
  );
};

export default JobCard;