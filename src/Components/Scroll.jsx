const Scroll = () => {
    return (
        <div className="flex flex-col  items-center mt-32 font-body mx-8" dir="rtl">
            <div className="flex flex-col items-center">
                <h1 className="text-xl">مقالات آموزشی</h1>
                <img src={'src/assets/speakupunder.svg'} alt=""/>
            </div>

            <div className="flex md:grid md:grid-cols-4 gap-6 overflow-auto snap-x articles mx-8">
                <div>
                    <img src="src/assets/rec2.png" alt="res1" className="rounded max-h-[10.5rem] mx-auto"/>
                    <p className="text-[#0052CC] mt-8 mb-2">12 بهمن 1402</p>
                    <h1>ضمایر مفعولی زبان انگلیسی</h1>
                    <p>
                        برای یادگیری هر زبانی آموختن نحوه سوال پرسیدن از دیگران از اهمیت زیادی ...
                    </p>
                    <p className="text-[#0052CC] mr-[60%]">مشاهده مطلب</p>
                </div>

                <div>
                    <img src="src/assets/rec1.png" alt="res3" className="rounded max-h-[10.5rem] mx-auto"/>
                    <p className="text-[#0052CC] mt-8 mb-2">12 بهمن 1402</p>
                    <h1>ضمایر مفعولی زبان انگلیسی</h1>
                    <p>
                        برای یادگیری هر زبانی آموختن نحوه سوال پرسیدن از دیگران از اهمیت زیادی ...
                    </p>
                    <p className="text-[#0052CC] mr-[60%]">مشاهده مطلب</p>
                </div>

                <div>
                    <img src="src/assets/rec2.png" alt="res3" className="rounded max-h-[10.5rem] mx-auto"/>
                    <p className="text-[#0052CC] mt-8 mb-2">12 بهمن 1402</p>
                    <h1>ضمایر مفعولی زبان انگلیسی</h1>
                    <p>
                        برای یادگیری هر زبانی آموختن نحوه سوال پرسیدن از دیگران از اهمیت زیادی ...
                    </p>
                    <p className="text-[#0052CC] mr-[60%]">مشاهده مطلب</p>
                </div>

                <div>
                    <img src="src/assets/rec1.png" alt="res3" className="rounded max-h-[10.5rem] mx-auto"/>
                    <p className="text-[#0052CC] mt-8 mb-2">12 بهمن 1402</p>
                    <h1>ضمایر مفعولی زبان انگلیسی</h1>
                    <p>
                        برای یادگیری هر زبانی آموختن نحوه سوال پرسیدن از دیگران از اهمیت زیادی ...
                    </p>
                    <p className="text-[#0052CC] mr-[60%]">مشاهده مطلب</p>
                </div>

            </div>

            {/*<div className="flex snap-x w-screen overflow-scroll mt-8 gap-6">*/}
            {/*    <div className="snap-start flex min-w-full w-1/4 flex-col items-center bg-[#FEFEFE] p-3 gap-2 rounded-xl">*/}
            {/*        <img className="h-[8.5rem]" src={'src/assets/rec3.png'} alt=""/>*/}
            {/*        <p className="text-[#0052CC] -mr-40 mt-8">12 بهمن 1402</p>*/}
            {/*        <h1>ضمایر پرسشی در زبان انگلیسی</h1>*/}
            {/*        <p>برای یادگیری هر زبانی آموختن نحوه سوال پرسیدن از دیگران از اهمیت زیادی ...</p>*/}
            {/*        <button className="text-[#0052CC] -ml-56">مشاهده مطلب</button>*/}
            {/*    </div>*/}

            {/*    <div className="snap-start flex min-w-full w-1/4 flex-col items-center bg-[#FEFEFE] p-3 gap-2 rounded-xl">*/}
            {/*        <img src="src/assets/rec2.png" alt=""/>*/}
            {/*        <p className="text-[#0052CC] -mr-56 mt-8">12 بهمن 1402</p>*/}
            {/*        <h1>ضمایر پرسشی در زبان انگلیسی</h1>*/}
            {/*        <p>برای یادگیری هر زبانی آموختن نحوه سوال پرسیدن از دیگران از اهمیت زیادی ...</p>*/}
            {/*        <button className="text-[#0052CC] -ml-56">مشاهده مطلب</button>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div
                className="flex justify-center w-fit bg-[#E2FAF4] border-[.1rem] border-[#1EB28F] py-3 px-6 rounded-[.40rem] gap-3 mt-8">
                <img src={'src/assets/c.svg'} alt="wda"/>
                <p className="text-[#1EB28F]">مشاهده همه مقالات</p>
            </div>


        </div>
    );
}
export default Scroll;