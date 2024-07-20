import Heading from "../Heading.jsx";
import Card from "./Card.jsx";

const CourseList = () => {
    const clickHandler = (event, selectedIndex) => {
        const parent = [...event.target.parentElement.children];
        parent.forEach((el, index) => {
            if (index === selectedIndex) {
                el.classList.add('active');
                el.classList.remove('diactive');
            } else {
                el.classList.add('diactive');
                el.classList.remove('active');
            }
        })
    }

    return (
        <div className="sm:mt-32 flex flex-col justify-center items-center font-body mx-8" dir="rtl">

            <div className="order-first sm:order-last flex flex-col items-center">
                <div className="flex flex-col sm:hidden">
                    <Heading inputText="دوره های آموزشی " isWhite={true}/>
                </div>

                <div className="hidden sm:flex flex-col">
                    <Heading inputText="دوره های آموزشی آنلاین اسپیکاپ" isWhite={true}/>
                </div>

                <div className="flex flex-col items-center">
                    <div className="mt-8 grid grid-cols-3 w-fit">
                        <button
                            className="text-xs sm:text-lg active rounded-s-[.3rem] p-2"
                            onClick={() => clickHandler(event, 0)}
                        >کودکان
                            6 تا 12 سال
                        </button>
                        <button
                            className="text-xs sm:text-lg diactive border-l-0 p-2"
                            onClick={() => clickHandler(event, 1)}
                        >نوجوانان
                        </button>
                        <button
                            className="text-xs sm:text-lg diactive rounded-e-[.3rem] p-2"
                            onClick={() => clickHandler(event, 2)}
                        >بزرگسالان
                        </button>
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

                <img className="mt-16" src={'src/assets/faq.png'} alt=""/>
                <h1 className="text-lg text-[#FEFEFE] mt-2 px-4 text-center">وقت کافی برای شرکت در کلاس های آنلاین
                    رو
                    نداری؟</h1>
                <p className="text-center text-[#FEFEFE] mb-8 px-8 py-1">
                    با خرید بسته های خود آموز خودت هر زمان و هر کجا که هستی
                    میتونی فیلم های آموزشی رو ببینی
                </p>
            </div>

            <div
                className="order-2 hidden sm:flex flex-col items-center mt-20 w-screen rounded-b-3xl bg-[#23D0A6]">

                <img className="mt-16" src={'src/assets/faq.png'} alt=""/>
                <h1 className="text-lg text-[#FEFEFE] mt-2 px-4 text-center">وقت کافی برای شرکت در کلاس های آنلاین
                    رو
                    نداری؟</h1>
                <p className="text-center text-[#FEFEFE] mb-8 px-8 py-1">
                    با خرید بسته های خود آموز خودت هر زمان و هر کجا که هستی
                    میتونی فیلم های آموزشی رو ببینی
                </p>
            </div>

            <div className="mt-20 order-last sm:order-first">
                <Heading inputText="مشاهده همه دوره های آموزشی" isWhite={true}/>

                <div className=" flex flex-row items-center">

                    <div className="mt-8 grid grid-cols-4">
                        <button
                            className="text-xs sm:text-lg active rounded-s-[.3rem] py-2"
                            onClick={() => clickHandler(event, 0)}
                        >
                            همه
                        </button>
                        <button
                            className="text-xs sm:text-lg diactive border-l-0 py-2"
                            onClick={() => clickHandler(event, 1)}
                        >کودکان
                            6 تا 12 سال
                        </button>
                        <button
                            className="text-xs sm:text-lg diactive border-l-0 py-2"
                            onClick={() => clickHandler(event, 2)}
                        >نوجوانان
                        </button>
                        <button
                            className="text-xs sm:text-lg diactive rounded-e-[.3rem] py-2"
                            onClick={() => clickHandler(event, 3)}
                        >بزرگسالان
                        </button>
                    </div>
                </div>
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
    );
}
export default CourseList;