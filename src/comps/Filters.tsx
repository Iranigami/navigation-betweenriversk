import { useState } from "react";
import checkIconActive from "../assets/icons/check-active.svg";
import checkIconInactive from "../assets/icons/check-inactive.svg";
import blindCheck from "../assets/icons/checkBlind.svg";

type Props = {
  onReset: () => void;
  onClose: () => void;
  onSetFiltered: (filters: string[]) => void;
  selectedFilters: string[];
};

export default function Filters({
  onReset,
  onClose,
  onSetFiltered,
  selectedFilters,
}: Props) {
  const [keepOpen, setKeepOpen] = useState(false);
  const [currentFilters, setcurrentFilters] =
    useState<string[]>(selectedFilters);
  const filters = [
    "Гостиницы и отели",
    "Рестораны и места общения",
    "Достопримечательности",
    "Проекты",
  ];
  return (
    <div
      className={`animate-fade-in z-100 w-full h-full fixed top-0 left-0 bg-[#00000099] flex justify-center items-center duration-300 transition ${keepOpen && "opacity-0"}`}
    >
      <div className="w-[2000px] max-h-[3172px] bg-white rounded-[72px] p-[48px]">
        <div className="text-[120px] blind:text-dark-green text-light-green font-bold text-left flex justify-between items-center">
          Фильтры
          <button
            onClick={() => {
              onReset();
              setKeepOpen(true);
              setTimeout(onClose, 300);
            }}
            className="w-fill h-full flex items-center blind:text-text text-text-second text-[48px] font-semibold leading-[100%]"
          >
            Сбросить
          </button>
        </div>
        <div className="mt-[24px] w-[1904px]">
          {filters.map((filter, index: number) => (
            <div
              onClick={() => {
                if (!currentFilters.some((item) => item === filter)) {
                  setcurrentFilters([...currentFilters, filter]);
                } else {
                  const updatedFilters = currentFilters.filter(
                    (item) => !(item === filter),
                  );
                  setcurrentFilters(updatedFilters);
                }
              }}
              key={index}
              className={`items-center flex mb-[24px] w-[1904px] h-[160px] rounded-[48px] p-[48px] text-[48px] gap-[16px] font-semibold ${currentFilters.includes(filter) ? "bg-[#71BF451A] text-light-green blind:bg-[#04341C1A] blind:text-dark-green" : "bg-white text-text-second blind:text-dark-green"}`}
            >
              <img
                hidden={currentFilters.includes(filter)}
                src={checkIconInactive}
                alt="check"
                className="size-[64px]"
              />
              <img
                hidden={!currentFilters.includes(filter)}
                src={checkIconActive}
                alt="check"
                className="size-[64px] blind:hidden"
              />
              <img
                hidden={!currentFilters.includes(filter)}
                src={blindCheck}
                alt="check"
                className="size-[64px] hidden blind:inline"
              />
              {filter}
            </div>
          ))}
        </div>
        <div className="mt-[48px] flex justify-center gap-[16px]">
          <button
            onClick={() => {
              onSetFiltered(currentFilters);
              setKeepOpen(true);
              setTimeout(onClose, 300);
            }}
            disabled={currentFilters.length === 0}
            className="disabled:opacity-20 w-[944px] h-[144px] blind:bg-dark-green rounded-[48px] bg-light-green text-white flex justify-center items-center text-[48px] font-semibold leading-[100%]"
          >
            Применить
          </button>
          <button
            onClick={() => {
              setKeepOpen(true);
              setTimeout(onClose, 300);
            }}
            className="blind:text-dark-green blind:border-dark-green w-[944px] h-[144px] rounded-[48px] text-light-green bg-white border-[4px] border-light-green flex justify-center items-center text-[48px] font-semibold leading-[100%]"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
