import { useEffect } from "react";
import cupIcon from "../assets/icons/Tea Cup.svg";
import museumIcon from "../assets/icons/museum.svg";
import ticketIcon from "../assets/icons/ticket.svg";
import hotelIcon from "../assets/icons/bed.svg";
import hereIcon from "../assets/icons/People Nearby.svg";
import polygon from "../assets/images/Polygon 1.svg";
import map from "../assets/images/Map (1).svg";
import tempMap from "../assets/images/ae9600c2a311cf2d12d49d6f6a8d13250affe9f5.png"
import type { MapPoint } from "../types";

type Props = {
  setInfoModalOpen: (point: number) => void;
  mapdata: MapPoint[];
  currentMap: number;
};

export default function Map({ setInfoModalOpen, mapdata, currentMap }: Props) {

  const tempMapData:MapPoint[] = [];



  useEffect(() => {
    document.getElementById("map")?.scrollTo(3000, 1000);
    //срабатывает при смене карты
  }, [currentMap]);
  return (
    <>
    {currentMap === 0 && <div
      id={"map"}
      className="z-[-1] bg-[#F6EBDB] w-[2160px] h-[3840px] overflow-x-scroll fixed animate-fade-in hide-scroll"
    >
      <div className="w-[12848px] h-[9636px]">
        <div className="w-[407px] h-[132px] absolute mt-[2770px] ml-[3800px]">
          <div className="w-[407px] h-[112px] rounded-full justify-center items-center blind:bg-dark-green bg-light-green flex p-[24px] gap-[24px] text-white text-[48px] font-semibold leading-[100%]">
            <img src={hereIcon} alt="icon" className="size-[64px] mt-[-4px]" />
            Вы здесь
          </div>
          <img src={polygon} alt="img" className="w-[24px] h-[20px] mx-auto" />
        </div>
        {mapdata.map((mappoint, index: number) => (
          <div
            key={index}
            onClick={() => {
              //53.718959, 87.985242 - tl     53.649676, 88.140244 - br
              setInfoModalOpen(index);
            }}
            style={{
              marginTop: (mappoint.coordinates[0] - 53.718959) * -139082 + "px",
              marginLeft: (mappoint.coordinates[1] - 87.985242) * 82889 + "px",
            }}
            className={`w-[1000px] absolute flex gap-[24px] items-center`}
          >
            <div className="size-[112px] blind:bg-dark-green bg-light-green rounded-full border-[4px] border-white p-[24px]">
              <img src={cupIcon}    hidden={mappoint.objectType!="restaurant and social gathering"} alt="map point" className="size-[64px]" />
              <img src={museumIcon} hidden={mappoint.objectType!="sight"} alt="map point" className="size-[64px]" />
              <img src={ticketIcon} hidden={mappoint.objectType!="project"} alt="map point" className="size-[64px]" />
              <img src={hotelIcon}  hidden={mappoint.objectType!="hotel"} alt="map point" className="size-[64px]" />

            </div>
            <span className="text-text text-[48px] font-semibold leading-[100%] outlined-text">
              {mappoint.name}
            </span>
            <div className="text-text text-[48px] font-semibold leading-[100%] absolute ml-[136px]">
              {mappoint.name}
            </div>
          </div>
        ))}
        <img
          src={map}
          alt="map"
          className={`w-[12848px] h-[9636px] object-cover`}
        />
      </div>
    </div>
}
{currentMap === 1 && <div
      id={"map2"}
      className="z-[-1] bg-[#F6EBDB] w-[2160px] h-[3840px] overflow-hidden fixed animate-fade-in hide-scroll"
    >
      <div className="w-[3666px] h-[2852px] mt-[300px] ml-[-600px]">
        <div className="w-[407px] h-[132px] absolute mt-[700px] ml-[1000px]">
          <div className="w-[407px] h-[112px] rounded-full justify-center items-center blind:bg-dark-green bg-light-green flex p-[24px] gap-[24px] text-white text-[48px] font-semibold leading-[100%]">
            <img src={hereIcon} alt="icon" className="size-[64px] mt-[-4px]" />
            Вы здесь
          </div>
          <img src={polygon} alt="img" className="w-[24px] h-[20px] mx-auto" />
        </div>
        {tempMapData.map((mappoint, index: number) => (
          <div
            key={index}
            onClick={() => {
              setInfoModalOpen(index);
            }}
            style={{
              marginTop: (mappoint.coordinates[0] - 53.718959) * -139082 + "px",
              marginLeft: (mappoint.coordinates[1] - 87.985242) * 82889 + "px",
            }}
            className={`w-[1000px] absolute flex gap-[24px] items-center`}
          >
            <div className="size-[112px] blind:bg-dark-green bg-light-green rounded-full border-[4px] border-white p-[24px]">
              <img src={cupIcon}    hidden={mappoint.objectType!="restaurant and social gathering"} alt="map point" className="size-[64px]" />
              <img src={museumIcon} hidden={mappoint.objectType!="sight"} alt="map point" className="size-[64px]" />
              <img src={ticketIcon} hidden={mappoint.objectType!="project"} alt="map point" className="size-[64px]" />
              <img src={hotelIcon}  hidden={mappoint.objectType!="hotel"} alt="map point" className="size-[64px]" />

            </div>
            <span className="text-text text-[48px] font-semibold leading-[100%] outlined-text">
              {mappoint.name}
            </span>
            <div className="text-text text-[48px] font-semibold leading-[100%] absolute ml-[136px]">
              {mappoint.name}
            </div>
          </div>
        ))}
        <img
          src={tempMap}
          alt="map"
          className={`w-[3666px] h-[2852px] object-cover`}
        />
      </div>
    </div>
}
{currentMap === 2 && <div
      id={"map2"}
      className="z-[-1] bg-[#F6EBDB] w-[2160px] h-[3840px] overflow-hidden fixed animate-fade-in hide-scroll"
    >
      <div className="w-[3666px] h-[2852px] mt-[300px] ml-[-600px]">
        <div className="w-[407px] h-[132px] absolute mt-[700px] ml-[1000px]">
          <div className="w-[407px] h-[112px] rounded-full justify-center items-center blind:bg-dark-green bg-light-green flex p-[24px] gap-[24px] text-white text-[48px] font-semibold leading-[100%]">
            <img src={hereIcon} alt="icon" className="size-[64px] mt-[-4px]" />
            Вы здесь
          </div>
          <img src={polygon} alt="img" className="w-[24px] h-[20px] mx-auto" />
        </div>
        {tempMapData.map((mappoint, index: number) => (
          <div
            key={index}
            onClick={() => {
              setInfoModalOpen(index);
            }}
            style={{
              marginTop: (mappoint.coordinates[0] - 53.718959) * -139082 + "px",
              marginLeft: (mappoint.coordinates[1] - 87.985242) * 82889 + "px",
            }}
            className={`w-[1000px] absolute flex gap-[24px] items-center`}
          >
            <div className="size-[112px] blind:bg-dark-green bg-light-green rounded-full border-[4px] border-white p-[24px]">
              <img src={cupIcon}    hidden={mappoint.objectType!="restaurant and social gathering"} alt="map point" className="size-[64px]" />
              <img src={museumIcon} hidden={mappoint.objectType!="sight"} alt="map point" className="size-[64px]" />
              <img src={ticketIcon} hidden={mappoint.objectType!="project"} alt="map point" className="size-[64px]" />
              <img src={hotelIcon}  hidden={mappoint.objectType!="hotel"} alt="map point" className="size-[64px]" />

            </div>
            <span className="text-text text-[48px] font-semibold leading-[100%] outlined-text">
              {mappoint.name}
            </span>
            <div className="text-text text-[48px] font-semibold leading-[100%] absolute ml-[136px]">
              {mappoint.name}
            </div>
          </div>
        ))}
        <img
          src={tempMap}
          alt="map"
          className={`w-[3666px] h-[2852px] object-cover`}
        />
      </div>
    </div>
}

    </>
  );
}
