const Scroll = () => {
    return (
        <div className="flex flex-col items-center mt-32 font-body mx-8" dir="rtl">
            <div className="flex flex-col items-center">
                <h1 className="text-xl">مقالات آموزشی</h1>
                <img src={'src/assets/speakupunder.svg'} alt=""/>
            </div>

            <div></div>

            <div className="flex justify-center w-fit bg-[#E2FAF4] border-[.1rem] border-[#1EB28F] py-3 px-6 rounded-[.40rem] gap-3 mt-8">
                <img src={'src/assets/c.svg'} alt="wda"/>
                <p className="text-[#1EB28F]">مشاهده همه مقالات</p>
            </div>



        </div>
    );
}
export default Scroll;