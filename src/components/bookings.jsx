import react, {useState} from "react"
import {generateTimeSlots} from "./functions/timeslots.jsx";
import { Diamond} from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast"
import {useNavigate} from "react-router-dom";


export const Bookings = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState("");
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");
    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();

        console.log("Form submitted with:", {firstName, lastName, phone, email, guests, date, time});

        try {
            const {data} = await axios.post(
                "http://localhost:4000/api/v1/reservation/send",
                {firstName, lastName, phone, email, guests, date, time},
                {
                    headers:{
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                }
            );
            console.log("Success:", data);
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setPhone("");
            setEmail("");
            setGuests("");
            setDate("");
            setTime("");
            navigate("/success");
        } catch (error) {
            console.error("Error:", error);
            toast.error(error.response?.data?.message || "Something went wrong!");
        }
    };

    return (
        <div className="pt-9 gotu-regular">
            <form onSubmit={handleReservation} className="flex flex-col items-center text-center justify-between bg-black/65 backdrop-blur-md px-4 py-5 sm:px-8 md:px-16 lg:px-24 xl:px-17 mt-4 mx-auto max-w-[430px] md:max-w-[680px] lg:max-w-[800px] rounded-3xl ">
                <div className="text-center flex flex-col items-center gap-3">
                    <h1 className="flex gap-5 items-center text-[170%] md:text-[200%] lg:text-[260%] gotu-bold"><Diamond className="size-3"/> Reservations <Diamond className="size-3"/></h1>
                    <p>Secure your spot at SmokeRise, where heaven is a remarkable taste away.</p>
                </div>

                <div className="flex flex-col mt-8 items-center gap-4">
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="fillsection"
                        placeholder="First Name"
                        required/>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="fillsection"
                        placeholder="Last Name"
                        required/>
                    <input
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="fillsection"
                        placeholder="Phone Number"
                        required/>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="fillsection"
                        placeholder="Email"
                        required/>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:w-xl">
                        <input
                            type="number"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="fillsection2"
                            placeholder="Guests"
                            required/>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="fillsection2"
                            placeholder="Date"
                            required/>

                        <select
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="fillsection2 "
                            required>
                            <option className="bg-black" value="">
                                Select Time
                            </option>
                            {generateTimeSlots().map((slot, index) => (
                                <option className="bg-black" key={index} value={slot}>{slot}</option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="border-1 p-3 rounded-md mt-4 hover:bg-[#ece5cf] hover:text-black active:p-2">Reserve</button>
                </div>
            </form>
        </div>
    )
}