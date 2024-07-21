import Heading from "../Heading.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";

const CourseList = () => {

    return (
        <div className="sm:mt-32 flex flex-col justify-center items-center font-body" dir="rtl">

            <div className="order-first sm:order-last flex flex-col items-center">
                <div className="flex flex-col sm:hidden">
                    <Heading inputText="دوره های آموزشی " isWhite={true}/>
                </div>

                <div className="hidden sm:flex flex-col">
                    <Heading inputText="دوره های آموزشی آنلاین اسپیکاپ" isWhite={true}/>
                </div>

                <div className="flex flex-col items-center">
                    <div className="mt-8 grid grid-cols-3 w-fit text-[.7rem] sm:text-xl">
                        <Button text="کودکان 6 تا 12 سال" isActive={true} index={0} rounded="s"/>
                        <Button text="نوجوانان" isActive={false} index={1}/>
                        <Button text="بزرگسالان" isActive={false} index={2} rounded="e"/>
                    </div>

                    <div className="md:flex gap-6">
                        <Card image="10.svg" title="ویژه کودکان" text="دوره آموزشی Alphaplus" image2="50.svg" buttonText="ثبت نام"/>
                        <Card image="10.svg" title="ویژه کودکان" text="دوره آموزشی Alphaplus" image2="50.svg" buttonText="ثبت نام"/>
                        <Card image="10.svg" title="ویژه کودکان" text="دوره آموزشی Alphaplus" image2="50.svg" buttonText="ثبت نام"/>
                    </div>

                    <div
                        className="flex bg-[#E2FAF4] border-[.1rem] border-[#1EB28F] py-3 px-6 rounded-[.40rem] gap-3 mt-8 w-fit">
                        <img src={'src/assets/c.svg'} alt="wda"/>
                        <p className="text-[#1EB28F]">مشاهده همه دوره های آموزشی</p>
                    </div>
                </div>
            </div>

            <div
                className="order-2 sm:hidden flex flex-col items-center mt-20 w-screen rounded-b-3xl"
                style={{background: "linear-gradient(0.02deg, #0052CC -88.42%, #1EB28F 45.17%)"}}>

                <img className="mt-5" src={'src/assets/faq.png'} alt=""/>
                <h1 className="text-lg text-[#FEFEFE] mt-2 px-4 text-center">وقت کافی برای شرکت در کلاس های آنلاین
                    رو
                    نداری؟</h1>
                <p className="text-center text-[#FEFEFE] mb-8 px-8 py-1">
                    با خرید بسته های خود آموز خودت هر زمان و هر کجا که هستی
                    میتونی فیلم های آموزشی رو ببینی
                </p>
            </div>

            <div
                className="relative order-2 hidden sm:flex flex-col sm:flex-row items-center sm:justify-center gap-8 mt-20 rounded-b-3xl sm:rounded-none bg-[#23D0A6] w-full">

                <img className="mt-5 z-20" src={'src/assets/faq.png'} alt=""/>
                <img className="absolute z-0 " src={'src/assets/back2.png'} alt=""/>
                <div className="z-20">
                    <h1 className="text-lg text-[#FEFEFE] mt-2 text-center">وقت کافی برای شرکت در کلاس های آنلاین
                        رو
                        نداری؟</h1>
                    <p className="text-center text-[#FEFEFE] mb-8">
                        با خرید بسته های خود آموز خودت هر زمان و هر کجا که هستی
                        میتونی فیلم های آموزشی رو ببینی
                    </p>
                </div>
            </div>

            <div className="mt-20 order-last sm:order-first flex flex-col">
                <Heading inputText="مشاهده همه دوره های آموزشی" isWhite={true}/>

                <div className=" flex flex-col items-center">

                    <div className="mt-8 grid grid-cols-4 text-[.7rem] sm:text-xl">
                        <Button text="همه" isActive={true} index={0} rounded="s"/>
                        <Button text="کودکان 6 تا 12 سال" isActive={false} index={1} />
                        <Button text="نوجوانان" isActive={false} index={2} />
                        <Button text="بزرگسالان" isActive={false} index={3} rounded="e"/>
                    </div>

                    <div className="md:flex gap-6">
                        <Card image="10.svg" title="ویژه کودکان" text="دوره آموزشی Alphaplus" image2="50.svg" buttonText="ثبت نام"/>
                        <Card image="10.svg" title="ویژه کودکان" text="دوره آموزشی Alphaplus" image2="50.svg" buttonText="ثبت نام"/>
                        <Card image="10.svg" title="ویژه کودکان" text="دوره آموزشی Alphaplus" image2="50.svg" buttonText="ثبت نام"/>
                    </div>

                    <div
                        className="flex bg-[#E2FAF4] border-[.1rem] border-[#1EB28F] py-3 px-6 rounded-[.40rem] gap-3 mt-8">
                        <img src={'src/assets/c.svg'} alt="wda"/>
                        <p className="text-[#1EB28F]">مشاهده همه دوره های آموزشی</p>
                    </div>
                </div>
            </div>



        </div>
    );
}
export default CourseList;