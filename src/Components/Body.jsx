const Body = () => {
    return (
        <div className="flex container mx-auto flex-row font-body" dir="rtl">
        <img className="flex " src={'src/assets/Vector(1).svg'} alt=""/>

            <div className=" mt-10 flex">
                <div className="flex  ms-12  basis-1/2">

                    <div className="flex flex-col mx-auto my-auto basis-4/5">
                        <div className="text-5xl mb-6">
                            <div className="flex flex-row gap-2 mb-3">
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
                            <button className="bg-[#0052CC] rounded p-2 px-5">
                                <label className="text-slate-50">
                                    مشاوره رایگان
                                </label>
                            </button>
                        </div>
                    </div>


                </div>

                <div className="flex basis-1/2">
                    <img className="h-[33rem]" id="image" src={'src/assets/Group161.png'} alt=""/>
                </div>

            </div>
            <img className="ms-12" src={'src/assets/Vector.svg'} alt=""/>
        </div>

    )
}
export default Body;