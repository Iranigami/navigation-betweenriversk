
import pickIcon from "../assets/icons/pick.svg"
import { useState } from "react";

type Props = {
    onWaiting: boolean;
    onClicked: () => void;
}


export default function Main({onWaiting, onClicked}: Props){
    const[keepOpen, setKeepOpen] = useState(true);
    return(
        <div hidden={!keepOpen} className="fixed z-2 top-0 w-[2160px] h-[3840px]">
            <div className={`absolute w-full h-full bg-white z-[-1] duration-700 transition ${!onWaiting && "translate-y-[-4200px] opacity-0 scale-[150%]"}`}>
                <img src="https://img.geliophoto.com/mzhdr/00_mzhdr.jpg" alt="img" className="object-cover w-full h-full" />
            </div>
            <button 
                onClick={()=>{
                    onClicked();
                    setTimeout(()=>setKeepOpen(false), 1500)
                }}
                className={`absolute left-0 right-0 mx-auto bottom-[248px] flex gap-[24px] w-[1664px] h-[216px] rounded-[108px] bg-[#71BF45CC] active:bg-[#1E7B4CCC] justify-center items-center duration-700 transition ${!onWaiting && "opacity-0"}`}>
                    <img src={pickIcon} alt="click" className="size-[120px]" />
                    <div className="text-white text-[48px] font-semibold leading-[100%]">
                        Нажмите, чтобы начать
                    </div>
            </button>

        </div>
    )
}