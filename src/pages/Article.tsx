import { useNavigate } from "react-router-dom";
import arrIcon from "../assets/icons/arrow.svg";
import type { NewsArticle } from "../types";
import blindArrIcon from "../assets/icons/blindArr.svg";
type Props = {
  news: NewsArticle;
};

export default function Article({ news }: Props) {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const testdata = news;
  return (
    <div className="animate-fade-in w-full h-full fixed p-[80px]">
      <div className="w-[2000px] h-[220px] flex justify-between items-center">
        <div className="flex gap-[40px] items-center">
          <button
            onClick={() => navigate("/news")}
            className="size-[160px] bg-white rounded-[48px] p-[48px] blind:border-[4px] blind:border-dark-green"
          >
            <img
              src={arrIcon}
              alt="back"
              className="rotate-270 size-[64px] blind:hidden"
            />
            <img
              src={blindArrIcon}
              alt="back"
              className="size-[64px] hidden blind:inline"
            />
          </button>
          <div className="blind:text-dark-green text-light-green text-[100px] leading-[100%] font-bold">
            {testdata.name}
          </div>
        </div>
      </div>
      <div className="mt-[40px] w-[2000px] h-[3172px] bg-white rounded-[72px] p-[48px]">
        <div className="overflow-x-hidden overflow-y-auto rounded-[48px] w-[1904px] h-[3076px]">
          <div className="w-[1864px]">
            <div className="w-[1864px] h-[1048px] rounded-[48px] overflow-hidden">
              <img
                src={apiUrl + testdata.image}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="blind:text-dark-green mt-[48px] text-text text-[56px] font-bold leading-[100%]">
              Время проведения
            </div>
            <div className="blind:text-text mt-[24px] text-text-second text-[80px] font-semibold leading-[100%]">
              {testdata.date}
            </div>
            <div className="mt-[48px] blind:text-dark-green text-text text-[40px] font-normal leading-[100%]">
              {testdata.eventData.map((data, index: number) => (
                <div
                  key={index}
                  className="blind:text-dark-green text-text text-[40px] font-normal leading-[100%] mb-[48px]"
                >
                  <div className="mb-[24px] text-[56px] font-bold">
                    {data.title}
                  </div>
                  {data.description}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
