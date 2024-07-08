const Footer = () => {
    return (
        <div className="font-body flex flex-col items-center justify-between bg-gradient-to-b from-[#00E7A1] to-[#13B58E] h-[602px]" dir="rtl">
            <p className="text-xl text-white font-semibold mt-3">
                برای شروع اصولی یادگیری، دوس داری نقشه راهمون رو بدونی؟
            </p>

            <div className="flex flex-row justify-between items-center gap-4 w-3/4 ">
                <img src={'src/assets/bycyclegirl1.png'} alt=""/>

                <img className="h-10" src={'src/assets/Vector3.svg'} alt=""/>

                <div className="flex flex-col">
                    <img className="h-36" src={'src/assets/Group132.svg'} alt=""/>
                    <p className="text-white text-lg text-center">
                        ثبت نام در سایت
                        اسپیکاپ
                    </p>
                </div>

                <img className="h-10" src={'src/assets/Vector3.svg'} alt=""/>

                <div className="flex flex-col">
                    <img className="h-36" src={'src/assets/Group134.svg'} alt=""/>
                    <p className="text-white text-lg text-center">
                        انتخـاب روز و ساعت
                        برای مشــــاوره رایگان
                    </p>
                </div>

                <img className="h-10" src={'src/assets/Vector3.svg'} alt=""/>

                <div className="flex flex-col">
                    <img className="h-36" src={'src/assets/Group131.svg'} alt=""/>
                    <p className="text-white text-lg text-center">
                        تماس مشاوران
                        و تعییــن سطح
                    </p>
                </div>

                <img className="h-10" src={'src/assets/Vector3.svg'} alt=""/>

                <div className="flex flex-col">
                    <img className="h-36" src={'src/assets/Group133.svg'} alt=""/>
                    <p className="text-white text-lg text-center">
                        ثــبت نــام در دوره هــا و
                        خرید بسته های آموزشی
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-xl flex flex-row font-body items-center gap-2 pl-5 mb-3">
                <img src={'src/assets/phone.svg'} alt=""/>
                <p>برای کسب اطلاعات بیشتر و دریافت راهنمایی با ما تماس بگیرید.</p>
            </div>
        </div>

    )
}
export default Footer;