import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Footer from "./comps/Footer";
import { useState } from "react";

export default function App() {
  const [blindMode, setBlindMode] = useState(false);
  const [isOnWaiting, setOnWaiting] = useState(true);
  return (
    <>
        <Router>
        <Footer blindMode={blindMode} setBlindMode={(bool)=>setBlindMode(bool)}/>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/map" element={<></>} />
          <Route path="/news" element={<></>} />
        </Routes>
      </Router>
      <Main onWaiting={isOnWaiting} onClicked={() => setOnWaiting(false)}/>
    </>
  )
}