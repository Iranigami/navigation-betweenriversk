import { useState } from "react";
import Key from "./Key";
import close from "../assets/icons/close.svg";
import blindClose from "../assets/icons/blindCloseBig.svg";

type Props = {
  enterButton: (letter: string) => void;
  onClose: () => void;
  onBackspace: () => void;
};

export default function Keyboard({ enterButton, onClose, onBackspace }: Props) {
  const [uppercase, setUppercase] = useState(0);
  return (
    <div className={`left-0 right-0 z-10 font-medium`}>
      <div
        className={`mx-auto w-[2000px] h-[528px] rounded-[72px] shadow-footer bg-white text-text blind:text-dark-green justify-center items-center text-center p-[48px] font-normal`}
      >
        <div className="flex gap-[16px] justify-center items-center text-center">
          {["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"].map(
            (text: string, index: number) => (
              <Key
                key={index}
                text={uppercase ? text.toUpperCase() : text}
                type="symbol"
                className="w-[130px]"
                clickHandler={() => {
                  enterButton(uppercase ? text.toUpperCase() : text);
                  setUppercase(0);
                }}
              />
            ),
          )}
        </div>
        <div className="flex gap-[16px] justify-center items-center text-center mt-[16px]">
          {["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"].map(
            (text: string, index: number) => (
              <Key
                key={index}
                text={uppercase ? text.toUpperCase() : text}
                type="symbol"
                className="w-[130px]"
                clickHandler={() => {
                  enterButton(uppercase ? text.toUpperCase() : text);
                  if (uppercase !== 2) setUppercase(0);
                }}
              />
            ),
          )}
        </div>
        <div className="flex gap-[16px] justify-center items-center text-center mt-[16px]">
          <Key
            shift={uppercase}
            text=""
            type="shift"
            className={`${!uppercase && "bg-light-green blind:bg-dark-green blind"} w-[208px]`}
            clickHandler={() =>
              setUppercase(uppercase !== 2 ? uppercase + 1 : 0)
            }
          />
          {["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "ё"].map(
            (text: string, index: number) => (
              <Key
                key={index}
                text={uppercase ? text.toUpperCase() : text}
                type="symbol"
                className="w-[130px]"
                clickHandler={() => {
                  enterButton(uppercase ? text.toUpperCase() : text);
                  if (uppercase !== 2) setUppercase(0);
                }}
              />
            ),
          )}
          <Key
            text={""}
            type="backspace"
            className="w-[206px] bg-light-green blind:bg-dark-green"
            clickHandler={() => {
              onBackspace();
            }}
          />
        </div>
        <div className="flex gap-[16px] justify-center items-center text-center mt-[16px] font-medium">
          <Key
            text={"Пробел"}
            type="symbol"
            className={`w-[1300px] font-medium`}
            clickHandler={() => {
              enterButton(" ");
              if (uppercase !== 2) setUppercase(0);
            }}
          />
        </div>
      </div>
      <div
        onClick={onClose}
        className="shadow-footer mt-[40px] w-[192px] h-[128px] rounded-[48px] bg-white mx-auto flex justify-center items-center"
      >
        <img src={close} alt="close" className="mx-auto blind:hidden" />
        <img
          src={blindClose}
          alt="close"
          className="mx-auto absolute opacity-0 blind:opacity-100"
        />
      </div>
    </div>
  );
}
