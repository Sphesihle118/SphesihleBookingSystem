import {House} from "lucide-react";
import {NavLink} from "react-router-dom";


export const SuccessPage = () => {
    return (
        <div>
            <div className="Sekaiwo-Regular text-black text-center text-[80px] md:text-[100px] lg:text-[150px]">
                We can't wait to see you here!!! ;)
            </div>

            <NavLink to="/">
                <div className="flex justify-center mt-8">
                    <div className="flex items-center gap-3 border border-black px-6 py-3 rounded-full text-black cursor-pointer transition-all duration-300 hover:bg-black hover:text-white">
                        <House />
                        <span>Back to home</span>
                    </div>
                </div>

            </NavLink>
        </div>


    )
}