import searchIcon from "../assets/icons/search.svg";
import filterIcon from "../assets/icons/filter.svg";
import arrIcon from "../assets/icons/arrow.svg";
import activeMapIcon from "../assets/icons/greenMap.svg";
import mapIcon from "../assets/icons/map.svg";
import closeIcon from "../assets/icons/icon 65.svg";
import blindCloseIcon from "../assets/icons/blindClose.svg";
import glassesIcon from "../assets/icons/glasses.svg";
import cupIcon from "../assets/icons/Tea Cup copy.svg";
import museumIcon from "../assets/icons/museum copy.svg";
import ticketIcon from "../assets/icons/ticket copy.svg";
import hotelIcon from "../assets/icons/bed copy.svg";
import { useRef, useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Keyboard from "./Keyboard";
import blindMap from "../assets/icons/icon 65 (1).svg";
import type { MapPoint } from "../types";

type Props = {
  mapData?: MapPoint[];
  onSearch: (search: string) => void;
  onChangeMap: (mapIndex: number) => void;
  onFilterClick: () => void;
  onClickPoint: (id: number) => void;
  filters: number;
};

export default function Footer({
  onFilterClick,
  filters,
  onChangeMap,
  mapData,
  onClickPoint,
  onSearch
}: Props) {
  const [blindMode, setBlindMode] = useState(false);
  const mapVars = [
    "Междуреченск",
    "Мегалиты горной шории",
    "Поднебесные зубья",
  ];


  const [currMap, setCurrMap] = useState(mapVars[0]);
  const queryTimeout = useRef<any>(null);
  const getSearchResults = () => {
    clearTimeout(queryTimeout.current);
    queryTimeout.current = setTimeout(async () => {
      onSearch(searchQuery.current);
    }, 500);
  };
  const [text, setText] = useState("");
  const searchQuery = useRef("");
  const [isKeyboardOpen, setKeyboardOpen] = useState(false);
  const [isFooterOpen, setFooterOpen] = useState(true);
  const [isMapsSelectionOpen, setMapsSelectionOpen] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    searchQuery.current = event.target.value;
    getSearchResults();
  };
  const navigate = useNavigate();
  return (
    <div
      className={`z-2 w-[2000px] fixed bottom-[80px] left-0 right-0 mx-auto`}
    >
      <div
        hidden={!isFooterOpen}
        className={`${isKeyboardOpen && "opacity-0 translate-y-[-500px]"} duration-500 transition w-full z-[-1] mt-[-160px] absolute h-[160px] flex duration-500 transition gap-[16px] ${!location.pathname.includes("map") && "translate-y-[200px] opacity-0"}`}
      >
        <div
          onClick={() => {
            setKeyboardOpen(true);
            setMapsSelectionOpen(false);
            setTimeout(() => setFooterOpen(false), 500);
          }}
          className="transition duration-300 active:bg-[#e6ebe8] w-[1152px] h-full rounded-[48px] bg-white p-[48px] flex gap-[16px] justify-left items-center shadow-footer"
        >
          <img src={searchIcon} alt="search" className="size-[64px]" />
          <div className="focus:outline-none w-[976px] h-[48px] text-text blind:text-dark-green blind:font-semibold text-[48px] font-normal leading-[100%]">
            Поиск
          </div>
        </div>
        <button
          onClick={onFilterClick}
          className="transition duration-300 active:bg-[#e6ebe8] size-[160px] p-[48px] bg-white rounded-[48px] shadow-footer"
        >
          <div
            hidden={filters === 0}
            className="absolute mt-[-62px] ml-[-56px] text-white text-[30px] font-bold leading-[100%] size-[64px] rounded-full bg-light-green flex justify-center items-center"
          >
            {filters}
          </div>
          <img src={filterIcon} alt="filter" className="size-[64px]" />
        </button>
        <button
          onClick={() => setMapsSelectionOpen((prev) => !prev)}
          className="transition duration-300 active:bg-[#e6ebe8] w-[656px] h-full rounded-[48px] bg-white shadow-footer flex justify-center items-center gap-[16px]"
        >
          <div className="w-[480px] text-light-green text-[48px] text-left blind:text-dark-green font-semibold leading-[100%]">
            {currMap}
          </div>
          <img
            src={arrIcon}
            alt="img"
            className={`${isMapsSelectionOpen && "-rotate-180"} duration-300 transition size-[64px]`}
          />
        </button>
        <div
          className={`absolute ${isMapsSelectionOpen ? "translate-y-[-1084px] opacity-100" : "opacity-0"} z-[-1] transition duration-300 bottom-[-900px] right-0 w-[656px] rounded-[72px] bg-white shadow-footer p-[24px]`}
        >
          {mapVars.map((mapVar, index: number) => (
            <div
              key={index}
              onClick={() => {
                setCurrMap(mapVar);
                onChangeMap(index);
                setMapsSelectionOpen(false);
              }}
              className={`${mapVar === currMap ? "bg-light-green text-white blind:bg-dark-green" : "text-text-second blind:text-dark-green"} w-[608px] h-[160px] rounded-[48px] flex items-center p-[48px] text-[48px] font-semibold leading-[100%]`}
            >
              {mapVar}
            </div>
          ))}
        </div>
      </div>
      <div
        hidden={!isFooterOpen}
        className={` ${isKeyboardOpen && "opacity-0"} duration-500 transition z-10 mt-[40px] w-full h-[208px] bg-white rounded-[72px] shadow-footer flex gap-[16px] items-center justify-center`}
      >
        <button
          onClick={() => navigate("/map")}
          className={`${location.pathname.includes("map") ? "bg-dark-green text-white" : "bg-[#71BF451A] text-text-second blind:bg-white blind:text-dark-green"} w-[824px] h-[160px] rounded-[48px] flex justify-center items-center gap-[16px] transition duration-300 text-[48px] font-semibold leading-[100%]`}
        >
          <img
            hidden={location.pathname.includes("map")}
            src={mapIcon}
            alt="map"
            className="size-[64px]"
          />
          <img
            hidden={!location.pathname.includes("map") || blindMode}
            src={activeMapIcon}
            alt="map"
            className="size-[64px]"
          />
          <img
            hidden={!location.pathname.includes("map") || !blindMode}
            src={blindMap}
            alt="map"
            className="size-[64px]"
          />
          Карта
        </button>
        <button
          onClick={() => navigate("/news")}
          className={`${location.pathname.includes("news") ? "bg-dark-green text-white" : "bg-[#71BF451A] text-text-second  blind:bg-white blind:text-dark-green"} w-[824px] h-[160px] rounded-[48px] flex justify-center items-center gap-[16px] transition duration-300 text-[48px] font-semibold leading-[100%]`}
        >
          <img
            hidden={location.pathname.includes("news")}
            src={mapIcon}
            alt="map"
            className="size-[64px]"
          />
          <img
            hidden={!location.pathname.includes("news") || blindMode}
            src={activeMapIcon}
            alt="map"
            className="size-[64px]"
          />
          <img
            hidden={location.pathname.includes("map") || !blindMode}
            src={blindMap}
            alt="map"
            className="size-[64px]"
          />
          Новости
        </button>
        <button
          onClick={() => {
            document.documentElement.setAttribute(
              "data-theme",
              blindMode ? "normal" : "blind",
            );
            setBlindMode((prev) => !prev);
          }}
          className="w-[272px] h-[160px] bg-[#71BF451A] blind:bg-white rounded-[48px] flex justify-center items-center gap-[24px]"
        >
          <img src={glassesIcon} alt="img" className="size-[64px]" />
          <div
            className={`${blindMode ? "bg-[#71BF454D]" : "bg-text-second"} w-[88px] h-[48px] rounded-full p-[4px] transition duration-300`}
          >
            <div
              className={`${blindMode ? "bg-light-green translate-x-[40px]" : "bg-text"} transition duration-300 size-[40px] rounded-full`}
            />
          </div>
        </button>
      </div>
      {text && (
        <div className="pl-[48px] w-[2000px] max-h-[528px] overflow-y-scroll overflow-x-hidden p-[24px] rounded-[72px] shadow-footer bg-white absolute bottom-[936px]">
          {mapData?.map((mappoint, index: number) => (
            <div
              onClick={() => onClickPoint(index)}
              key={index}
              className="w-[1952px] items-center justify-left h-[160px] flex gap-[16px] text-text-second text-[48px] font-semibold leading-[100%]"
            >
              <img
                src={cupIcon}
                hidden={
                  mappoint.objectType != "restaurant and social gathering"
                }
                alt="map point"
                className="size-[64px]"
              />
              <img
                src={museumIcon}
                hidden={mappoint.objectType != "sight"}
                alt="map point"
                className="size-[64px]"
              />
              <img
                src={ticketIcon}
                hidden={mappoint.objectType != "project"}
                alt="map point"
                className="size-[64px]"
              />
              <img
                src={hotelIcon}
                hidden={mappoint.objectType != "hotel"}
                alt="map point"
                className="size-[64px]"
              />
              {mappoint.name}
            </div>
          ))}
        </div>
      )}
      <div
        className={`w-[2000px] h-[896px] transition duration-500 absolute ${isKeyboardOpen ? "translate-y-[-898px]" : "opacity-0 translate-y-[80px]"}`}
      >
        <div className="w-[2000px] h-[160px] bg-white rounded-[48px] border-[4px] border-light-green blind:border-dark-green shadow-footer mb-[40px] flex p-[48px] gap-[16px] justify-center items-center">
          <img src={searchIcon} alt="search" className="size-[64px]" />
          <input
            onChange={handleChange}
            value={text}
            autoComplete="off"
            id="searchInput"
            className="w-[1744px] h-[48px] text-text text-[48px] font-normal leading-[100%] focus:outline-none"
          />
          <img
            hidden={blindMode}
            onClick={() => {
              if (text !== "") {
              setText("");
              searchQuery.current = "";
              onSearch("");
              }
            }}
            src={closeIcon}
            alt="close"
            className=""
          />
          <img
            hidden={!blindMode}
            onClick={() => {
              if (text !== "") {
                setText("");
                searchQuery.current = "";
                onSearch("");
                }
            }}
            src={blindCloseIcon}
            alt="close"
            className=""
          />
        </div>
        <Keyboard
          enterButton={(button: string) => {
            setText((prev) => prev + button);
            searchQuery.current = searchQuery.current + button;
            getSearchResults();
          }}
          onClose={() => {
            setFooterOpen(true);
            if (text !== "") {
              setText("");
              searchQuery.current = "";
              onSearch("");
              }
            setTimeout(() => setKeyboardOpen(false), 0);
          }}
          onBackspace={() => {
            setText((prev) => prev.slice(0, -1));
            searchQuery.current = searchQuery.current.slice(0, -1);
            getSearchResults();
          }}
        />
      </div>
    </div>
  );
}
