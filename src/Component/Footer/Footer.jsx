import img from '../../assets/icons/social.png'

const Footer = () => {
    return (
        <footer className=" p-10 bg-[#1A1919] h-[25rem]">

            <div className="footer max-w-7xl mx-auto text-[#FFF]">
                <nav>
                    <header className="footer-title text-4xl">Career Hub</header>
                    <p className='text-xl'>There are many variations of passages <br />
                        of Lorem Ipsum , but the majority have <br />
                        suffered alteration in some form.</p>
                    <div className="grid grid-flow-col gap-4">

                        <img src={img} alt="" />
                       
                    </div>
                </nav>

                <nav>
                    <header className="footer-title text-2xl">Company</header>
                    <a className="link link-hover text-xl">About Us</a>
                    <a className="link link-hover text-xl">Work</a>
                    <a className="link link-hover text-xl">Latest News</a>
                    <a className="link link-hover text-xl">Careers</a>
                </nav>

                <nav>
                    <header className="footer-title text-2xl">Product</header>
                    <a className="link link-hover text-xl">Prototype</a>
                    <a className="link link-hover text-xl">Plans & Pricing</a>
                    <a className="link link-hover text-xl">Customers</a>
                    <a className="link link-hover text-xl">Integrations</a>
                </nav>

                <nav>
                    <header className="footer-title text-2xl">Support</header>
                    <a className="link link-hover text-xl">Help DeskSales</a>
                    <a className="link link-hover text-xl">Become a Partner</a>
                    <a className="link link-hover text-xl">Developers</a>
                </nav>
                <nav>
                    <header className="footer-title text-2xl">Contact</header>
                    <a className="link link-hover text-xl">524 Broadway, NYC </a>
                    <a className="link link-hover text-xl">+1 777 - 978 - 5570</a>
                </nav>
            </div>
            <hr className=" footer-title mt-[5rem]" />

            <div className='flex justify-around mt-8 text-[#5d5a5a]'>
                <h2 className='font-semibold text-[14px]'>@2023 CareerHub. All Rights Reserved</h2>
                <h2 className='font-semibold text-[14px]'>Powered by CareerHub</h2>
            </div>

        </footer>
    );
};

export default Footer;