import backspace from "../assets/icons/backspace-inactive.svg";
import shift0 from "../assets/icons/Shift0.svg";
import shift1 from "../assets/icons/Shift1.svg";
import shift2 from "../assets/icons/Shift2.svg";

type Props = {
  type: string;
  text: string;
  className?: string;
  clickHandler?: () => void;
  shift?: number;
};

export default function Key({
  type,
  text,
  className,
  clickHandler,
  shift,
}: Props) {
  return (
    <button
      className={`h-[96px] flex justify-center items-center text-center rounded-[16px] text-[36px] bg-[#71BF451A] blind:bg-[#71BF450D] ${className} active:bg-[#04341C26] shadow-[0px_2px_0px_0px_#0B461B4D]`}
      onClick={clickHandler}
    >
      {text}
      {type === "backspace" && <img src={backspace} alt="backspace" />}
      {type === "shift" && (
        <>
          <img hidden={shift != 0} src={shift0} alt="shift" />
          <img hidden={shift != 1} src={shift1} alt="shift" />
          <img hidden={shift != 2} src={shift2} alt="shift" />
        </>
      )}
    </button>
  );
}
