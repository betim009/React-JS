import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Users from "./pages/usuarios";
import Cadastro from "./pages/cadastro";
import Home from "./pages/home";
import Layout from "./components/layout";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login_old" element={<Login />} />
        </Route>
      </Routes>

    </>
  )
}

export default App;