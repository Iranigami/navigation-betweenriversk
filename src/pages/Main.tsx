import { useNavigate } from "react-router-dom";
import pickIcon from "../assets/icons/pick.svg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

type Props = {
  onWaiting: boolean;
  onClicked: () => void;
};

export default function Main({ onWaiting, onClicked }: Props) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [media, setMedia] = useState<{ source: string; type: string }[]>([]);
  const mediaLength = useRef(0);
  const readJwtFromCookie = () => {
    const cookieValue = document.cookie.match("(^|;) ?jwt=([^;]*)(;|$)");
    return cookieValue ? cookieValue[2] : null;
  };
  const jwtToken = readJwtFromCookie();
  useEffect(() => {
    changeSlide();
    axios
      .get(apiUrl + "api/main_windows", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        setMedia(response.data);
        mediaLength.current = response.data.length;
      })
      .catch(() => {
        console.error(
          "Ошибка получения информации, попробуйте обновить страницу",
        );
        document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
        //location.reload();
      });
  }, []);

  const [keepOpen, setKeepOpen] = useState(true);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const changeSlide = () => {
    setTimeout(() => {
      setCurrentSlide((prev) =>
        prev < mediaLength.current - 1 ? prev + 1 : 0,
      );
      changeSlide();
    }, 15000);
  };
  return (
    <>
      {keepOpen && (
        <div className="fixed z-2 top-0 w-[2160px] h-[3840px]">
          <div
            className={`absolute w-full h-full bg-white z-[-1] duration-700 transition ${!onWaiting && "translate-y-[-4200px] opacity-0 scale-[150%]"}`}
          >
            {!!media &&
              media.map((file, index: number) => (
                <div key={index}>
                  {file.type === "image" && (
                    <img
                      src={apiUrl + file.source}
                      alt="img"
                      className={`object-cover w-full h-full absolute duration-1000 transition ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
                    />
                  )}
                  {file.type === "video" && (
                    <video
                      loop
                      muted
                      autoPlay
                      src={apiUrl + file.source}
                      className={`object-cover w-full h-full absolute duration-1000 transition ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
                    />
                  )}
                </div>
              ))}
            <div className="absolute w-[2160px] h-[807px] opacity-70 bg-linear-to-b from-[#04341C] to-[#04341C00]" />
            <div className="absolute bottom-0 w-[2160px] h-[807px] opacity-70 bg-linear-to-t from-[#04341C] to-[#04341C00]" />
          </div>
          <button
            onClick={() => {
              navigate("/map");
              onClicked();
              setTimeout(() => setKeepOpen(false), 1500);
            }}
            className={`absolute left-0 right-0 mx-auto bottom-[248px] flex gap-[24px] w-[1664px] h-[216px] rounded-[108px] bg-[#71BF45CC] active:bg-[#1E7B4CCC] justify-center items-center duration-700 transition ${!onWaiting && "opacity-0"}`}
          >
            <img src={pickIcon} alt="click" className="size-[120px]" />
            <div className="text-white text-[48px] font-semibold leading-[100%]">
              Нажмите, чтобы начать
            </div>
          </button>
        </div>
      )}
    </>
  );
}
