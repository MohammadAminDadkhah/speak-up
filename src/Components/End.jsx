const End = () => {
    return (
        <div className="flex flex-col justify-between font-body" dir="rtl">
            <div className="mt-20 rounded-t-[4rem] py-6"
            style={{background: "linear-gradient(180deg, #0052CC -162.97%, #23D0A6 99.81%)"}}>
                <div className="sm:mx-[11.2%] mx-[7%] flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="flex flex-row items-start sm:mt-0 mt-5 mx-8 gap-4">
                        <img className="sm:h-[2.5rem] h-[1.6rem] mt-2" src={'src/assets/102.svg'} alt=""/>
                        <div className="flex flex-col">
                            <h1 className="text-[.9rem] sm:text-[1.1rem] text-[#FEFEFE]">خریـــد آسان و امـن در کمتریــن زمـــان</h1>
                            <p className="text-[.8rem] sm:text-[1.1rem] text-[#FEFEFE] font-light">قابلیت اعمال کد تخفیف</p>
                        </div>
                    </div>

                    <div className="flex flex-row items-start mt-10 sm:mt-0 mx-8 gap-4">
                        <img className="sm:h-[2.8rem] h-[1.8rem] mt-1" src={'src/assets/100.svg'} alt=""/>
                        <div className="flex flex-col">
                            <h1 className="text-[.9rem] sm:text-[1.1rem] text-[#FEFEFE]">پشتیبانی حرفه ای با کارشناسان مجرب</h1>
                            <p className="text-[.8rem] sm:text-[1.1rem] text-[#FEFEFE] font-light">سیستم ارسال تیکت پیشرفته</p>
                        </div>
                    </div>

                    <div className="flex flex-row items-start mt-10 sm:mt-4 mb-5 mx-8 gap-4">
                        <img className="sm:h-[2.5rem] h-[1.6rem] mt-2" src={'src/assets/101.svg'} alt=""/>
                        <div className="flex flex-col">
                            <h1 className="text-[.9rem] sm:text-[1.1rem] text-[#FEFEFE]">بـــا کیفیت تریــــن دوره ها و بستـــه ها</h1>
                            <p className="text-[.8rem] sm:text-[1.1rem] text-[#FEFEFE] font-light">بر اساس جدیدترین مباحث</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:flex  sm:mx-[11.2%] mx-[8%] mt-10 gap-20">
                <div className="basis-1/2">
                    <div className="relative flex flex-col items-center mt-12">
                        <img className="absolute sm:right-0  -top-8 justify-start sm:w-[20%] w-[40%]" src={'src/assets/logo.svg'} alt=""/>
                        <p className="mt-10 sm:text-xl line-clamp-4 text-justify">
                            آکادمی زبان آنلاین اسپیکاپ با بهره گیری از مربیان با تجربه سیستم آموزشی به روز و ارتباط
                            مستمر با
                            مراکز اصلی آموزش زبان در دنیا، موفقیت های چشمگیری را در طول فعالیت خود به دست آورده است.
                        </p>

                    </div>
                    <div className="flex justify-end mt-4">
                        <p className="text-[#0052CC] mt-1 text-xl font-bold">2366 3393 031</p>
                        <img src={'src/assets/phone1.svg'} alt=""/>
                    </div>
                </div>

                <div className="basis-1/2">
                    <div className="justify-center flex">
                        <ul className="text-[.8rem] sm:text-xl">
                            <span>دسترسی سریع</span>
                            <li className="mt-4">○ صفحه اصلی</li>
                            <li className="mt-2">○ دوره ها</li>
                            <li className="mt-2">○ بسته ها</li>
                            <li className="mt-2 hidden sm:block">○ کارگاه های آموزشی</li>
                            <li className="mt-2 hidden sm:block">○ روش ثبت نام</li>
                            <li className="mt-2">○ مقالات</li>
                            <li className="mt-2">○ شرایط و ضوابط</li>
                        </ul>
                        <img className="w-[13rem] sm:w-[20rem] sm:mr-16 mb-4 mr-5" src={'src/assets/e.svg'} alt=""/>
                    </div>
                </div>

            </div>
            <div className="bg-[#E2FAF4] mt-8 py-5">
                <div className="flex flex-col sm:flex-row  bg-[#E2FAF4]  margin">
                    <div className="sm:basis-3/12 order-1 sm:order-2 flex justify-between mx-[30%] sm:mx-0">
                        <img className="sm:w-[12%]" src={'src/assets/110.svg'} alt=""/>
                        <img className="sm:w-[12%]" src={'src/assets/111.svg'} alt=""/>
                        <img className="sm:w-[12%]" src={'src/assets/112.svg'} alt=""/>
                        <img className="sm:w-[12%]" src={'src/assets/113.svg'} alt=""/>
                    </div>
                    <p className="text-[.9rem] sm:basis-8/12 order-2 sm:order-1 sm:text-start text-center mx-8 mt-4 sm:text-xl">
                        تمامی حقوق مادی و معنوی این سایت برای آکادمی زبان آنلاین اسپیکاپ
                        محفوظ میباشد.
                    </p>
                </div>
            </div>
        </div>

    );
}
export default End;