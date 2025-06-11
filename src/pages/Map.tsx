import { useEffect } from "react";
import cupIcon from "../assets/icons/Tea Cup.svg";
import hereIcon from "../assets/icons/People Nearby.svg";
import polygon from "../assets/images/Polygon 1.svg";
import map from "../assets/images/Map (1).svg";
import type { MapPoint } from "../types";

type Props = {
  setInfoModalOpen: (point: number) => void;
  mapdata: MapPoint[];
};

export default function Map({ setInfoModalOpen, mapdata }: Props) {
  useEffect(() => {
    document.getElementById("map")?.scrollTo(3000, 1000);
  }, []);
  return (
    <div
      id={"map"}
      className="z-[-1] w-[2160px] h-[3840px] overflow-x-scroll fixed animate-fade-in hide-scroll"
    >
      <div className="w-[12848px] h-[9636px]">
        <div className="w-[407px] h-[132px] absolute mt-[2770px] ml-[3800px]">
          <div className="w-[407px] h-[112px] rounded-full justify-center items-center bg-light-green flex p-[24px] gap-[24px] text-white text-[48px] font-semibold leading-[100%]">
            <img src={hereIcon} alt="icon" className="size-[64px] mt-[-4px]" />
            Вы здесь
          </div>
          <img src={polygon} alt="img" className="w-[24px] h-[20px] mx-auto" />
        </div>
        <div className="absolute size-[100px] bg-black mt-[9536px] ml-[12748px]" />
        {mapdata.map((mappoint, index: number) => (
          <div
            key={index}
            onClick={() => {
              //53.718959, 87.985242 - tl     53.649676, 88.140244 - br
              setInfoModalOpen(index);
            }}
            style={{
              marginTop: (mappoint.coordinates[0] - 53.718959) * -132001 + "px",
              marginLeft: (mappoint.coordinates[1] - 87.985242) * 79889 + "px",
            }}
            className={`w-[1000px] absolute flex gap-[24px] items-center`}
          >
            <div className="size-[112px] bg-light-green rounded-full border-[4px] border-white p-[24px]">
              {" "}
              <img src={cupIcon} alt="map point" className="size-[64px]" />
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
  );
}
