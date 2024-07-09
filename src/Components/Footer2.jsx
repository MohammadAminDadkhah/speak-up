const Footer2 = () => {
    return (
        <div className="relative flex justify-center">
            <div>
                <img className="w-screen" src={'src/assets/Vector4.svg'} alt=""/>
                <img className="w-screen" src={'src/assets/Vector2.svg'} alt=""/>
            </div>

            <div className="absolute top-28 flex flex-col">
                <h1 className="text-2xl text-[#0052CC]">نقاط قوت و وجه تمایز ما</h1>
                <img className="mx-auto" src={'src/assets/speakupunder.svg'} alt="asd"/>
            </div>

            <div className="flex justify-center">
                <img className="absolute top-[9.5rem]" src={'src/assets/speakupunder.svg'} alt="asd"/>
                <img className="absolute top-[4rem] right-56" src={'src/assets/rainbow.svg'} alt="asd"/>
                <img className="absolute top-[4rem] left-56" src={'src/assets/Planet.svg'} alt="asd"/>
            </div>

            <div className="absolute top-[30%] flex flex-row">
                <img src={'src/assets/Group148.svg'} alt=""/>
                <img src={'src/assets/Group149.svg'} alt=""/>
                <img src={'src/assets/Group151.svg'} alt=""/>
                <img src={'src/assets/Group152.svg'} alt=""/>
            </div>
        </div>
    );
}
export default Footer2;