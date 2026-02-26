import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Registration from "./Register/Registration.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Aptitute from "./Aptitute/Aptitute.jsx";
import Login from "./Login/Login.jsx";
import English from "./English/English.jsx";
import Telugu from "./Telugu/Telugu.jsx";
import Cmtexam from "./CmtPage/Cmtexam.jsx";
import Matexam from "./MatPage/Matexam.jsx";
import CollegeDetails from "./CollegeDetails/CollegeDetails.jsx";


function Routing() 
{
  return (
    <>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={< Dashboard />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/aptitute" element={<Aptitute />} />
        <Route path="/english" element={<English />}  />
        <Route path="/telugu" element={<Telugu />}  />
        <Route path="/cmtexam" element={<Cmtexam />} />
        <Route path="/tteexam" element={<Cmtexam />} />
        <Route path="/matexam" element={<Matexam />} />
        <Route path="/college-details" element={<CollegeDetails />}  />
      </Routes>
    </>
  );
}

export default Routing;