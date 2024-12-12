import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobCard from "../Components/JobCard";


const AllJobs = () => {
    const data = useLoaderData()
    const [jobs , setJobs] = useState(data)

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default AllJobs;