import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));
  console.log(job);
  const {
    job_title,
    contact_information,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
  } = job;


  const handleApplyJob = () => {
    saveJobApplication(parseInt(id));
    toast('You have Applied successfully')
  }


  return (
    <div>
      <h2 className="h-48 flex justify-center items-center text-4xl font-bold ">
        Job Details
      </h2>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="col-span-3 space-y-4">
          <h2 className="font-medium">
            <span className="text-2xl font-bold">Job Description:</span>{" "}
            {job_description}
          </h2>
          <h2 className="font-medium">
            <span className="text-2xl font-bold">Job Responsibility:</span>{" "}
            {job_responsibility}
          </h2>
          <h2 className="font-medium">
            <span className="text-2xl font-bold">
              Educational Requirements:
            </span>{" "}
            {educational_requirements}{" "}
          </h2>
          <h2 className="font-medium">
            <span className="text-2xl font-bold">experiences:</span>{" "}
            {experiences}{" "}
          </h2>
        </div>
        <div className="bg-gray-200 p-5 rounded">
          <h2 className="text-2xl font-bold border-b border-gray-600 pb-3">
            Job Details
          </h2>
          <div className="text-1xl font-semibold text-gray-500">
            <p>
              {" "}
              <span className="text-gray-500 text-[1.25rem] font-bold">
                Salary:
              </span>{" "}
              {salary} (Per Month)
            </p>
            <p>
              {" "}
              <span className="text-gray-500 text-[1.25rem] font-bold">Job Title:</span> {job_title}{" "}
            </p>
          </div>
          <h2 className="text-2xl font-bold border-b border-gray-600 pb-3">
            Contact Information
          </h2>
          <div className="text-1xl font-bold text-gray-500">
            <p>
              {" "}
              <span className="text-gray-500 text-[1.25rem] font-bold">Phone:</span> {contact_information.phone}
            </p>
            <p>
              {" "}
              <span className="text-gray-500 text-[1.25rem] font-bold">Email:</span> {contact_information.email}{" "}
            </p>
            <p>
              {" "}
              <span className="text-gray-500 text-[1.25rem] font-bold">Address:</span> {contact_information.address}{" "}
            </p>
          </div>
          <div>
            {/* <Link> */}
            <button onClick={handleApplyJob} className="w-full py-2 mt-3 text-[1.25rem] font-bold text-white rounded bg-sky-500">Apply Now</button>
            {/* </Link> */}
          </div>
        </div>
      </div>
      <div className="text-center mb-10">
        <Link to={"/"}>
          <button  className="btn btn-primary">Go Back</button>
        </Link>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default JobDetails;
