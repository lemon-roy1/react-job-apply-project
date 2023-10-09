import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center mt-56">
           <h1 className='text-[#001831] text-center'> Oopps !!!! </h1>
           <button className="btn btn-secondary p-2 ">
            <Link to='/'>back page</Link>
           </button>
        </div>
    );
};

export default ErrorPage;