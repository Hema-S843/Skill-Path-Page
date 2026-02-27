import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Registration from "./Register/Registration.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Aptitute from "./Aptitute/Aptitute.jsx";
    import DataInterpretation from "./Aptitute/AptiFolders/date-Inter/DataInterpretation.jsx";
    import LogicalReasoning from "./Aptitute/AptiFolders/Logical/LogicalReasoning.jsx";
    import VerbalAbility from "./Aptitute/AptiFolders/Verbal/VerbalAbility.jsx";
    import Quantitative from "./Aptitute/AptiFolders/Quantitative/Quantitative.jsx";
    import NumberSeries from "./Aptitute/AptiFolders/NumberSeries/NumberSeries.jsx";    
import Login from "./Login/Login.jsx";
import English from "./English/English.jsx";
import Telugu from "./Telugu/Telugu.jsx";
import Cmtexam from "./CmtPage/Cmtexam.jsx";
import Matexam from "./MatPage/Matexam.jsx";
import CollegeDetails from "./CollegeDetails/CollegeDetails.jsx";
     import Music from "./CollegeDetails/Passions/Music/Music.jsx";
     import Design from "./CollegeDetails/Passions/Design/Design.jsx";


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
               <Route path="/quantitative" element={<Quantitative />} />
               <Route path="/logical-reasoning" element={<LogicalReasoning />} />
               <Route path="/verbal-ability" element={<VerbalAbility />} />
               <Route path="/data-interpretation" element={<DataInterpretation />} />
               <Route path="/number-series" element={<NumberSeries />}/>
       
        <Route path="/english" element={<English />}  />
        <Route path="/telugu" element={<Telugu />}  />
        <Route path="/cmtexam" element={<Cmtexam />} />
        <Route path="/matexam" element={<Matexam />} />
        <Route path="/college-details" element={<CollegeDetails />}  />
                <Route path="/passion/music" element={<Music />} />
                <Route path="/passion/design" element={<Design />} />
      </Routes>
    </>
  );
}

export default Routing;