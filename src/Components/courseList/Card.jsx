import './Style.css'
const Card = ({image, title, text, image2, buttonText}) => {
    return (
        <div className="flex flex-row gap-2 px-2 py-3 rounded-xl bg-[#FEFEFE] mt-5 card">
            <img className="basis-1/3" src={`src/assets/${image}`} alt=""/>
            <div className="flex flex-col basis-2/3">
                <div
                    className="basis-3/4 flex flex-col items-start border-b-2  border-[#E0E0E0] justify-evenly">
                    <h1 className="bg-[#F0F9FF] text-[#0E96FD] px-7 rounded">{title}</h1>
                    <p>{text}</p>
                    <img className="w-[70%]" src={`src/assets/${image2}`} alt=""/>
                </div>
                <h1 className="text-[#0EB465] mt-2">{buttonText}</h1>
            </div>
        </div>
    );
}

export default Card;