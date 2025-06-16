import { useEffect, useState } from "react";
import type { MapPoint } from "../types";

type Props = {
  data: MapPoint;
  onClose: () => void;
  onTrace: () => void;
};

export default function Info({ data, onClose, onTrace }: Props) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [keepOpen, setKeepOpen] = useState(false);
  const pointData = data;
  useEffect(() => {
    if (document.getElementById("infoHandler") && pointData.description)
      document.getElementById("infoHandler")!.innerHTML = pointData.description;
    if (document.getElementById("hoursHandler") && pointData.openingHours)
      document.getElementById("hoursHandler")!.innerHTML =
        pointData.openingHours;
  }, []);
  return (
    <div
      className={`animate-fade-in z-100 w-full h-full fixed top-0 left-0 bg-[#00000099] flex justify-center items-center duration-300 transition ${keepOpen && "opacity-0"}`}
    >
      <div className="w-[2000px] max-h-[3172px] bg-white rounded-[72px] p-[48px]">
        <div className="blind:text-dark-green text-light-green text-[120px] font-bold leading-[100%]">
          {pointData.name}
        </div>
        <div className="mt-[48px] w-[1904px] h-[1070.49px] rounded-[48px] overflow-hidden">
          <img
            src={apiUrl + pointData.image}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-[24px] grid grid-cols-2 gap-[16px]">
          <div className="w-[944px] h-[210px] text-center rounded-[48px] bg-[#04341C0D] p-[48px]">
            <div className="text-[42px] blind:text-dark-green text-text font-bold leading-[100%]">
              Телефон
            </div>
            <div className="text-[48px] blind:text-dark-green text-text font-normal leading-[100%] mt-[16px]">
              {pointData.phone}
            </div>
          </div>
          <div className="w-[944px] h-[210px] text-center rounded-[48px] bg-[#04341C0D] p-[48px]">
            <div className="text-[42px] blind:text-dark-green text-text font-bold leading-[100%]">
              Адрес
            </div>
            <div className="text-[48px] blind:text-dark-green text-text font-normal leading-[100%] mt-[16px]">
              {pointData.address}
            </div>
          </div>
          <div className="w-[944px] h-[250px] text-center rounded-[48px] bg-[#04341C0D] p-[48px]">
            <div className="text-[42px] blind:text-dark-green text-text font-bold leading-[100%]">
              Режим работы
            </div>
            <div
              id="hoursHandler"
              className="text-[48px] blind:text-dark-green text-text font-normal leading-[100%] mt-[16px]"
            />
          </div>
          <div className="w-[944px] h-[250px] text-center rounded-[48px] bg-[#04341C0D] p-[48px]">
            <div className="text-[42px] blind:text-dark-green text-text font-bold leading-[100%]">
              Почта
            </div>
            <div className="text-[48px] blind:text-dark-green text-text font-normal leading-[100%] mt-[16px]">
              {pointData.email}
            </div>
          </div>
        </div>
        <div className="mt-[48px] blind:text-dark-green text-text text-[56px] font-bold leading-[100%]">
          {pointData.title}
        </div>
        {pointData.description && (
          <div
            id="infoHandler"
            className="mt-[24px] blind:text-dark-green text-text text-[40px]"
          />
        )}
        <div className="mt-[48px] flex justify-center gap-[16px]">
          <button
            onClick={onTrace}
            className="w-[944px] h-[144px] rounded-[48px] blind:bg-dark-green bg-light-green text-white flex justify-center items-center text-[48px] font-semibold leading-[100%]"
          >
            Построить маршрут
          </button>
          <button
            onClick={() => {
              setKeepOpen(true);
              setTimeout(onClose, 300);
            }}
            className="w-[944px] h-[144px] rounded-[48px] blind:text-dark-green blind:border-dark-green text-light-green bg-white border-[4px] border-light-green flex justify-center items-center text-[48px] font-semibold leading-[100%]"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
