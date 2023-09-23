import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";
// import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  console.log(appliedJobs);
  const jobs = useLoaderData();

  const handleJobsFilter = filter => {
    if(filter === 'all'){
        setDisplayJobs(appliedJobs);
    }else if(filter === 'remote'){
        const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
        setDisplayJobs(remoteJobs);
    }else if(filter === 'onsite'){
        const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
        setDisplayJobs(onsiteJobs);
    }
  }

  useEffect(() => {
    const storedJobApplication = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) =>
        storedJobApplication.includes(job.id)
      );
      // console.log(jobs, storedJobApplication,jobsApplied);
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied)
    }
  }, [jobs]);
  return (
    <div>
      <h2 className="text-4xl py-5">
        The job i have applied:{appliedJobs.length}{" "}
      </h2>
      <details className="dropdown mb-32">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter('all')}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <div>
        {displayJobs.map((job) => (
          <div key={job.id}>
            <div className="grid grid-cols-4 gap-4 border-2 items-center border-gray-400 rounded-md p-5 my-4">
              <div className="col-span-1">
                <img className="w-full" src={job.logo} alt="" />
              </div>
              <div className="col-span-3 pl-10 space-y-3">
                <h2 className="text-2xl font-bold">{job.job_title}</h2>
                <p>
                  <span className="font-bold">Company Name: </span>
                  {job.company_name}
                </p>
                <div>
                  <button className="btn border-gray-500 mr-4">
                    {job.remote_or_onsite}
                  </button>
                  <button className="btn border-gray-500">
                    {job.job_type}
                  </button>
                </div>
                <h3>
                  <span className="font-bold">Salary: </span>
                  {job.salary} (Per Month)
                </h3>
                <h2 className="text-1xl">{job.location}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div>
                {
                    appliedJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div> */}
    </div>
  );
};

export default AppliedJobs;
