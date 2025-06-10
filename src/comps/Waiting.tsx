import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Waiting() {
  const [isUserInactive, setUserInactive] = useState(false);
  let time: number;
  let exit: number;
  const resetTimer = () => {
    clearTimeout(time);
    clearTimeout(exit);
    time = setTimeout(() => {
      setUserInactive(true);
      exit = setTimeout(() => {navigate("/map"); location.reload()}, 15000)
    }, 60000); //1min of inactivity
  };
  document.addEventListener("touchstart", resetTimer);
  const navigate = useNavigate();
  useEffect(() => {
    clearTimeout(time);
    clearTimeout(exit);
    time = setTimeout(() => {
      setUserInactive(true);
      exit = setTimeout(() => {navigate("/map"); location.reload()}, 15000)
    }, 60000); //1min of inactivity
  }, []);

  return (
    <>
      {isUserInactive && (
        <div
            className="z-10 w-full h-full fixed top-0 bg-[#00000099] flex justify-center items-center"> 
            <div
                onClick={() => {
                    setUserInactive(false);
                    resetTimer;
                }}
                className="w-full h-full absolute fixed z-0"/>
            <div
                className="w-[1664px] h-[700px] rounded-[72px] px-[48px] bg-white z-10">
            <div className="mt-[48px] text-light-green text-[120px] leading-[100%] text-center font-bold">
                Завершение сеанса
            </div>
            <div className="mt-[48px] text-text text-[56px] leading-[100%] text-center font-bold">
                Из-за отсутствия активности программа скоро вернётся в главное меню
            </div>
            <div className="mt-[48px] text-text-second text-[42px] leading-[100%] text-center font-bold">
                Вы можете нажать в любое место экрана, чтобы возобновить работу
            </div>
            <button
                onClick={() => {
                    setUserInactive(false);
                    resetTimer;
                }}

                className="mb-[48px] mt-[48px] w-[1568px] h-[144px] rounded-[48px] flex justify-center items-center border-[4px] border-light-green text-light-green font-semibold text-[48px] leading-[100%] text-center"
                >
                Отмена
                </button>
            </div>
        </div>
      )}
    </>
  );
}
