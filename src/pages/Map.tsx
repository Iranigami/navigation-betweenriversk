import { useRef } from "react"
import cupIcon from "../assets/icons/Tea Cup.svg"
import hereIcon from "../assets/icons/People Nearby.svg"
import polygon from "../assets/images/Polygon 1.svg"
import map from "../assets/images/Map (1).svg"
import { useNavigate } from "react-router-dom";

type Props = {
    isBlindModeOn: boolean;
    setInfoModalOpen: () => void;
}

export default function Map({setInfoModalOpen}: Props){

    const navigate = useNavigate();
    const selectedPoint = useRef(0); //id
    return(
        <div className="z-[-1] w-[2160px] h-[3840px] overflow-x-scroll fixed animate-fade-in hide-scroll">
            <div className="w-[12848px] h-[9636px]">
            {/* переместить на нужную позицию */}
            <div className="w-[407px] h-[132px] absolute mt-[100px] ml-[100px]">
                <div className="w-[407px] h-[112px] rounded-full justify-center items-center bg-light-green flex p-[24px] gap-[24px] text-white text-[48px] font-semibold leading-[100%]">
                    <img src={hereIcon} alt="icon" className="size-[64px] mt-[-4px]" />
                    Вы здесь
                </div>
                <img src={polygon} alt="img" className="w-[24px] h-[20px] mx-auto" />
            </div>
                {/*тут будут разные точки, пока одна      коорды - mt и ml*/}
            <div
                onClick={() => {
                    selectedPoint.current = 2;
                    navigate(`/map?placeInfoId=${selectedPoint.current}`)
                    setInfoModalOpen();
                }}
                className="h-[112px] absolute flex gap-[24px] items-center mt-[900px] ml-[1100px]">
                    <div className="size-[112px] bg-light-green rounded-full border-[4px] border-white p-[24px]"> <img src={cupIcon} alt="map point" className="size-[64px]" /></div>
                    <span className="text-text text-[48px] font-semibold leading-[100%] outlined-text">Тестовое</span>
                    <div className="text-text text-[48px] font-semibold leading-[100%] absolute ml-[136px]">Тестовое</div>
            </div>
                <img src={map} alt="map" className={`w-[12848px] h-[9636px] object-cover`} />
            </div>
        </div>
    )
}