const Footer2 = () => {
    const mobileScroll = ["Group152.svg", "Group151.svg", "Group148.svg"];
    const scrollHandler = (arrow,e) => {
        if (arrow === 1) {
            const index= mobileScroll.findIndex(item => item === e.target.nextSibling.id);
            e.target.nextSibling.src = `src/assets/${mobileScroll[(index - 1) % mobileScroll.length]}`;
            e.target.nextSibling.id = mobileScroll[(index - 1) % mobileScroll.length];

            if(index === 0){
                e.target.nextSibling.src = `src/assets/${mobileScroll[2]}`;
                e.target.nextSibling.id = mobileScroll[2];
            }

        } else {
            const index= mobileScroll.findIndex(item => item === e.target.previousSibling.id);
            e.target.previousSibling.src = `src/assets/${mobileScroll[(index + 1) % mobileScroll.length]}`;
            e.target.previousSibling.id = mobileScroll[(index + 1) % mobileScroll.length];
        }
    }

    return (
        <div className="lg:-space-y-[30%] md:-space-y-[30%] sm:-space-y-[25%] -space-y-[45%]">
            <div className="flex justify-center bg-[#F6F6F6]">
                <div>
                    <img className="w-screen" src={'src/assets/Vector4.svg'} alt=""/>
                    <img className="w-screen sm:mt-0 md:mt-0 lg:mt-0 mt-[30%]" src={'src/assets/Vector2.svg'} alt=""/>
                </div>
            </div>


            <div className="relative sm:hidden flex justify-center bg-[#E2FAF4]">

                <div className="absolute top-0 flex flex-col">
                    <h1 className="z-20 text-xs text-[#0052CC]">نقاط قوت و وجه تمایز ما</h1>
                    <img className="z-20 mx-auto" src={'src/assets/speakupunder.svg'} alt="asd"/>
                </div>

                <div className=" flex justify-center bg-[#E2FAF4]">
                    <img className="z-20 absolute w-[8%] top-0 right-12"
                         src={'src/assets/rainbow.svg'} alt="asd"/>
                    <img className="z-20 absolute w-[8%] ltop-0 left-12"
                         src={'src/assets/Planet.svg'} alt="asd"/>
                </div>


                <div className="z-10 absolute  top-1 flex justify-around bg-[#E2FAF4] px-12 pt-8">
                    <img className="w-[8%]" src={'src/assets/Vector(10).svg'} alt="" onClick={()=>scrollHandler(1,event)}/>

                    <img className="w-[40%]" src={`src/assets/${mobileScroll[1]}`} id={`${mobileScroll[1]}`} alt=""/>

                    <img className="w-[8%]" src={'src/assets/Vector(11).svg'} alt="" onClick={()=>scrollHandler(2,event)}/>
                </div>

            </div>


            <div className="relative hidden sm:flex justify-center">

                <div className="absolute lg:top-28 md:top-16 flex flex-col">
                    <h1 className="lg:text-2xl md:text-xl text-[#0052CC]">نقاط قوت و وجه تمایز ما</h1>
                    <img className="mx-auto" src={'src/assets/speakupunder.svg'} alt="asd"/>
                </div>

                <div className="flex justify-center">
                    <img className="absolute w-[10%] lg:top-[4rem] md:top-[2.5rem] right-28"
                         src={'src/assets/rainbow.svg'} alt="asd"/>
                    <img className="absolute w-[10%] lg:top-[4rem] md:top-[2.5rem] left-24"
                         src={'src/assets/Planet.svg'} alt="asd"/>
                </div>

                <div className="absolute lg:top-44 justify-center sm:top-12 md:top-28 flex flex-row">
                    <img className="lg:w-[20%] sm:w-[15%]" src={'src/assets/Group148.svg'} alt=""/>
                    <img className="lg:w-[20%] sm:w-[15%]" src={'src/assets/Group149.svg'} alt=""/>
                    <img className="lg:w-[20%] sm:w-[15%]" src={'src/assets/Group151.svg'} alt=""/>
                    <img className="lg:w-[20%] sm:w-[15%]" src={'src/assets/Group152.svg'} alt=""/>
                </div>
            </div>
        </div>
    );
}
export default Footer2;