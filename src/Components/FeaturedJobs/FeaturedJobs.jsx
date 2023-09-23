import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="mb-10">
      <h2 className="text-center text-5xl font-bold">Featured Jobs</h2>
      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta magnam
        vitae asperiores!
      </p>
      <div className="grid md:grid-cols-2 gap-5 justify-center items-center my-10">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show All</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
