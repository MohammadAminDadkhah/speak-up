const FooterCard = ({img, text}) => {

    return (
        <div className="flex flex-col min-w-[35%] sm:min-w-[10%] sm:max-w-[15%] md:min-w-[8%] md:max-w-[12%]">
            <img src={`src/assets/${img}`} alt=""/>
            <p className="text-white md:text-lg text-center">{text}</p>
        </div>
    );
}
export default FooterCard;