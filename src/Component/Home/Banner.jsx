
import img from'../../assets/images/user.png'
const Banner = () => {
    return (
        <div className='flex mb-10 '>
            <div className="mt-[9rem]">
                <h1 className="text-8xl font-bold">One Step Closer To <span className='text-[#9873FF]'>Your Dream Job</span></h1>
                <p className='text-2xl m-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-gradient-to-r from-[#737db7] to-[#6e4ec5] text-[#fff] p-4 rounded-md mt-2'>Get Started</button>
            </div>
            <div>
                <img className='w-[950px] h-[650px]' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;