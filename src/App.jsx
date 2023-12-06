import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Animes from "./pages/Animes"
import LayOut from "./components/LayOut"

function App() {

  return (

    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />}></Route>
          <Route path="/animes" element={<Animes />} />
        </Route>
        <Route path="/*" element={<span>Não existe</span>}/>
      </Routes>

    </>
  )


}


export default App