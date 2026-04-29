import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Rating({ noOfStars }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleMouseClick(getCurrentIndex) {
        setRating(getCurrentIndex);
        // console.log(getCurrentIndex);
    }
    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
    }
    function handleMouseLeave() {
        setHover(rating);
    }

    return (
        <>
            <div className="grid gap-1 items-center justify-center border-0 shadow-lg max-w-xl m-auto">
                <div className="flex items-center justify-center text-2xl my-2 font-bold">
                    Rate my Website?
                </div>
                <div className="flex items-center justify-center my-2">
                    {[...Array(noOfStars)].map((_, index) => {
                        index += 1;

                        return (
                            <FaStar
                                key={index}
                                className={
                                    index <= (rating || hover)
                                        ? "text-yellow-300"
                                        : "text-black"
                                }
                                onClick={() => handleMouseClick(index)}
                                onMouseMove={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave()}
                                size={40}
                            />
                        );
                    })}
                </div>
                <div className="flex items-center justify-center my-2 ">
                    <p className="px-2.5 border-2 shadow-lg">{`${rating} stars`}</p>
                </div>
                <div className="items-center justify-center flex ">
                    <a href="">
                        <button className="px-3.5 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-md shadow-sm hover:bg-blue-700 transition">
                            Submit
                        </button>
                    </a>
                </div>
                <div className="flex items-center justify-center ">
                    <p className="text-xs items-center p-2 text-center">
                        This rating gives us feedback in order to improve our
                        services feel free to email us if you have any issues
                    </p>
                </div>
            </div>
        </>
    );
}
