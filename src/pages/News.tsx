import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Vector.svg"
import Info from "../comps/Info";

export default function News() {
    const navigate = useNavigate();
    const tempNews = [
        {
            title: "Тест 1",
            date: "15 мая",
            shortDesc: "Lorem ipsum test",
            image: "https://ir-3.ozone.ru/s3/multimedia-m/c1000/6726566866.jpg",
            id: 0
        },
        {
            title: "Тест 2",
            date: "15 june",
            shortDesc: "Lorem ipsum test",
            image: "https://i.pinimg.com/originals/30/a0/2b/30a02b9d7517d5b27803c8180d8123c6.jpg",
            id: 1
        },
        {
            title: "Тест 3",
            date: "15 мая",
            shortDesc: "Lorem ipsum test",
            image: "https://images.steamusercontent.com/ugc/1798619448273576792/547F052ACABAEF2A8117012F2A28D42B4ABE9E74/?imw=512&amp;imh=579&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
            id: 2
        },
    ];
    return(
        <div className="z-1 w-full h-full fixed top-0 left-0 p-[80px]">
            <div className="w-[2000px] h-[220px] flex justify-between items-center text-light-green text-[120px] font-bold leading-[100%]">
                    Новости и события
            </div>
            <div className="mt-[40px] w-[2000px] h-[3172px] bg-white rounded-[72px] p-[48px]">
                <div className="overflow-x-hidden overflow-y-auto w-[1904px] h-[3076px]">
                {tempNews.map((article, index: number)=>(
                    <div key={index} className="w-[1864px] h-[726px] bg-[#71BF451A] rounded-[48px] mb-[24px] p-[48px] flex gap-[32px] items-center">
                        <div className="size-[630px] rounded-[20px] overflow-hidden">
                            <img src={article.image} alt="image" className="object-cover w-full h-full" />
                        </div>
                        <div className="w-[1106px] h-[630px]">
                            <div className="w-[1106px] h-[486px] overflow-auto ">
                                <div className="text-light-green text-[56px] font-bold leading-[100%]">
                                    {article.title}
                                </div>
                                <div className="mt-[12px] text-text-second text-[40px] font-semibold leading-[100%]">
                                    {article.date}
                                </div>
                                <div className="mt-[32px] text-text text-[40px] font-normal leading-[100%]">
                                    {article.shortDesc}
                                </div>
                            </div>
                            <button 
                                onClick={() => navigate(`/newsarticle?id=${article.id}`)}
                                className="mt-[32px] ml-[716px] w-[390px] h-[112px] rounded-[24px] bg-light-green text-white text-[48px] flex justify-center items-center font-semibold leading-[100%]">
                                    Подробнее
                            </button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <Info/>
        </div>
    )
}