"use client"
import React, {useState, useEffect} from 'react';
import { db } from '../../../utils/db';
import { Jobs } from '../../../utils/schema';
import Filter from './Filter';
import JobCard from './JobCard';

const jobsArray = [
  {
    logo: '/amazon.png',
    title: "Full Stack Developer",
    company: "Amazon",
    location: "Onsite",
    type: "Full-time",
    salary: "12 LPA",
    deadline: "2023-10-10", // Example date
    description: "A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized experiences.",
  },
  {
    logo: '/tesla.png',
    title: "Node Js Developer",
    company: "Tesla",
    location: "Onsite",
    type: "Full-time",
    salary: "12 LPA",
    deadline: "2023-10-10", // Example date
    description: "A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized experiences.",
  },
  {
    logo: '/swiggy.png',
    title: "UX/UI Designer",
    company: "Swiggy",
    location: "Onsite",
    type: "Full-time",
    salary: "12 LPA",
    deadline: "2023-10-10", // Example date
    description: "A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized experiences.",
  },
];

const Main = () => {
  const [jobList, setJobList] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    GetJobs();
    console.log(filteredJobs);
  }, []);

  const GetJobs = async () => {
    const result = await db.select().from(Jobs);
    setJobList(result);
    setFilteredJobs(result); // Initialize filteredJobs with all jobs
  };

  const handleFilterChange = (filters) => {
    console.log("Current filters:", filters); // Log current filter values
    const filtered = jobList.filter((job) => {
      const matchesTitle = filters.title === '' || job.title.toLowerCase().includes(filters.title.toLowerCase());
      const matchesLocation = filters.location === '' || job.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesType = filters.type === '' || job.type.toLowerCase() === filters.type.toLowerCase();
      // const salary = parseInt(job.salary.replace(/\D/g, '')); // Convert salary to number
      // const matchesSalary = salary >= filters.salaryRange[0] && salary <= filters.salaryRange[1];
      const [minSalary, maxSalary] = job.salary.split('-').map(s => parseInt(s.replace(/\D/g, '')));
      const matchesSalary = (minSalary <= filters.salaryRange[1] && maxSalary >= filters.salaryRange[0]);
  //   
      return matchesTitle && matchesLocation && matchesType && matchesSalary;
    });
  
    console.log("job list:", jobList); // Log job list
    console.log("Filtered results:", filtered); // Log filtered results
    setFilteredJobs(filtered);
  };

  return (
    <div className="container mx-auto py-8">
      <Filter onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobsArray.map((job, index) => {
          const { logo, title, location, salary, description } = job; // Destructure job object

          return (
            <div className="bg-white shadow-md rounded-lg p-4" key={index}>
              <div className="flex items-center justify-between">
                <img src={logo} alt="Company Logo" className="h-12" />
                <span className="text-black-500 bg-blue-300 p-1 rounded-md border-solid">24h Ago</span>
              </div>
              <h3 className="text-lg font-semibold mt-2">{title}</h3>
              <div className="flex items-center text-gray-600 mt-1">
                <span className="mx-2">|</span>
                <span>{location}</span>
                <span className="mx-2">|</span>
                <span>{salary}</span>
              </div>
              <p className="text-gray-600 mt-2">{description}</p>
              <button className="bg-blue-500 text-white w-full mt-4 py-2 rounded-md">Apply Now</button>
            </div>
          );
        })}
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Main;