import logo from "../assets/images/Vector.svg"
import pick from "../assets/icons/pick.svg"
import { useState } from "react";

type Props = {
    onWaiting: boolean;
    onClicked: () => void;
}


export default function Main({onWaiting, onClicked}: Props){
    const[keepOpen, setKeepOpen] = useState(true);
    return(
        <div hidden={!keepOpen} className="fixed z-11 w-[2160px] h-[3840px]">
            <div className={`absolute w-full h-full bg-white z-[-1] duration-600 transition ${!onWaiting && "translate-y-[-4200px] opacity-0 scale-[120%]"}`}>

            </div>
            <img src={logo} alt="logo" className={`origin-top-right mx-auto w-[657px] h-[647px] mt-[80px] delay-300 duration-800 transition ${!onWaiting && "translate-x-[671px] scale-[34%]"}`} />

            <button 
                onClick={()=>{
                    onClicked();
                    setTimeout(()=>setKeepOpen(false), 1000)
                }}
                className="absolute left-0 right-0 mx-auto bottom-[248px] flex gap-[24px] w-[1664px] h-[216px] rounded-[108px] bg-[#71BF45CC] active:bg-[#1E7B4CCC]">

            </button>

        </div>
    )
}