import Heading from "../Heading.jsx";
import FooterCard from "../FooterCard.jsx";

const Footer = () => {
    return (
        <div className="font-body flex flex-col items-center justify-between
        bg-gradient-to-b from-[#00E7A1] to-[#13B58E]
        rounded-b-xl sm:rounded-b-none h-[602px]" dir="rtl">

            <Heading className="mt-16" inputText="برای شروع اصولی یادگیری، دوس داری نقشه راهمون رو بدونی؟" color="#FEFEFE"/>

            <div className="flex flex-row lg:mx-[13%]  text-justify items-center justify-between gap-4  snap-x overflow-auto sm:w-8/12 w-screen mr-[10%]">

                <img src={'src/assets/bycyclegirl1.png'} alt="" className="hidden lg:block"/>

                <img className="h-10 snap-start hidden lg:block" src={'src/assets/Vector3.svg'} alt=""/>

                <FooterCard className="snap-start" text="ثبت نام در سایت اسپیکاپ" img="Group132.svg" mt={0}/>

                <img className="h-10 snap-start" src={'src/assets/Vector3.svg'} alt=""/>

                <FooterCard className="snap-start" text="انتخـاب روز و ساعت برای مشــــاوره رایگان" img="Group134.svg" mt={4} mt2={4}/>

                <img className="h-10 snap-start" src={'src/assets/Vector3.svg'} alt=""/>

                <FooterCard className="snap-start" text="تماس مشاوران و تعییــن سطح" img="Group131.svg" mt={0} mt2={4}/>

                <img className="h-10 snap-start" src={'src/assets/Vector3.svg'} alt=""/>

                <FooterCard className="snap-start" text="ثــبت نــام در دوره هــا و خرید بسته های آموزشی" img="Group133.svg" mt={10} mt2={4}/>

            </div>

            <div className="bg-white rounded-xl flex flex-row font-body items-center gap-2 pl-5 p-2 mb-5 w-11/12 sm:w-fit">
                <img className="h-9" src={'src/assets/phone.svg'} alt=""/>
                <p className="text-[#13B58E] text-[.77rem] sm:text-xl">برای کسب اطلاعات بیشتر و دریافت راهنمایی با ما تماس بگیرید.</p>
            </div>

        </div>

    )
}
export default Footer;