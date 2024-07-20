import Heading from "./Heading.jsx";

const Skype = () => {
    return (
        <div className="font-body flex flex-col items-center mt-9 md:mx-40" dir="rtl">
            <Heading inputText="چرا اسپیکاپ؟" isWhite={true} color='#0052CC'/>

            <div className="flex flex-col mt-8 md:mt-12 margin">
                <h1 className="text-center text-xl">ایجاد یک محیط 100 درصد انگلیسی و یادگیری زبان به طبیعی ترین روش</h1>

                <p className="mt-5 text-xs text-center mb-5 sm:text-[.9rem] sm:leading-6">
                    سیستم آموزشی آکادمی اسپیکاپ با روشی خلاقانه، منعطف و موثر این امکان را برای شما ایجاد کرده تا بدون
                    ایجاد اخلال در زندگی شخصی و شغلیتان بتوانید سریع تر به اهداف خود در یادگیری زبان دست یابید.
                </p>

                <img src={'src/assets/Group162.png'} alt=""/>

                <div>

                    <div className="flex md:flex-row flex-col md:leading-6">
                        <div className="flex flex-col md:basis-2/3 my-auto order-1 md:order-2">
                            <p className="text-center text-[0.9rem] mt-10">
                                اساس آموزش ما در <span className="underline font-bold">
                            کلاس های آنلاین
                            </span> است اما زبان آموزان تهرانی می‌توانند در صورت تمایل در کلاس های حضوری نیز ثبت نام
                                کنند
                            </p>

                            <div className="flex justify-center gap-5 mt-5">
                                <button className="bg-[#1EB28F] text-[#FEFEFE] p-2 rounded-lg">کلاس های حضوری</button>

                                <button
                                    className="bg-[#E2FAF4] text-[#1EB28F] p-2 rounded-lg border-[#1EB28F] border-[.08rem]">کلاس
                                    های آنلاین
                                </button>
                            </div>
                        </div>

                        <img className="md:basis-1/3 order-2 sm:order-1 m-8 md:w-[75%]" src={'src/assets/Group165.png'} alt=""/>
                    </div>

                </div>

            </div>
        </div>
    );
}
export default Skype;