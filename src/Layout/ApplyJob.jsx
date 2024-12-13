import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const ApplyJob = () => {
  const {id} = useParams()
  const {user} = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const linkedin = form.linkedin.value
    const resume = form.resume.value
    const github = form.github.value
    // console.log({linkedin,resume,github});

    const jobApplication = {
      job_id : id,
      applicant_email: user.email,
      linkedin,
      resume,
      github,
    }

    fetch('http://localhost:5000/job-applications',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(jobApplication)
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: "Success",
          text: "Your application successfully submitted",
          icon: "success"
        });
      }
    })
  };

  return (
    <div className="p-8 max-w-lg mx-auto my-28 bg-base-300 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Apply for the Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* LinkedIn URL */}
        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
            LinkedIn Profile URL
          </label>
          <input
            type="url"
            name="linkedin"
            placeholder="https://linkedin.com/in/your-profile"
            className="input input-bordered w-full mt-2 "
            required
          />
        </div>

        {/* Resume URL */}
        <div>
          <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
            Resume URL
          </label>
          <input
            type="url"
            name="resume"
            placeholder="https://your-resume-link.com"
            className="input input-bordered w-full mt-2"
            required
          />
        </div>

        {/* GitHub URL */}
        <div>
          <label htmlFor="github" className="block text-sm font-medium text-gray-700">
            GitHub Profile URL
          </label>
          <input
            type="url"
            name="github"
            placeholder="https://github.com/your-username"
            className="input input-bordered w-full mt-2 mb-4"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full ">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyJob;
