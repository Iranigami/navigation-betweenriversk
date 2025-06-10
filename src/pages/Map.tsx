import { useEffect, useRef } from "react"
import cupIcon from "../assets/icons/Tea Cup.svg"
import hereIcon from "../assets/icons/People Nearby.svg"
import polygon from "../assets/images/Polygon 1.svg"
import map from "../assets/images/Map (1).svg"
import { useNavigate } from "react-router-dom";
import type { MapPoint } from "../types"

type Props = {
    isBlindModeOn: boolean;
    setInfoModalOpen: () => void;
    mapdata: MapPoint[];
}

export default function Map({setInfoModalOpen, mapdata}: Props){

    const navigate = useNavigate();
    const selectedPoint = useRef(0); //id
    useEffect(() => {
        document.getElementById("map")?.scrollTo(3000, 1000);
    }, [])
    return(
        <div id={"map"} className="z-[-1] w-[2160px] h-[3840px] overflow-x-scroll fixed animate-fade-in hide-scroll">
            <div className="w-[12848px] h-[9636px]">
            {/* переместить на нужную позицию */}
            <div className="w-[407px] h-[132px] absolute mt-[2770px] ml-[3800px]">
                <div className="w-[407px] h-[112px] rounded-full justify-center items-center bg-light-green flex p-[24px] gap-[24px] text-white text-[48px] font-semibold leading-[100%]">
                    <img src={hereIcon} alt="icon" className="size-[64px] mt-[-4px]" />
                    Вы здесь
                </div>
                <img src={polygon} alt="img" className="w-[24px] h-[20px] mx-auto" />
            </div>
                {mapdata.map((mappoint, index: number)=>(
                    <div
                        key={index}
                        onClick={() => {
                            selectedPoint.current = 2;
                            navigate(`/map?placeInfoId=${index}`)
                            setInfoModalOpen();
                        }}
                        style={{marginTop: mappoint.coordinates[0]*1000 + 'px',
                                marginLeft: mappoint.coordinates[1]*1000 + 'px'
                        }}
                        className={`w-[1000px] absolute flex gap-[24px] items-center`}>
                            <div className="size-[112px] bg-light-green rounded-full border-[4px] border-white p-[24px]"> <img src={cupIcon} alt="map point" className="size-[64px]" /></div>
                            <span className="text-text text-[48px] font-semibold leading-[100%] outlined-text">{mappoint.name}</span>
                            <div className="text-text text-[48px] font-semibold leading-[100%] absolute ml-[136px]">{mappoint.name}</div>
                    </div>
                ))}
                <img src={map} alt="map" className={`w-[12848px] h-[9636px] object-cover`} />
            </div>
        </div>
    )
}