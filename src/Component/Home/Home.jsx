import Banner from "./Banner";
import CatagoryList from "./CatagoryList/CatagoryList";
import FeaturedJob from "./FeaturedJob/FeaturedJob";


const Home = () => {
    return (
        <div className="mt-2">
            <div className="bg-gradient-to-r from-[#ced0e0] to-[#beb8cd] p-3">
                <Banner />
            </div>
            <CatagoryList />
            <FeaturedJob />
        </div>
    );
};

export default Home;