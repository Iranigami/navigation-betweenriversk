import { useEffect, useState } from "react";

type Props = {
    data: {
        title: string,
        image: string,
        phone: string,
        address: string,
        workingHours: string,
        mail: string,
        info?: string;
    }
    onClose: () => void;
}

export default function Info({data, onClose}: Props){
    const [keepOpen, setKeepOpen] = useState(false);
    useEffect(()=>{
        if (document.getElementById("infoHandler") && data.info)
            document.getElementById("infoHandler")!.innerHTML = data.info;
    },[])
    return(
        <div className={`animate-fade-in z-100 w-full h-full fixed top-0 left-0 bg-[#00000099] flex justify-center items-center duration-300 transition ${keepOpen && "opacity-0"}`}>
            <div className="w-[2000px] max-h-[3172px] bg-white rounded-[72px] p-[48px]">
                <div className="text-light-green text-[120px] font-bold leading-[100%]">
                    {data.title}
                </div>
                <div className="mt-[48px] w-[1904px] h-[1070.49px] rounded-[48px] overflow-hidden">
                    <img src={data.image} alt="image" className="w-full h-full object-cover" />
                </div>
                <div className="mt-[24px] grid grid-cols-2 gap-[16px]">
                    <div className="w-[944px] h-[210px] text-center rounded-[48px] bg-[#04341C0D] p-[48px]">
                        <div className="text-[42px] text-text font-bold leading-[100%]">
                            Телефон
                        </div>
                        <div className="text-[48px] text-text font-normal leading-[100%] mt-[16px]">
                            {data.phone}
                        </div>
                    </div>
                    <div className="w-[944px] h-[210px] text-center rounded-[48px] bg-[#04341C0D] p-[48px]">
                        <div className="text-[42px] text-text font-bold leading-[100%]">
                            Адрес
                        </div>
                        <div className="text-[48px] text-text font-normal leading-[100%] mt-[16px]">
                            {data.address}
                        </div>
                    </div>
                    <div className="w-[944px] h-[210px] text-center rounded-[48px] bg-[#04341C0D] p-[48px]">
                        <div className="text-[42px] text-text font-bold leading-[100%]">
                            Режим работы
                        </div>
                        <div className="text-[48px] text-text font-normal leading-[100%] mt-[16px]">
                            {data.workingHours}
                        </div>
                    </div>
                    <div className="w-[944px] h-[210px] text-center rounded-[48px] bg-[#04341C0D] p-[48px]">
                        <div className="text-[42px] text-text font-bold leading-[100%]">
                            Почта
                        </div>
                        <div className="text-[48px] text-text font-normal leading-[100%] mt-[16px]">
                            {data.mail}
                        </div>
                    </div>
                </div>
                {data.info && <div id="infoHandler" className="mt-[48px] text-text text-[40px]"/>}
                <div className="mt-[48px] flex justify-center gap-[16px]">
                    <button className="w-[944px] h-[144px] rounded-[48px] bg-light-green text-white flex justify-center items-center text-[48px] font-semibold leading-[100%]">
                        Построить маршрут
                    </button>
                    <button 
                        onClick={ () =>
                            {
                                setKeepOpen(true);
                                setTimeout(onClose, 300);
                            }}
                        className="w-[944px] h-[144px] rounded-[48px] text-light-green bg-white border-[4px] border-light-green flex justify-center items-center text-[48px] font-semibold leading-[100%]">
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    )
}