import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Carousel from "./components/Carousel"
import Banner from "./components/Banner"
import Footer from "./components/Footer"


function App() {

  return (
    <>
      <NavBar />
      <Carousel />
      <Banner />
      <ItemListContainer mensaje={"No se encontraron productos"}/>
      <Footer/>
      </>
  )
}

export default App
