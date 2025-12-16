import {Navbar} from "../components/navbar.jsx";
import {Welcome} from "../components/welcome.jsx";

export const HomePage = () => {
    return (
        <div className="relative">
            <img
                src="/sushisensation.png"
                alt="sushi"
                className="w-full h-screen object-cover "
            />

            <div className="absolute inset-x-0 top-0 z-10 m-0">
                <Navbar />
                <Welcome />
            </div>
        </div>
    );
};
