
import { FaBolt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
    const {_id,title,company,description,company_logo,location,requirements,jobType,salaryRange} = job
  return (
    <div className="card bg-base-100 shadow-lg p-4">
      <div className="flex items-center mb-4">
        <img
          src={company_logo}
          alt="Company Logo"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h3 className="font-semibold text-lg">{company}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        <FaBolt className="text-green-500 ml-auto" />
      </div>

      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="text-sm text-gray-500 flex items-center mb-4">
        <p className="mr-2">{jobType}</p>
      </div>

      <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>

      <div className="flex gap-2 mb-4 flex-wrap">
        {
            requirements.map((skill,idx) => <p key={idx} className="badge badge-outline">{skill}</p>)
        }
      </div>
      <p className="text-blue-500 font-bold text-lg">Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
      <Link to={`/jobsdetail/${_id}`} className="btn btn-outline hover:btn-primary btn-sm my-4">Apply Now</Link>
    </div>
  );
};

export default JobCard;
