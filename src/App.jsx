import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route index element />
      </Routes>
    
    </>
  )
}

export default App;