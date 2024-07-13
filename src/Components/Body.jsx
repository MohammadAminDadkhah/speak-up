const Body = () => {
    return (
        <div className="flex font-body" dir="rtl">
            <img className="md:flex hidden" src={'src/assets/Vector(1).svg'} alt=""/>

            <div className="flex mx-[5%]  md:flex-row">

                <div className="lg:flex lg:mt-10 mt-24">
                    <div className="flex  basis-1/2">

                        <div className="flex flex-col mx-auto my-auto md:items-start items-center lg:basis-4/5">
                            <div className="xl:text-5xl sm:text-4xl text-3xl mb-6">
                                <div className="flex flex-row gap-2 mb-3 mr-2">
                                    یادگیری
                                    <div className="font-semibold text-[#0052CC]">زبان انگلیسی</div>
                                </div>

                                <div>در هر زمان و هر مکانی</div>
                            </div>

                            <p className="mb-6">
                                اینجا ما کمکت میکنیم بهترین و مناسب ترین دوره هارو
                                برای خودت انتخاب کنی، اگه کمک میخوای فقط از ما مشاوره بگیر.
                            </p>

                            <div>
                                <button
                                    className="md:bg-[#0052CC] bg-[#DDEBFF] border-[#0052CC] border-2 md:outline-none rounded p-2 px-5">
                                    <label className="md:text-slate-50 text-[#0052CC]">
                                        مشاوره رایگان
                                    </label>
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="flex basis-1/2">
                        <img className="sm:h-[33rem]" id="image" src={'src/assets/Group161.png'} alt=""/>
                    </div>

                </div>
            </div>
            <img className="ms-12 md:flex hidden" src={'src/assets/Vector.svg'} alt=""/>

        </div>
    )
}
export default Body;