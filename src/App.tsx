import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import logo from "./assets/images/Vector.svg"
import Main from "./pages/Main";
import Footer from "./comps/Footer";
import { useState } from "react";
import News from "./pages/News";
import Map from "./pages/Map"
import Info from "./comps/Info";
import Article from "./pages/Article";

export default function App() {
  const [blindMode, setBlindMode] = useState(false);
  const [isOnWaiting, setOnWaiting] = useState(true);
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  const testdata = {
    title: "Test Modal",
    image: "https://avatars.mds.yandex.net/i?id=3840ee8bc871c7712aa09cf7a1b0e29c_l-5858967-images-thumbs&n=27&h=480&w=480",
    phone: "+7 000 000 00 00",
    address: "ул. Пушкина, дом 3",
    workingHours: "Будни: 10:00-22:00",
    mail: "test@ex.ru",
    info: "<strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
  return (
    <div className="z-0 fixed">
        <Router>
        <Footer blindMode={blindMode} setBlindMode={(bool)=>setBlindMode(bool)}/>
        <Routes>
          <Route path="*" element={<Navigate to="/map" />} />
          <Route path="/map" element={<Map isBlindModeOn={blindMode} setInfoModalOpen={() => setInfoModalOpen(true)}/>} />
          <Route path="/news" element={<News />} />
          <Route path="/newsarticle" element={<Article />} />
        </Routes>
        <Main onWaiting={isOnWaiting} onClicked={() => setOnWaiting(false)}/>
        <img src={logo} alt="logo" className={`fixed origin-top-right left-0 right-0 mx-auto w-[657px] h-[647px] mt-[80px] delay-600 duration-800 transition ${!isOnWaiting && "translate-x-[671px] scale-[34%]"} z-2`} />
        {isInfoModalOpen && <Info data={testdata} 
          onClose={() => {
                setInfoModalOpen(false);}}/>}
      </Router>
    </div>
  )
}