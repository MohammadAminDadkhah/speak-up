const CourseList = () => {
    return (
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center font-body mx-8" dir="rtl">
            <div className="flex flex-col items-center text-2xl">
                <p>دوره های آموزشی </p>
                <img src={'src/assets/speakupunder.svg'} alt=""/>
            </div>

            <div className="mt-8 grid grid-cols-3">
                <button className="text-xs bg-[#1EB28F] text-[#FEFEFE] px-[.35rem] border-[#1EB28F] border-[0.1rem] rounded-s-[.3rem]">کودکان 6 تا 12 سال</button>
                <button className="text-xs bg-[#E2FAF4] text-[#1EB28F] px-[.35rem] border-[#1EB28F] border-[0.1rem] border-l-0">نوجوانان</button>
                <button className="text-xs bg-[#E2FAF4] text-[#1EB28F] px-[.35rem] border-[#1EB28F] border-[0.1rem] rounded-e-[.3rem]">بزرگسالان</button>
            </div>

            <div className="flex flex-row gap-2 px-2 py-3 rounded-xl bg-[#FEFEFE] mt-5">
                <img className="basis-1/3" src={'src/assets/10.svg'} alt=""/>
                <div className="flex flex-col basis-2/3">
                    <div className="basis-3/4 flex flex-col sm:flex-row items-start border-b-2  border-[#E0E0E0] justify-evenly">
                        <h1 className="bg-[#F0F9FF] text-[#0E96FD] px-7 rounded">ویژه کودکان</h1>
                        <p>دوره آموزشی Alphaplus </p>
                        <img className="w-[70%]" src={'src/assets/50.svg'} alt=""/>
                    </div>
                    <h1 className="text-[#0EB465] mt-2">ثبت نام</h1>
                </div>
            </div>
        </div>
    );
}
export default CourseList;