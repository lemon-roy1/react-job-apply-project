import { useLoaderData, useParams } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle, AiOutlineProfile, AiOutlineMail } from "react-icons/ai";
import { PiPhoneCallBold } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import { savejobApplycation } from "../../../../../Utilite/LocalStoredApplytion";



const JobDetail = () => {

    const jobs = useLoaderData()
    const { id } = useParams()
    const IdInt = parseInt(id)
    const job = jobs.find(job => job.id === IdInt)

    const heandleApplyJob=()=>{
        savejobApplycation(IdInt)
        toast('you have Applyed successfully')
    }

    return (
        <div className="grid gap-4 md:grid-cols-4 mt-4 mb-3 h-full">
            <div className=" md:col-span-3 p-4 shadow-lg">
                <h2 className="text-2xl m-5"><span className="font-medium">Job Description:</span>{job.job_description} </h2>
                <h2 className="text-2xl m-3"><span className="font-medium">Job Responsibility:</span>{job.job_responsibility} </h2>
                <p className="font-medium m-3 text-2xl">Educational Requirements:</p>
                <span className="ml-5">{job.educational_requirements}</span>
                <p className="font-medium m-3 text-2xl">Experiences:</p>
                <span className="ml-5">{job.experiences}</span>
            </div>
            <div className=" mb-3 h-full rounded-lg bg-gradient-to-r from-[#a6afe5] to-[#8a73cb] shadow-xl">
                <div className="mt-4 p-3">
                    <h2 className="text-2xl font-medium ">Job Details</h2>
                    <hr className="m-5 text-[#9873FF] " />
                    <div className="mt-4 ">
                        <h2 className="flex m-4 font-medium"><AiOutlineDollarCircle className="text-[#fff] mr-2 text-2xl"></AiOutlineDollarCircle>salary : {job.salary}(Per Month)</h2>
                        <h2 className="flex m-4 font-medium "><AiOutlineProfile className="text-[#fff] mr-2 text-2xl"></AiOutlineProfile> location : {job.location}</h2>
                        <hr className="m-5 text-[#9873FF]" />
                        <h2 className="flex m-4 font-medium"><PiPhoneCallBold className="text-[#fff] mr-2 text-2xl"></PiPhoneCallBold> phone : {job.contact_information.phone} </h2>
                        <h2 className="flex m-4 font-medium"> <AiOutlineMail className=" text-[#fff] text-2xl mr-2"></AiOutlineMail> Email : {job.contact_information.email}</h2>
                        <h2 className="flex m-4 font-medium"><MdLocationOn className=" text-[#fff] text-2xl mr-2 mb-2"></MdLocationOn>location : {job.contact_information.address} </h2>
                    </div>
                        <button onClick={()=>heandleApplyJob()} className="btn bg-gradient-to-r from-[#6c7ce2] to-[#6239d1] text-[#fff] w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer position="top-center"/>
        </div>

    );
};

export default JobDetail;