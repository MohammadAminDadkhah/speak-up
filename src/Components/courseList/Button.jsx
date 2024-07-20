const Button = ({text}) => {
    return (
        <button className="text-xs sm:text-lg active rounded-s-[.3rem] p-2">
            {text}
        </button>
    );
}
export default Button;