import { useState } from "react";
import Key from "./Key";
import close from "../assets/icons/close.svg";

type Props = {
  opened: boolean;
  enterButton: (letter: string) => void;
  onClose: () => void;
  onBackspace: () => void;
};

export default function Keyboard({
  opened,
  enterButton,
  onClose,
  onBackspace,
}: Props) {
  const [uppercase, setUppercase] = useState(0);
  const [isNumbersShown, setNumbersShown] = useState(false);
  return (
    <div
      className={`transition ${opened && "translate-y-[-388px]"} bottom-[-364px] duration-700 fixed absolute left-0 right-0 z-10 font-medium ml-[352px]`}
    >
      <div
        className={`mx-auto w-[1008px] h-[264px] rounded-[24px] bg-white text-[#2D3744] justify-center items-center text-center px-[68px] pt-[24px] font-normal`}
      >
        <div className="flex gap-[8px] justify-center items-center text-center">
          {!isNumbersShown &&
            ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"].map(
              (text: string, index: number) => (
                <Key
                  key={index}
                  text={uppercase ? text.toUpperCase() : text}
                  type="symbol"
                  className="w-[65px]"
                  clickHandler={() => {
                    enterButton(uppercase ? text.toUpperCase() : text);
                    setUppercase(0);
                  }}
                />
              ),
            )}
          {isNumbersShown &&
            ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map(
              (text: string, index: number) => (
                <Key
                  key={index}
                  text={text}
                  type="symbol"
                  className="w-[65px]"
                  clickHandler={() => {
                    enterButton(text);
                    if (uppercase !== 2) setUppercase(0);
                  }}
                />
              ),
            )}
        </div>
        <div className="flex gap-[8px] justify-center items-center text-center mt-[8px]">
          {!isNumbersShown &&
            ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"].map(
              (text: string, index: number) => (
                <Key
                  key={index}
                  text={uppercase ? text.toUpperCase() : text}
                  type="symbol"
                  className="w-[65px]"
                  clickHandler={() => {
                    enterButton(uppercase ? text.toUpperCase() : text);
                    if (uppercase !== 2) setUppercase(0);
                  }}
                />
              ),
            )}
          {isNumbersShown &&
            ["-", "/", ":", ";", "(", ")", "&", "@", '"'].map(
              (text: string, index: number) => (
                <Key
                  key={index}
                  text={text}
                  type="symbol"
                  className="w-[65px]"
                  clickHandler={() => {
                    enterButton(text);
                    if (uppercase !== 2) setUppercase(0);
                  }}
                />
              ),
            )}
        </div>
        <div className="flex gap-[8px] justify-center items-center text-center mt-[8px]">
          <Key
            shift={uppercase}
            text=""
            type="shift"
            className={`${!uppercase && "bg-[#F1852233] active:bg-[#F185220D]"} w-[104px]`}
            clickHandler={() =>
              setUppercase(uppercase !== 2 ? uppercase + 1 : 0)
            }
          />
          {!isNumbersShown &&
            ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "ё"].map(
              (text: string, index: number) => (
                <Key
                  key={index}
                  text={uppercase ? text.toUpperCase() : text}
                  type="symbol"
                  className="w-[65px]"
                  clickHandler={() => {
                    enterButton(uppercase ? text.toUpperCase() : text);
                    if (uppercase !== 2) setUppercase(0);
                  }}
                />
              ),
            )}
          {isNumbersShown &&
            [".", ",", "?", "!", "`"].map((text: string, index: number) => (
              <Key
                key={index}
                text={text}
                type="symbol"
                className="w-[93.4px]"
                clickHandler={() => {
                  enterButton(text);
                  if (uppercase !== 2) setUppercase(0);
                }}
              />
            ))}
          <Key
            text={""}
            type="backspace"
            className="w-[103px] bg-[#F1852233] active:bg-[#F185220D]"
            clickHandler={() => {
              onBackspace();
            }}
          />
        </div>
        <div className="flex gap-[8px] justify-center items-center text-center mt-[8px] font-medium">
          <Key
            text={!isNumbersShown ? "&123" : "АБВ"}
            type="nums"
            className="w-[140px] bg-[#F1852233] active:bg-[#F185220D]"
            clickHandler={() => setNumbersShown(!isNumbersShown)}
          />
          <Key
            text={"Пробел"}
            type="symbol"
            className={`${isNumbersShown ? "w-[574px]" : "w-[724px]"} font-medium`}
            clickHandler={() => {
              enterButton(" ");
              if (uppercase !== 2) setUppercase(0);
            }}
          />
        </div>
      </div>
      <div
        onClick={onClose}
        className="mt-[20px] w-[88px] h-[56px] rounded-[24px] bg-white mx-auto flex justify-center items-center"
      >
        <img src={close} alt="close" className="mx-auto" />
      </div>
    </div>
  );
}
