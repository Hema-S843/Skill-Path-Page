import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Registration from "./Register/Registration.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx"
import Aptitute from "./Aptitute/Aptitute.jsx"
import Login from "./Login/Login.jsx"
function Routing() 
{
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/dashboard" element={< Dashboard />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/aptitute" element={<Aptitute />} />
    </Routes>
  );
}

export default Routing;