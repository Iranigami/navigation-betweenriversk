import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import logo from "./assets/images/Vector.svg"
import Main from "./pages/Main";
import Footer from "./comps/Footer";
import { useState } from "react";
import News from "./pages/News";

export default function App() {
  const [blindMode, setBlindMode] = useState(false);
  const [isOnWaiting, setOnWaiting] = useState(true);
  const [isSomeModalOpen, setModalOpen] = useState(false);
  return (
    <div className="z-0">
        <Router>
        <Footer blindMode={blindMode} setBlindMode={(bool)=>setBlindMode(bool)}/>
        <Routes>
          <Route path="*" element={<Navigate to="/map" />} />
          <Route path="/map" element={<></>} />
          <Route path="/news" element={<News />} />
          <Route path="/newsarticle" element={<></>} />
        </Routes>
      </Router>
      <Main onWaiting={isOnWaiting} onClicked={() => setOnWaiting(false)}/>
      <img src={logo} alt="logo" className={`fixed origin-top-right left-0 right-0 mx-auto w-[657px] h-[647px] mt-[80px] delay-600 duration-800 transition ${!isOnWaiting && "translate-x-[671px] scale-[34%]"} ${isSomeModalOpen ? "z-0" : "z-2"}`} />

    </div>
  )
}