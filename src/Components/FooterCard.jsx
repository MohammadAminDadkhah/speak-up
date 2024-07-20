const FooterCard = ({img, text, mt, mt2}) => {

    return (
        <div className={`flex flex-col items-center min-w-[35%] sm:min-w-[10%] sm:max-w-[15%] md:min-w-[8%] md:max-w-[12%] lg:mt-${mt} mt-${mt2}`}>
            <img className="size-[80%] sm:size-[90%]" src={`src/assets/${img}`} alt=""/>
            <p className="text-white md:text-lg text-center">{text}</p>
        </div>
    );
}
export default FooterCard;