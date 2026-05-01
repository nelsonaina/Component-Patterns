import ImageSlider from "./Components/ImageSlider"
import NavBar from "./Components/NavBar"

function App() {

  return (
    <>
    <NavBar />
    <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"} />
    </>
  )
}

export default App
