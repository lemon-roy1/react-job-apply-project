import { useEffect, useState } from "react";
import Job from "./Job/Job";


const FeaturedJob = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('/public/data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className="text-center mt-[3rem]">
            <h2 className="text-5xl font-medium">Featured Jobs</h2>
            <p className="text-2xl m-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-6 mt-[2rem]">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job} />)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button
                    className="btn bg-gradient-to-r from-[#6c78c2] to-[#6a4cbd] p-3 mt-5 mb-2 text-1xl border" onClick={() => setDataLength(jobs.length)}>shows all jobs
                </button>
            </div>
        </div>
    );
};

export default FeaturedJob;