import { Routes, Route } from "react-router-dom"

import LayOut from "./components/LayOut"
import Home from "./pages/Home"
import Animes from "./pages/Animes"
import Search from "./pages/Search"

import './App.css'
import Series from "./pages/Series"
import Movies from "./pages/Movies"

function App() {

  return (

    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="/animes" element={<Animes />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/:search" element={<Search />} />
        </Route>
        <Route path="/*" element={<span>Não existe</span>} />
      </Routes>

    </>
  )


}


export default App