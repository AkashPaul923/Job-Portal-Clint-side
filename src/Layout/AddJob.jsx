import { Form } from "react-router-dom";
import Swal from "sweetalert2";


const AddJob = () => {
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const initialData = Object.fromEntries(formData.entries())
    // console.log(initialData);
    const {min, max, currency, ...remaining} = initialData
    // console.log(remaining);
    remaining.salaryRange = {min,max,currency}
    remaining.requirements = remaining.requirements.split(',')
    remaining.responsibilities = remaining.responsibilities.split(',')

    fetch('http://localhost:5000/jobs',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(remaining)
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: "Success",
            text: "Add Job successfully",
            icon: "success"
          });
        }
      })
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Add Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input input-bordered w-full"
        />
        <select
          name="jobType"
          className="select select-bordered w-full"
        >
          <option value="">Job Type</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Remote">Remote</option>
        </select>
        <select
          name="Category"
          className="select select-bordered w-full"
        >
          <option value="">Category</option>
          <option value="Engineer">Engineer</option>
          <option value="Teaching">Teaching</option>
        </select>
        <input
          type="date"
          name="applicationDeadline"
          className="input input-bordered w-full"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="number"
            name="min"
            placeholder="Min Salary"
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="max"
            placeholder="Max Salary"
            className="input input-bordered w-full"
          />
          <select
          name="currency"
          className="select select-bordered w-full"
        >
          <option value="">Currency</option>
          <option value="BDT">BDT</option>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          </select>
        </div>
        
        <textarea
          name="description"
          placeholder="Job Description"
          className="textarea textarea-bordered w-full"
        ></textarea>
        <input
          type="text"
          name="requirements"
          placeholder="Requirements (comma-separated)"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="responsibilities"
          placeholder="Responsibilities (comma-separated)"
          className="input input-bordered w-full"
        />
        <select
          name="status"
          className="select select-bordered w-full"
        >
          <option value="">Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <input
          type="email"
          name="hrEmail"
          placeholder="HR Email"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="hrName"
          placeholder="HR Name"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="companyLogo"
          placeholder="Company Logo URL"
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary w-full">
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
