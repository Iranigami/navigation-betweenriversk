import { useState } from "react";
import type { MapPoint } from "../types";

type Props = {
  data: MapPoint;
  onClose: () => void;
};

export default function QrModal({ data, onClose }: Props) {
  //@ts-ignore
  const apiUrl = import.meta.env.VITE_API_URL;
  const [keepOpen, setKeepOpen] = useState(false);
  //@ts-ignore
  const pointData = data;
  return (
    <div
      className={`animate-fade-in z-100 w-full h-full fixed top-0 left-0 bg-[#00000099] flex justify-center items-center duration-300 transition ${keepOpen && "opacity-0"}`}
    >
      <div className="w-[2000px] rounded-[72px] p-[48px] bg-white">
        <div className="blind:text-dark-green text-light-green text-[120px] font-bold leading-[100%] mx-auto text-center">
          {pointData.name}
        </div>
        <div className="mt-[48px] size-[1060px] rounded-[96px] blind:bg-[#04341C0D] bg-[#F1F9EC] p-[80px] mx-auto">
          {/*картинка с qr по ссылке apiUrl + {pointData.qr}*/}
        </div>
        <div className="flex mt-[48px] gap-[16px]">
          <button
            onClick={() => {
              location.reload();
            }}
            className="w-[944px] h-[144px] blind:bg-dark-green bg-light-green rounded-[48px] flex justify-center items-center text-white text-[48px] font-semibold leading-[100%]"
          >
            На главную
          </button>
          <button
            onClick={() => {
              setKeepOpen(true);
              setTimeout(onClose, 300);
            }}
            className="w-[944px] h-[144px] bg-white border-[4px] blind:text-dark-green blind:border-dark-green border-light-green rounded-[48px] flex justify-center items-center text-light-green text-[48px] font-semibold leading-[100%]"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
