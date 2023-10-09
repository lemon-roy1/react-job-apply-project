/* eslint-disable react/prop-types */

import { AiOutlineDollarCircle } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';

const ApplyCard = ({ job }) => {

    // eslint-disable-next-line no-unused-vars
    const { logo, salary, job_title, company_name, remote_or_onsite, location, job_type } = job
    return (
        <div>
            
            <div className="card card-compact  bg-base-100 shadow-xl mb-3">
                <figure><img className="w-[20rem] h-[15rem]" src={job.logo} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{job.job_title}</h2>
                    <p className="card-title text-2xl">{job.company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4 text-2xl">{job.remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4 text-2xl">{job.job_type}</button>
                    </div>
                    <div className="mt-4 flex ">
                        <h2 className="flex mr-4"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{job.location}</h2>
                        <h2 className="flex"><AiOutlineDollarCircle className="text-2xl mr-2"></AiOutlineDollarCircle>{job.salary}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyCard;