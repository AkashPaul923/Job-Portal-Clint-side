import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetail = () => {
    const job = useLoaderData()
    const {_id,title,company,description,company_logo,location,requirements,jobType,salaryRange,category,hr_email,hr_name,applicationDeadline,responsibilities} = job
    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md">
      {/* Job Header */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={company_logo}
          alt={`${company} logo`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-500">{company} - {location}</p>
        </div>
      </div>

      {/* Job Information */}
      <div className="mb-6 border rounded-md p-4 bg-gray-50">
        <h2 className="text-lg font-semibold mb-4">Employment Information</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><strong>Category:</strong> {category}</div>
          <div><strong>Type:</strong> {jobType}</div>
          <div><strong>Salary:</strong> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</div>
          <div><strong>Application Deadline:</strong> {applicationDeadline}</div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Job Description</h2>
        <p className="text-gray-700">{description}</p>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-700">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Requirements</h2>
        <ul className="list-disc list-inside text-gray-700">
          {requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>

      {/* HR Contact */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">HR Contact</h2>
        <p className="text-gray-700"><strong>{hr_name}</strong></p>
        <p className="text-gray-500">{hr_email}</p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <button className="btn btn-primary">Apply Now</button>
        <button className="btn btn-secondary">Save Job</button>
      </div>
    </div>
)
};

export default JobDetail;