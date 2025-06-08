type Props = {
    title: string,
    phone: string,
    address: string,
    workingHours: string,
    mail: string,
    info: string;
}

export default function Info(){
    return(
        <div className="z-2 w-full h-full fixed top-0 left-0 bg-[#00000099] flex justify-center items-center">
            <div className="w-[2000px] max-h-[3172px] bg-white rounded-[72px] p-[48px]">

            </div>
        </div>
    )
}