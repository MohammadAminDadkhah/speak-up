const Heading = ({inputText, isWhite = false, color}) => {
    const image = isWhite ? "speakupunder.svg" : "speakupunderw.svg";
    return (
        <div className="flex flex-col items-center mx-4">
            <p className={`text-lg sm:text-xl text-${color} text-center mt-3`}>{inputText}</p>
            <img src={`src/assets/${image}`} alt=""/>
        </div>

    );
}
export default Heading;