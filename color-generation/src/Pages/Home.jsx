import ColorComponent from "../Component/ColorComponent";
import NavBar from "../Component/NavBar";
function Home() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <NavBar />
            <main className="flex-1 flex justify-center px-4 py-6 sm:py-8">
                <ColorComponent />
            </main>
        </div>
    );
}

export default Home;
