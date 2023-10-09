/* eslint-disable react/prop-types */

const JobsCart = ({ categore }) => {
    // const [logo,category_name,availability]=categori
    return (
        <div>
            <div className="bg-gradient-to-r from-[#b4b9d7] to-[#bdb0e2] card shadow-xl mt-2 mb-3">
                <figure className="px-10 pt-10">
                    <img src={categore.logo} alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{categore.category_name}</h2>
                    <p>{categore.availability}</p>
                </div>
            </div>
        </div>
    );
};

export default JobsCart;
// (90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%);
