import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Users from "./pages/usuarios";
import Login2 from "./pages/login-2";


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login2 />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    
    </>
  )
}

export default App;