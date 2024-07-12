const End = () => {
    return (
        <div className="flex flex-col justify-between font-body" dir="rtl">
            <div className="bg-gradient-to-b from-[#0052CC] to-[#23D0A6] mt-20 rounded-t-3xl">
                <div className="flex flex-row items-start mt-5 mx-8 gap-4">
                    <img className="h-[1.6rem] mt-2" src={'src/assets/102.svg'} alt=""/>
                    <div className="flex flex-col">
                        <h1 className="text-xl text-[#FEFEFE]">خریـــد آسان و امـن در کمتریــن زمـــان</h1>
                        <p className="text-[#FEFEFE]">قابلیت اعمال کد تخفیف</p>
                    </div>
                </div>

                <div className="flex flex-row items-start mt-10 mx-8 gap-4">
                    <img className="h-[1.8rem] mt-1" src={'src/assets/100.svg'} alt=""/>
                    <div className="flex flex-col">
                        <h1 className="text-xl text-[#FEFEFE]">پشتیبانی حرفه ای با کارشناسان مجرب</h1>
                        <p className="text-[#FEFEFE]">سیستم ارسال تیکت پیشرفته</p>
                    </div>
                </div>

                <div className="flex flex-row items-start mt-10 mb-5 mx-8 gap-4">
                    <img className="h-[1.6rem] mt-2" src={'src/assets/101.svg'} alt=""/>
                    <div className="flex flex-col">
                        <h1 className="text-xl text-[#FEFEFE]">بـــا کیفیت تریــــن دوره ها و بستـــه ها</h1>
                        <p className="text-[#FEFEFE]">بر اساس جدیدترین مباحث</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center mx-8 mt-12">
                <img className="w-[40%]" src={'src/assets/logo.svg'} alt=""/>
                <p className="mt-10">

                    آکادمی زبان آنلاین اسپیکاپ با بهره گیری از مربیان با تجربه سیستم آموزشی به روز و ارتباط مستمر با مراکز اصلی آموزش زبان در دنیا، موفقیت های چشمگیری را در طول فعالیت خود به دست آورده است.
                </p>

            </div>
            <div className="flex mx-8 justify-end mt-4">
                <p className="text-[#0052CC]">۰۳۱ ۳۳۹۳ ۲۳۶6</p>
                <img src={'src/assets/phone1.svg'} alt=""/>
            </div>
        </div>
    );
}
export default End;