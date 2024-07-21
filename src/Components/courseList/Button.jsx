const Button = ({text, isActive, index, rounded}) => {
    const clickHandler = (event, selectedIndex) => {
        const parent = [...event.target.parentElement.children];
        parent.forEach((el, index) => {
            if (index === selectedIndex) {
                el.classList.add('active');
                el.classList.remove('diactive');
            } else {
                el.classList.add('diactive');
                el.classList.remove('active');
            }
        })

    }

    return (
        <button
            className={`text - xs sm:text-lg font-light
                ${isActive ? "active" : "diactive"} 
                ${rounded === "s" ? "rounded-s-[.3rem]" : ""}
                ${rounded === "e" ? "rounded-e-[.3rem]" : ""} p-2`} onClick={() => clickHandler(event, index)}>
            {text}
        </button>
    );
}
export default Button;