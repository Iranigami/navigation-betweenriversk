import { useNavigate } from "react-router-dom";
import pickIcon from "../assets/icons/pick.svg";
import { useEffect, useState } from "react";

type Props = {
  onWaiting: boolean;
  onClicked: () => void;
};

export default function Main({ onWaiting, onClicked }: Props) {
  const media = [
    {
      source: "https://dovosp.ru/wp-content/uploads/2022/03/zastavka-1.jpg",
      type: "image",
    },
    {
      source: "https://img.geliophoto.com/mzhdr/00_mzhdr.jpg",
      type: "image",
    },
    {
      source: "https://indieview.ru/wp-content/uploads/2023/08/01-2-gorod-mezhdurechensk-1024x683.jpg",
      type: "image",
    },
    {
      source: "https://avatars.mds.yandex.net/i?id=367392952aa527ea02e7b250ea7d2895_l-5252264-images-thumbs&n=13",
      type: "image",
    },
    {
      source: "https://cdn-front.freepik.com/videos/media/cover-v2-3.webm",
      type: "video",
    },
  ];
  const [keepOpen, setKeepOpen] = useState(true);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const changeSlide = () => {
    setTimeout(() => {
      setCurrentSlide((prev) => (prev < media.length - 1 ? prev + 1 : 0));
      changeSlide();
    }, 15000);
  };
  useEffect(() => {
    changeSlide();
  }, []);
  return (
    <>
      {keepOpen && (
        <div className="fixed z-2 top-0 w-[2160px] h-[3840px]">
          <div
            className={`absolute w-full h-full bg-white z-[-1] duration-700 transition ${!onWaiting && "translate-y-[-4200px] opacity-0 scale-[150%]"}`}
          >
            {media.map((file, index: number) => (
              <div
              key={index}>
              {
                file.type==="image" && <img
                src={file.source}
                alt="img"
                className={`object-cover w-full h-full absolute duration-1000 transition ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
              />
              }
              {
                file.type==="video" && <video
                controls loop
                muted
                autoPlay
                src={file.source}
                className={`object-cover w-full h-full absolute duration-1000 transition ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
              />
              }
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
