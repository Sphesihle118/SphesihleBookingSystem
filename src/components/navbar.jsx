import {useState} from "react";
import {NavLink} from "react-router-dom";


export const Navbar = () => {

        const [open, setOpen] = useState(false);

        return (
            <header className="w-full top-0 left-0 z-50 gotu-regular">
                <div className="flex items-center justify-between bg-black/65 backdrop-blur-md px-4 py-5 sm:px-8 md:px-16 lg:px-24 xl:px-17 mt-4 mx-auto max-w-[800px] rounded-3xl">

                    <NavLink to="/"><span className="Sekaiwo-Regular text-2xl sm:text-3xl md:text-[320%] cursor-pointer">
                        SmokeRise
                    </span></NavLink>

                    <nav className="hidden sm:flex items-center gap-6 md:gap-10 text-base md:text-lg">
                        <span className="cursor-pointer hover:text-neutral-300 transition">ABOUT</span>

                        <NavLink to="/bookings" ><button className="border p-2 px-4 rounded-xl bg-neutral-800/80
                             hover:bg-neutral-700/70 cursor-pointer transition duration-300">
                            BOOK A TABLE
                        </button></NavLink>
                    </nav>


                    <div
                        className="sm:hidden text-3xl cursor-pointer select-none"
                        onClick={() => setOpen(true)}
                    >
                        ☰
                    </div>
                </div>


                {open && (
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                        onClick={() => setOpen(false)}
                    />
                )}


                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-md text-white
                    z-50 p-6 pt-24 transform transition-transform duration-300
                    ${open ? "translate-x-0" : "translate-x-full"}`}
                >
                    <button
                        className="absolute top-6 right-6 text-2xl cursor-pointer"
                        onClick={() => setOpen(false)}
                    >
                        ✕
                    </button>

                    <div className="flex flex-col gap-6 text-lg">
                        <span className="cursor-pointer hover:text-neutral-300 transition">ABOUT</span>

                        <button className="border p-2 px-4 rounded-xl bg-neutral-800/80
                             hover:bg-neutral-700/70 cursor-pointer transition duration-300">
                            BOOK A TABLE
                        </button>
                    </div>
                </div>
            </header>
)
}