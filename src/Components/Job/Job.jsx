import { FaLocationDot } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Job = ({ job }) => {
//   console.log(job);
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
  } = job;
  return (
    <div className="border-2 border-gray-400 rounded-md p-10 space-y-3">
      <img src={logo} alt="" />
      <h3 className="font-bold text-2xl">{job_title}</h3>
      <h4 className="text-gray-500 font-medium text-1xl">{company_name}</h4>
      <div className="flex gap-5">
        <button className="py-2 px-4 border-2 border-gray-400 rounded-md text-blue-500 font-bold text-1xl ">
          {remote_or_onsite}
        </button>
        <button className="py-2 px-4 border-2 border-gray-400 rounded-md text-blue-500 font-bold text-1xl ">
          {job_type}
        </button>
      </div>
      <div className="flex gap-5">
        <div className="flex gap-2 items-center">
          <FaLocationDot></FaLocationDot>
          <p>{location}</p>
        </div>
        <div className="flex gap-2 items-center">
          <BsCurrencyDollar></BsCurrencyDollar>
          <p>Salary: {salary}</p>
        </div>
      </div>
      <NavLink to={`/job/${id}`}>
        <button className="text-white font-medium bg-blue-400 py-2 px-4 rounded-md">
          View details
        </button>
      </NavLink>
    </div>
  );
};

export default Job;
