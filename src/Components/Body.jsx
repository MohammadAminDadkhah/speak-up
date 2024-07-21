const Body = () => {
    return (
        <div className="flex font-body" dir="rtl">
            <img className="lg:flex hidden mr-16" src={'src/assets/Vector(1).svg'} alt=""/>

            <div className="flex lg:mx-[1%] mx-[6.8%] md:flex-row">

                <div className="lg:flex lg:mt-10 mt-24">
                    <div className="flex  basis-1/2">

                        <div className="flex flex-col mx-auto my-auto md:items-start items-center lg:basis-4/5">
                            <div className="xl:text-4xl sm:text-[1.8rem] text-3xl mb-6">
                                <div className="flex flex-row gap-2 mb-3 mr-2 text-justify">
                                    یادگیری
                                    <div className="text-[#0052CC] font-bold">زبان انگلیسی</div>
                                </div>

                                <div>در هر زمان و هر مکانی</div>
                            </div>

                            <p className="mb-6 text-center sm:text-start">
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

                    <div className="flex basis-3/5 justify-center mt-10 lg:ml-16">
                        <img className="sm:size-[100%] size-[98%]" id="image" src={'src/assets/Group161.png'} alt=""/>
                    </div>

                </div>
            </div>
            <img className="lg:flex hidden ml-16" src={'src/assets/Vector.svg'} alt=""/>

        </div>
    )
}
export default Body;