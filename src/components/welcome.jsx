import { useState, useEffect } from "react";

export const Welcome = () => {
    const text = "WELCOME TO A HEAVENLY EXPERIENCE";
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let i = 0;

        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i));
            i++;

            if (i > text.length) clearInterval(interval);
        }, 120);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-[200%] sm:text-[300%] md:text-[400%] lg:text-[700%] gotu-bold text-center pt-30 text-shadow-black/40 text-shadow-xs">
            {displayed}
            <span className="animate-pulse">|</span>
        </div>
    );
}
