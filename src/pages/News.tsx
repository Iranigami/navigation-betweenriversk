import { useNavigate } from "react-router-dom";
import type { NewsArticle } from "../types";

type Props = {
  news: NewsArticle[];
  setArticle: (article: number) => void;
};

export default function News({ news, setArticle }: Props) {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <div className="animate-fade-in z-1 w-full h-full fixed top-0 left-0 p-[80px]">
      <div className="w-[2000px] h-[220px] flex justify-between items-center text-light-green text-[120px] font-bold leading-[100%]">
        Новости и события
      </div>
      <div className="mt-[40px] w-[2000px] h-[3172px] bg-white rounded-[72px] p-[48px]">
        <div className="overflow-x-hidden overflow-y-auto w-[1904px] h-[3076px]">
          {news.map((article, index: number) => (
            <div
              key={index}
              className="w-[1864px] h-[726px] bg-[#71BF451A] rounded-[48px] mb-[24px] p-[48px] flex gap-[32px] items-center"
            >
              <div className="size-[630px] rounded-[20px] overflow-hidden">
                <img
                  src={apiUrl + article.image}
                  alt="image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-[1106px] h-[630px]">
                <div className="w-[1106px] h-[486px] overflow-auto ">
                  <div className="text-light-green text-[56px] font-bold leading-[100%]">
                    {article.name}
                  </div>
                  <div className="mt-[12px] text-text-second text-[40px] font-semibold leading-[100%]">
                    {article.date}
                  </div>
                  <div className="mt-[32px] text-text text-[40px] font-normal leading-[100%]">
                    {article.shortDescription}
                  </div>
                </div>
                <button
                  onClick={() => {
                    navigate(`/newsarticle`);
                    setArticle(index);
                  }}
                  className="mt-[32px] ml-[716px] w-[390px] h-[112px] rounded-[24px] bg-light-green text-white text-[48px] flex justify-center items-center font-semibold leading-[100%]"
                >
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
