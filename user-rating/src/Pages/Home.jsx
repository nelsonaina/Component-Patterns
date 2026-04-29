import Rating from "../Components/rating";
import NavBar from "../Components/NavBar";

function Home() {
    return (

        <>

        <NavBar />
        <div className="m-5 ">
        <Rating noOfStars={5} />
        </div>

        </>
    );
}

export default Home;