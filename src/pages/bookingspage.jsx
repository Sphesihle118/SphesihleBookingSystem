import {Navbar} from "../components/navbar.jsx";
import {Bookings} from "../components/bookings.jsx";


export const BookingsPage = () => {
    return (
        <div className="relative">

            <img
                src="/book.png"
                alt="sushi"
                className="w-full h-screen object-cover fixed"
            />


            <div className="absolute inset-x-0 top-0 z-10 m-0">
                <Navbar/>
                <Bookings/>
            </div>
        </div>
    )
}