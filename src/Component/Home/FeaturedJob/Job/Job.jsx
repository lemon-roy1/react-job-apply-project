/* eslint-disable react/prop-types */
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {

    const { id,logo, salary, job_title, company_name, remote_or_onsite, location, job_type } = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl mb-3">
            <figure><img className="w-[20rem] h-[15rem]" src={logo} alt="img"/></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{job_title}</h2>
                <p className="card-title text-2xl">{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4 text-2xl">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4 text-2xl">{job_type}</button>
                </div>
                <div className="mt-4 flex ">
                    <h2 className="flex mr-4"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{location}</h2>
                    <h2 className="flex"><AiOutlineDollarCircle className="text-2xl mr-2"></AiOutlineDollarCircle>{salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/jobs/${id}`}>
                        <button className="btn bg-gradient-to-r from-[#a4ade0] to-[#8b6ce0] text-[20px]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;