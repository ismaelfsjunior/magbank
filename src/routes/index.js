import { Route, Routes } from "react-router-dom";
import Home from "../componets/Home";
import Login from "../views/Login";

export default function Rotas() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={ <Login />} />
        </Routes>
    );
}