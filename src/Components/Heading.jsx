const Heading = ({inputText, isWhite = false, color, mt=''}) => {
    const image = isWhite ? "speakupunder.svg" : "speakupunderw.svg";
    const maTop = mt;
    console.log(maTop)
    return (
        <div className={`flex flex-col items-center mx-4 mt-8 sm:mt-[${maTop}]`}>
            <p className={`text-lg sm:text-[1.5rem] text-[${color}] text-center mt-3 mb-2`}>{inputText}</p>
            <img src={`src/assets/${image}`} alt=""/>
        </div>

    );
}
export default Heading;