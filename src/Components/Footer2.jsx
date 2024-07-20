import {useState} from "react";

const Footer2 = () => {
    const [resPicture, setResPicture] = useState(
        [
            {
                name: "Group152.svg",
                show: true
            },
            {
                name: "Group151.svg",
                show: false
            },
            {
                name: "Group148.svg",
                show: false
            },
            {
                name: "Group149.svg",
                show: false
            },

        ]
    )

    const [resIndex, setResIndex] = useState(0)

    const scrollHandler = (arrow) => {
        if (arrow === 1) {
            setResPicture(x=> {
                if (resIndex + 1 === x.length - 1) {
                    x[resIndex].show = false;
                    x[0].show = true;
                    setResIndex(0);
                } else {
                    x[resIndex].show = false;
                    x[(resIndex + 1)].show = true;
                    setResIndex(resIndex + 1);
                }
                return [...x];
            })
        } else {
            setResPicture(x=> {
                if (resIndex - 1 === -1) {
                    x[resIndex].show = false;
                    x[3].show = true;
                    setResIndex(3);
                } else {
                    x[resIndex].show = false;
                    x[(resIndex - 1)].show = true;
                    setResIndex(resIndex - 1);
                }
                return [...x];
            })
        }
    }

    return (
        <div className="lg:-space-y-[30%] md:-space-y-[30%] sm:-space-y-[25%] -space-y-[45%] font-body">
            <div className="flex justify-center bg-[#F6F6F6]">
                <div>
                    <img className="w-screen" src={'src/assets/Vector4.svg'} alt=""/>
                    <img className="w-screen sm:mt-0 md:mt-0 lg:mt-0 mt-[30%]" src={'src/assets/Vector2.svg'} alt=""/>
                </div>
            </div>


            <div className="relative sm:hidden flex justify-center bg-[#E2FAF4]">

                <div className="absolute -top-2 flex flex-col">
                    <h1 className="z-20 text-[1rem] text-[#0052CC]">نقاط قوت و وجه تمایز ما</h1>
                    <img className="z-20 mx-auto" src={'src/assets/speakupunder.svg'} alt="asd"/>
                </div>

                <div className=" flex justify-center bg-[#E2FAF4]">
                    <img className="z-20 absolute w-[10%] -top-3 right-12"
                         src={'src/assets/rainbow.svg'} alt="asd"/>
                    <img className="z-20 absolute w-[10%] ltop-0 left-12"
                         src={'src/assets/Planet.svg'} alt="asd"/>
                </div>


                <div className="z-10 absolute  top-1 flex justify-around bg-[#E2FAF4] px-12 pt-8">
                    <img className="w-[8%]" src={'src/assets/Vector(10).svg'} alt=""
                         onClick={() => scrollHandler(1)}/>

                    {resPicture.map((item, index) => (
                        item.show ?
                            <img className="w-[48%]" src={`src/assets/${item.name}`} key={index} alt="a"/> : null
                    ))}

                    <img className="w-[8%]" src={'src/assets/Vector(11).svg'} alt=""
                         onClick={() => scrollHandler(2)}/>
                </div>

            </div>


            <div className="relative hidden sm:flex justify-center">

                <div className="absolute lg:top-24 md:top-16 flex flex-col mt-4">
                    <h1 className="lg:text-2xl md:text-xl text-[#0052CC]">نقاط قوت و وجه تمایز ما</h1>
                    <img className="mx-auto" src={'src/assets/speakupunder.svg'} alt="asd"/>
                </div>

                <div className="flex justify-center">
                    <img className="absolute w-[10%] lg:top-[4rem] md:top-[2.5rem] right-28"
                         src={'src/assets/rainbow.svg'} alt="asd"/>
                    <img className="absolute w-[10%] lg:top-[4rem] md:top-[2.5rem] left-24"
                         src={'src/assets/Planet.svg'} alt="asd"/>
                </div>

                <div className="absolute lg:top-44 justify-center sm:top-12 md:top-28 flex flex-row gap-4">
                    <img className="w-[3%]" src={'src/assets/Vector(10).svg'} alt=""/>
                    <img className="lg:w-[20%] sm:w-[15%]" src={'src/assets/Group148.svg'} alt=""/>
                    <img className="lg:w-[20%] sm:w-[15%]" src={'src/assets/Group149.svg'} alt=""/>
                    <img className="lg:w-[20%] sm:w-[15%]" src={'src/assets/Group151.svg'} alt=""/>
                    <img className="lg:w-[20%] sm:w-[15%]" src={'src/assets/Group152.svg'} alt=""/>
                    <img className="w-[3%]" src={'src/assets/Vector(11).svg'} alt=""/>

                </div>
            </div>
        </div>
    );
}
export default Footer2;