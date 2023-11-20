import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Users from "./pages/usuarios";


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    
    </>
  )
}

export default App;