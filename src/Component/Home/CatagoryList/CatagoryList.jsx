import { useEffect, useState } from "react";
import JobsCart from "../../Jobs/JobsCart/JobsCart";

const CatagoryList = () => {

    const [categories,setCategories]=useState([])

    useEffect(()=>{
        fetch('../../../../public/data/categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    return (
        <div className="text-center">
            <h2 className=" text-5xl font-medium m-3">job catagory list</h2>
            <p className="text-2xl">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
                {
                    categories.map(categore =><JobsCart key={categore.id} categore={categore}></JobsCart>)
                }
            </div>
        
        </div>
    );
};

export default CatagoryList;

{/* <img src={categories.logo} alt="" />
                <h2>name : {categories.category_name} {categories.length}</h2>
                 <h2> price :{categories.availability}</h2> */}