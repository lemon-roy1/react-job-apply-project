const getStoresJobApplycation =()=>{
    const storesjobApplycation =localStorage.getItem('job-applycations')
    if(storesjobApplycation){
        return JSON.parse(storesjobApplycation)
    }
    return []
}
const savejobApplycation =id =>{
    const StoresJobApplycations = getStoresJobApplycation()
    const exists =StoresJobApplycations.find(jobId => jobId === id)
    if(!exists){
        StoresJobApplycations.push(id)
        localStorage.setItem('job-applycations', JSON.stringify(StoresJobApplycations))
    }
}
export{ getStoresJobApplycation, savejobApplycation}