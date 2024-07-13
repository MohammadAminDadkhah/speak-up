import Title from "./Heading.jsx";
import Heading from "./Heading.jsx";
import FooterCard from "./FooterCard.jsx";

const Footer = () => {
    return (
        <div className="font-body flex flex-col items-center justify-between
        bg-gradient-to-b from-[#00E7A1] to-[#13B58E]
        rounded-b-xl sm:rounded-b-none h-[602px]" dir="rtl">

            <Heading inputText="برای شروع اصولی یادگیری، دوس داری نقشه راهمون رو بدونی؟" color="white"/>

            <div className="flex flex-row justify-between items-center gap-4 w-3/4 snap-x overflow-auto w-screen">

                <img src={'src/assets/bycyclegirl1.png'} alt="" className="hidden lg:block"/>

                <img className="h-10 snap-start hidden lg:block" src={'src/assets/Vector3.svg'} alt=""/>

                <FooterCard className="snap-start" text="ثبت نام در سایت اسپیکاپ" img="Group132.svg"/>

                <img className="h-10 snap-start" src={'src/assets/Vector3.svg'} alt=""/>

                <FooterCard className="snap-start" text="انتخـاب روز و ساعت برای مشــــاوره رایگان" img="Group134.svg"/>

                <img className="h-10 snap-start" src={'src/assets/Vector3.svg'} alt=""/>

                <FooterCard className="snap-start" text="تماس مشاوران و تعییــن سطح" img="Group131.svg"/>

                <img className="h-10 snap-start" src={'src/assets/Vector3.svg'} alt=""/>

                <FooterCard className="snap-start" text="ثــبت نــام در دوره هــا و خرید بسته های آموزشی" img="Group133.svg"/>

            </div>

            <div className="bg-white rounded-xl flex flex-row font-body items-center gap-2 pl-5 sm:mb-3 m-8">
                <img src={'src/assets/phone.svg'} alt=""/>
                <p className="text-[#13B58E] text-xs sm:text-xl text-[0.65rem]">برای کسب اطلاعات بیشتر و دریافت راهنمایی با ما تماس بگیرید.</p>
            </div>

        </div>

    )
}
export default Footer;