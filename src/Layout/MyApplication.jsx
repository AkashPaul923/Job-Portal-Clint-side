import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
// import { useLoaderData } from "react-router-dom";

const MyApplication = () => {
    // const data = useLoaderData()
    const data = []
    const {email} = useParams()
    const [jobs, setJobs] = useState(data)

    const axiosSecure = useAxiosSecure()

    useEffect(()=>{
      // axios.get(`http://localhost:5000/job-applications/${email}`, {withCredentials: true})
      // .then(res => setJobs(res.data))

      axiosSecure.get(`/job-applications/${email}`)
      .then(res => setJobs(res.data))

    },[])

  return (
    <div className="overflow-x-auto max-w-7xl mx-auto my-24 min-h-[600px]">
        <p className="text-2xl font-bold text-center mb-7 ">Total Application: ({jobs.length}) </p>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Serial</th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            jobs.map((job,idx)=><tr>
            <th>{idx+1}</th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={job.company_logo}
                      alt="Company logo"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{job.company}</div>
                  <div className="text-sm opacity-50">{job.location}</div>
                </div>
              </div>
            </td>
            <td>{job.title}</td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">Delete</button>
            </th>
          </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyApplication;
