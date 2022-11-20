import { Route, Routes } from "react-router-dom";
import Home from "../componets/Home";
import Login from "../views/Login";
import Dashboard from "../views/Dashboard";

export default function Rotas() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/dashboard" element={ <Dashboard />} />
        </Routes>
    );
}