import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    title: '',
    location: '',
    type: 'Full-time',
    salaryRange: [50000, 80000],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onFilterChange({ ...filters, [name]: value });
  };

  const handleSalaryChange = (e) => {
    const value = parseInt(e.target.value);
    setFilters({ ...filters, salaryRange: [value, filters.salaryRange[1]] });
    onFilterChange({ ...filters, salaryRange: [value, filters.salaryRange[1]] });
  };

  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg pb-5 my-5">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          name="title"
          value={filters.title}
          onChange={handleChange}
          placeholder="Search By Job Title, Role"
          className="border border-gray-300 rounded-md px-3 py-2 w-64"
        />
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="Preferred Location"
          className="border border-gray-300 rounded-md px-3 py-2 w-64"
        />
      </div>
      <div className="flex items-center space-x-2">
        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2"
        >
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
          <option>Internship</option>
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <label className="text-gray-700">Salary Per Month</label>
        <input
          type="range"
          name="salaryRange"
          min="0"
          max="100000"
          step="1000"
          value={filters.salaryRange[0]}
          onChange={handleSalaryChange}
          className="w-64"
        />
        <span className="text-gray-700">
          ₹{filters.salaryRange[0] / 1000}k - ₹{filters.salaryRange[1] / 1000}k
        </span>
      </div>
    </div>
  );
};

export default Filter;