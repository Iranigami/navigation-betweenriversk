import searchIcon from "../assets/icons/search.svg"
import filterIcon from "../assets/icons/filter.svg"
import arrIcon from "../assets/icons/arrow.svg"
import activeMapIcon from "../assets/icons/greenMap.svg"
import mapIcon from "../assets/icons/map.svg"
import glassesIcon from "../assets/icons/glasses.svg"
import { useState, type ChangeEvent } from "react"
import { useNavigate } from "react-router-dom";
import Keyboard from "./Keyboard"

type Props = {
    setBlindMode: (bool: boolean) => void;
    blindMode: boolean;
    onFilterClick: () => void;
    filters: number;
}


export default function Footer({setBlindMode, blindMode, onFilterClick, filters}: Props){
    const mapVars = ["Междуреченск", "Мегалиты горной шории", "Поднебесные зубья"];
    const [currMap, setCurrMap] = useState(mapVars[0]);
    const [text, setText] = useState("");
    const [isKeyboardOpen, setKeyboardOpen] = useState(false);
    const [isFooterOpen, setFooterOpen] = useState(true);
    const [isMapsSelectionOpen, setMapsSelectionOpen] = useState(false);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
      };
    const navigate = useNavigate();
    return(
        <div className={`z-2 w-[2000px] fixed bottom-[80px] left-0 right-0 mx-auto`}>
                <div hidden={!isFooterOpen} className={`${isKeyboardOpen && "opacity-0 translate-y-[-500px]"} duration-500 transition w-full z-[-1] mt-[-160px] absolute h-[160px] flex duration-500 transition gap-[16px] ${!location.pathname.includes("map") && "translate-y-[200px] opacity-0"}`}>
                <div 
                    onClick={() => {
                        setKeyboardOpen(true);
                        setMapsSelectionOpen(false);
                        setTimeout(()=>setFooterOpen(false), 500)
                    }}
                    className="transition duration-300 active:bg-[#e6ebe8] w-[1152px] h-full rounded-[48px] bg-white p-[48px] flex gap-[16px] justify-left items-center shadow-footer">
                    <img src={searchIcon} alt="search" className="size-[64px]" />
                    <div className="focus:outline-none w-[976px] h-[48px] text-text text-[48px] font-normal leading-[100%]">Поиск </div>
                </div>
                <button 
                    onClick={onFilterClick}
                    className="transition duration-300 active:bg-[#e6ebe8] size-[160px] p-[48px] bg-white rounded-[48px] shadow-footer">
                    <div hidden={filters===0} className="absolute mt-[-62px] ml-[-56px] text-white text-[30px] font-bold leading-[100%] size-[64px] rounded-full bg-light-green flex justify-center items-center">
                        {filters}
                    </div>
                    <img src={filterIcon} alt="filter" className="size-[64px]" />
                </button>
                <button 
                    onClick={() => setMapsSelectionOpen(prev => !prev)}
                    className="transition duration-300 active:bg-[#e6ebe8] w-[656px] h-full rounded-[48px] bg-white shadow-footer flex justify-center items-center gap-[16px]">
                    <div className="w-[480px] text-light-green text-[48px] text-left font-semibold leading-[100%]">
                        {currMap}
                    </div>
                    <img src={arrIcon} alt="img" className={`${isMapsSelectionOpen && "-rotate-180"} duration-300 transition size-[64px]`} />
                </button>
                <div hidden={!isMapsSelectionOpen} className={`absolute bottom-[184px] right-0 w-[656px] rounded-[72px] bg-white shadow-footer p-[24px]`}>
                    {mapVars.map((mapVar, index:number)=>(
                        <div key={index} onClick={() => setCurrMap(mapVar)} className={`${mapVar === currMap ? "bg-light-green text-white" : "text-text-second"} w-[608px] h-[160px] rounded-[48px] flex items-center p-[48px] text-[48px] font-semibold leading-[100%]`}>
                            {mapVar}
                        </div>
                    ))}
                </div>
            </div>
            <div hidden={!isFooterOpen} className={` ${isKeyboardOpen && "opacity-0"} duration-500 transition z-10 mt-[40px] w-full h-[208px] bg-white rounded-[72px] shadow-footer flex gap-[16px] items-center justify-center`}>
                <button 
                    onClick={() => navigate("/map")}
                    className={`${location.pathname.includes("map") ? "bg-dark-green text-white" : "bg-[#71BF451A] text-text-second"} w-[824px] h-[160px] rounded-[48px] flex justify-center items-center gap-[16px] transition duration-300 text-[48px] font-semibold leading-[100%]`}>
                        <img hidden={location.pathname.includes("map")} src={mapIcon} alt="map" className="size-[64px]" />
                        <img hidden={!location.pathname.includes("map")} src={activeMapIcon} alt="map" className="size-[64px]" />
                        Карта
                </button>
                <button 
                    onClick={() => navigate("/news")}
                    className={`${location.pathname.includes("news") ? "bg-dark-green text-white" : "bg-[#71BF451A] text-text-second"} w-[824px] h-[160px] rounded-[48px] flex justify-center items-center gap-[16px] transition duration-300 text-[48px] font-semibold leading-[100%]`}>
                        <img hidden={location.pathname.includes("news")} src={mapIcon} alt="map" className="size-[64px]" />
                        <img hidden={!location.pathname.includes("news")} src={activeMapIcon} alt="map" className="size-[64px]" />
                        Новости
                </button>
                <button 
                    onClick={() => setBlindMode(!blindMode)}
                    className="w-[272px] h-[160px] bg-[#71BF451A] rounded-[48px] flex justify-center items-center gap-[24px]">
                        <img src={glassesIcon} alt="img" className="size-[64px]" />
                        <div className={`${blindMode ? "bg-[#71BF454D]" : "bg-text-second"} w-[88px] h-[48px] rounded-full p-[4px] transition duration-300`}>
                            <div className={`${blindMode ? "bg-light-green translate-x-[40px]" : "bg-text"} transition duration-300 size-[40px] rounded-full`}/>
                        </div>
                </button>
            </div>
            <div className={`w-[2000px] h-[896px] transition duration-500 absolute ${isKeyboardOpen ? "translate-y-[-898px]" : "opacity-0 translate-y-[80px]"}`}>
                <div className="w-[2000px] h-[160px] bg-white rounded-[48px] border-[4px] border-light-green shadow-footer mb-[40px] flex p-[48px] gap-[16px] justify-left items-center">
                    <img src={searchIcon} alt="search" className="size-[64px]" />
                    <input
                        onChange={handleChange}
                        value={text}
                        autoComplete="off"
                        id="searchInput"
                        className="w-[1744px] h-[48px] text-text text-[48px] font-normal leading-[100%] focus:outline-none"
                        />
                </div>
                <Keyboard
                    enterButton={(button: string) => {
                    setText((prev) => prev + button);
                    }}
                    onClose={() => {
                        setFooterOpen(true);
                        setTimeout(()=>setKeyboardOpen(false), 0)
                    }}
                    onBackspace={() => {
                    setText((prev) => prev.slice(0, -1));
                    }}/>
            </div>
        </div>
    )
}