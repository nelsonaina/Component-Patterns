import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";



export default function ImageSlider({ url, limit, page }) {
    const [image, setImage] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages({ getUrl }) {
        try {
            setLoading(true);
            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImage(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    function handleNext() {
        setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1 )
    }
    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1  )
    }

    useEffect(() => {
        if (url !== "") {
            fetchImages(url);
        }
    }, [url]);

    if (loading) {
        return <div>Loading your images please wait!!</div>;
    }

    if (errorMsg !== null) {
        return <div>An Error Occured {errorMsg}</div>;
    }

    return (
        <>
            <div className="m-15 bg-orange-300 border-3 ">
                <div className="flex justify-center items-center relative rounded-xl">
                    <BsArrowLeftCircleFill
                        onClick={handlePrevious}
                        className="absolute left-1 text-white cursor-pointer"
                    />
                    {image && image.length
                        ? image.map((imageItem, index) => (
                              <img
                                  key={imageItem.id}
                                  alt={imageItem.author}
                                  src={imageItem.download_url}
                                  className={currentSlide === index ? `w-auto h-auto` : `hidden`}
                              />
                          ))
                        : null}

                    <BsArrowRightCircleFill
                        onClick={handleNext}
                        className="absolute right-1 text-white cursor-pointer"
                    />

                    <span className="flex absolute bottom-1">
                        {image && image.length
                            ? image.map((_, index) => (
                                  <button
                                      key={index}
                                      className={currentSlide === index ? `h-2 w-2 border-0 rounded-4xl outline-0 m-0.5 cursor-pointer bg-white` : 'h-2 w-2 border-0 rounded-4xl outline-0 m-0.5 cursor-pointer bg-gray-400'}
                                      onClick={() => setCurrentSlide(index)}
                                  ></button>
                              ))
                            : null}
                    </span>
                </div>
            </div>
        </>
    );
}
