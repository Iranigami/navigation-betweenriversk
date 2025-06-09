import { useNavigate } from "react-router-dom";
import arrIcon from "../assets/icons/arrow.svg"
import { useEffect } from "react";

export default function Article(){
    const navigate = useNavigate();
    const testdata = {
        title: "Название тест 1",
        image: "https://s3.stroi-news.ru/img/yarkie-kartinki-na-zastavku-1.jpg",
        date: "15 мая",
        desc: "<strong>Lorem ipsum</strong><br/>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    useEffect(()=>{
        if (document.getElementById("info") && testdata.desc)
            document.getElementById("info")!.innerHTML = testdata.desc;
    },[])
    return(
        <div className="animate-fade-in w-full h-full fixed p-[80px]">
            <div className="w-[2000px] h-[220px] flex justify-between items-center">
                <div className="flex gap-[40px] items-center">
                    <button 
                        onClick={() => navigate("/news")}
                        className="size-[160px] bg-white rounded-[48px] p-[48px]">
                        <img src={arrIcon} alt="back" className="rotate-270 size-[64px]" />
                    </button>
                    <div className="text-light-green text-[100px] leading-[100%] font-bold">
                        {testdata.title}
                    </div>
                </div>
            </div>
            <div className="mt-[40px] w-[2000px] h-[3172px] bg-white rounded-[72px] p-[48px]">
                <div className="overflow-x-hidden overflow-y-auto rounded-[48px] w-[1904px] h-[3076px]">
                    <div className="w-[1864px]">
                        <div className="w-[1864px] h-[1048px] rounded-[48px] overflow-hidden">
                            <img src={testdata.image} alt="image" className="w-full h-full object-cover" />
                        </div>
                        <div className="mt-[48px] text-text text-[56px] font-bold leading-[100%]">
                            Время проведения
                        </div>
                        <div className="mt-[24px] text-text-second text-[80px] font-semibold leading-[100%]">
                            {testdata.date}
                        </div>
                        <div id="info" className="mt-[48px] text-text text-[40px] font-normal leading-[100%]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}