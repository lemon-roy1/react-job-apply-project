import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoresJobApplycation } from "../../Utilite/LocalStoredApplytion";
import ApplyCard from "./Card/ApplyCard";



const AppliedJob = () => {

    const [AppliedJobs, setAppledJobs] = useState([])
    const [displayJobs,setDisplayJobs]=useState([])

    const hendleDisplayData =filter=>{
        if(filter === 'all'){
            setDisplayJobs(AppliedJobs)
        }
        else if(filter === 'remote'){
            const remoteJobs =AppliedJobs.filter(job=>job.remote_or_onsite==='Remote')
            setDisplayJobs(remoteJobs)
        }
        else if(filter === 'onsite'){
            const onsiteJobs =AppliedJobs.filter(job=>job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }

    const jobs = useLoaderData();


    useEffect(() => {
        const storedJobIds = getStoresJobApplycation()
        if (jobs.length > 0) {
            // const jobsApplied =jobs.filter(job=>storedJobIds.includes(job.id))
            const jobsApplyed = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplyed.push(job)
                }
            }
            setAppledJobs(jobsApplyed)
            setDisplayJobs(jobsApplyed)

        }

        
    }, [jobs])

    return (
        <div>

            <div>
                <details className="dropdown mb-32 text-end">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>hendleDisplayData('all')}><a>all</a></li>
                        <li onClick={()=>hendleDisplayData('remote')}><a>Remote</a></li>
                        <li onClick={()=>hendleDisplayData('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            {
                displayJobs.map(job => <ApplyCard key={job.id} job={job}></ApplyCard>)
            }
        </div>

    );
};

export default AppliedJob;