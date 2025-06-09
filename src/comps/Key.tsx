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
      className={`h-[48px] flex justify-center items-center text-center rounded-[8px] text-[18px] bg-[#F185220D] ${className} active:bg-[#F1852233] shadow-[0px_2px_0px_0px_#0000004D]`}
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
