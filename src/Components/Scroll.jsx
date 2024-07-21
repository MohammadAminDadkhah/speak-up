import Heading from "./Heading.jsx";

const Scroll = () => {
    return (
        <div className="flex flex-col  items-center mt-32 font-body mx-8" dir="rtl">
            <Heading inputText="مقالات آموزشی" isWhite={true} />

            <div className="flex md:grid md:grid-cols-4 gap-6 overflow-auto snap-x articles mx-8 mt-10  margin">
                <div>
                    <img src="src/assets/rec2.png" alt="res1" className="rounded max-h-[10.5rem] mx-auto"/>
                    <p className="text-[#0052CC] mt-8 mb-2">12 بهمن 1402</p>
                    <h1>ضمایر مفعولی زبان انگلیسی</h1>
                    <p className="line-clamp-2 text-justify font-light">
                        برای یادگیری هر زبانی آموختن نحوه سوال پرسیدن از دیگران از اهمیت زیادی ...
                    </p>
                    <p className="text-[#0052CC] mr-[60%]">مشاهده مطلب</p>
                </div>

                <div>
                    <img src="src/assets/rec1.png" alt="res3" className="rounded max-h-[10.5rem] mx-auto"/>
                    <p className="text-[#0052CC] mt-8 mb-2">12 بهمن 1402</p>
                    <h1>ضمایر مفعولی زبان انگلیسی</h1>
                    <p className="line-clamp-2 text-justify font-light">
                        برای یادگیری هر زبانی آموختن نحوه سوال پرسیدن از دیگران از اهمیت زیادی ...
                    </p>
                    <p className="text-[#0052CC] mr-[60%]">مشاهده مطلب</p>
                </div>

                <div>
                    <img src="src/assets/rec2.png" alt="res3" className="rounded max-h-[10.5rem] mx-auto"/>
                    <p className="text-[#0052CC] mt-8 mb-2">12 بهمن 1402</p>
                    <h1>ضمایر مفعولی زبان انگلیسی</h1>
                    <p className="line-clamp-2 text-justify font-light">
                        برای یادگیری هر زبانی آموختن نحوه سوال پرسیدن از دیگران از اهمیت زیادی ...
                    </p>
                    <p className="text-[#0052CC] mr-[60%]">مشاهده مطلب</p>
                </div>

                <div>
                    <img src="src/assets/rec1.png" alt="res3" className="rounded max-h-[10.5rem] mx-auto"/>
                    <p className="text-[#0052CC] mt-8 mb-2">12 بهمن 1402</p>
                    <h1>ضمایر مفعولی زبان انگلیسی</h1>
                    <p className="line-clamp-2 text-justify font-light">
                        برای یادگیری هر زبانی آموختن نحوه سوال پرسیدن از دیگران از اهمیت زیادی ...
                    </p>
                    <p className="text-[#0052CC] mr-[60%]">مشاهده مطلب</p>
                </div>

            </div>

            <div
                className="flex justify-center w-fit bg-[#E2FAF4] border-[.1rem] border-[#1EB28F] py-3 px-6 rounded-[.40rem] gap-3 mt-8">
                <img src={'src/assets/c.svg'} alt="wda"/>
                <p className="text-[#1EB28F]">مشاهده همه مقالات</p>
            </div>


        </div>
    );
}
export default Scroll;