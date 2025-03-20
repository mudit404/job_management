"use client"
import React from 'react';

const JobCard = ({ job }) => {
  // Function to calculate the time difference in hours
  const timeAgo = (() => {
    const now = new Date();
    const createdAt = new Date(job?.created); // Assuming job.created is a valid timestamp
    const diffInMs = now - createdAt; // Difference in milliseconds
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60)); // Convert milliseconds to hours
    return diffInHours;
  })();

  return (
    <div className="bg-white shadow-md rounded-lg p-4 my-5 flex flex-col h-full">
      <div className="flex items-center justify-between">
        <img src= "/mudit_logo.png" alt="Company Logo" className="h-12 rounded-full" />
        <span className="text-black-500 bg-blue-300 p-1 rounded-md border-solid">
          {timeAgo}h Ago
        </span>
      </div>
      <h2 className="text-lg font-semibold mt-2">{job?.company}</h2>
      <h3 className="text-lg font-semibold mt-2">{job?.title}</h3>
      <div className="flex items-center text-gray-600 mt-1">
        <span>{job?.type}</span>
        <span className="mx-2">|</span>
        <span>{job?.location}</span>
        <span className="mx-2">|</span>
        <span>₹ {job?.salary}</span>
      </div>
      <p className="text-gray-600 mt-2 flex-1">{job?.description}</p>
      <button className="bg-blue-500 text-white w-full mt-4 py-2 rounded-md">Apply Now</button>
    </div>
  );
};

export default JobCard;
