import logo from "../images/logo.png";

export default function Header() {
    return (
        <div className="container pt-8 pb-8 text-center lg:text-left lg:flex lg:flex-wrap lg:items-center lg:justify-between ">
        <img className="block mr-auto mb-4 lg:mb-0 ml-auto lg:ml-0 max-w-full" src={logo} alt="Logo" />
        <ul>
            <li className="block md:inline-block md:mr-6 md:ml-6">Trending</li>
            <li className="block md:inline-block md:mr-6 md:ml-6">Resources</li>
            <li className="block md:inline-block md:mr-6 md:ml-6">Nearby</li>
            <li className="block md:inline-block md:mr-6 md:ml-6">Hackathons</li>
            <li className="block md:inline-block md:mr-6 md:ml-6">FAQ</li>
            <li className="block lg:inline-block w-40 mt-4 lg:mt-0 lg:ml-6 ml-auto mr-auto lg:mr-0 py-4 bg-[#fd6d61] text-white text-basic text-center rounded-[10px] shadow transition-all">Download App</li>
        </ul>
        </div>
    )
}
