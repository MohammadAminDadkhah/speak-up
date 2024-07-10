const Academy = () => {
    return (
        <div className="flex mt-52 font-body justify-center flex-col m-8 sm:mx-[15%] items-center" dir="rtl">
            <div className="sm:hidden flex flex-col items-center mb-5">
                <p>چرا اسپیکاپ؟</p>
                <img className="w-[20%]" src={'src/assets/speakupunder.svg'} alt=""/>
            </div>

            <div className="sm:flex hidden mt-[20%] flex-col items-center mb-20">
                <p>سیستم آموزشی آکادمی زبان اسپیکاپ</p>
                <img className="w-[20%]" src={'src/assets/speakupunder.svg'} alt=""/>
            </div>


            <div className="flex flex-col sm:relative items-center mx-auto w-[100%]">
                <img className="sm:absolute sm:top-0 sm:left-[2%] w-[60%] sm:w-[25%] lg:-top-[50%] sm:order-2"
                     src={'src/assets/boy2.svg'} alt=""/>

                <div className="bg-[#23D0A6] mt-5 rounded-lg px-5 py-3 order-1 w-[100%]">
                    <h1 className="text-center sm:text-start text-[#FEFEFE] text-[.9rem] mb-3 sm:ml-[30%]">
                        پلتفرم چند رسانه ای کتاب تعاملی اسپیکاپ
                        Speak Up Interactive Book
                    </h1>

                    <div className="flex w-fit bg-[#FFFFFF] gap-2 rounded-lg py-2 px-2 sm:ml-[30%]">
                        <img className="mr-1 my-auto" src={'src/assets/chech.svg'} alt=""/>
                        <p className="text-[.9rem] text-[#1EB28F]">
                            کتاب های تعاملی با هزاران فیلم، تمرین تعاملی بازی، فلش کارت ، آزمون و ...
                        </p>
                    </div>

                    <div className="flex w-fit bg-[#FFFFFF] gap-2 rounded-lg py-2 mt-2 px-2 sm:ml-[30%]">
                        <img className="mr-1 my-auto" src={'src/assets/chech.svg'} alt=""/>
                        <p className="text-[.9rem] text-[#1EB28F]">
                            امکان انجام تمرین ها به صورت تعاملی و
                            خود آموز
                        </p>
                    </div>
                </div>

            </div>


            <div className="hidden sm:flex flex-col sm:relative items-center mx-auto w-[100%] mt-24">
                <img className="absolute sm:top-0 -right-[0%] sm:w-[40%] lg:-top-[25%]"
                     src={'src/assets/2.svg'} alt=""/>

                <div className="bg-[#E9861B] mt-5 rounded-lg px-5 py-3  w-[100%]">
                    <h1 className="text-center sm:text-start text-[#FEFEFE] text-[.9rem] mb-3 mr-[40%]">
                        کارگاه های زبان English workshops
                    </h1>

                    <div className="flex w-fit bg-[#FFFFFF] gap-2 rounded-lg py-2 px-2 mr-[40%]">
                        <img className="mr-1 my-auto " src={'src/assets/Chech1.svg'} alt=""/>
                        <p className="text-[.9rem] text-[#E9861B]">
                            گرامر، مکالمه موضوعی، writing، مکالمه با فیلم، داستان خوانی و داستان گویی
                        </p>
                    </div>

                    <div className="flex w-fit bg-[#FFFFFF] gap-2 rounded-lg py-2 mt-2 px-2 mr-[40%]">
                        <img className="mr-1 my-auto" src={'src/assets/Chech1.svg'} alt=""/>
                        <p className="text-[.9rem] text-[#E9861B]">
                            علوم و ریاضی به انگلیسی
                        </p>
                    </div>
                </div>

            </div>


            <div className="hidden sm:flex flex-col sm:relative items-center mx-auto w-[100%] mt-32">
                <img className="sm:absolute sm:top-0 sm:left-[0%] sm:w-[40%] lg:-top-[50%] sm:order-2"
                     src={'src/assets/3.svg'} alt=""/>

                <div className="bg-[#23D0A6] mt-5 rounded-lg px-5 py-3 order-1 w-[100%]">
                    <h1 className="text-center sm:text-start text-[#FEFEFE] text-[.9rem] mb-3 sm:ml-[40%]">
                        پلتفرم چند رسانه ای کتاب تعاملی اسپیکاپ
                        Speak Up Interactive Book
                    </h1>

                    <div className="flex w-fit bg-[#FFFFFF] gap-2 rounded-lg py-2 px-2 sm:ml-[40%]">
                        <img className="mr-1 my-auto" src={'src/assets/chech.svg'} alt=""/>
                        <p className="text-[.9rem] text-[#1EB28F]">
                            کتاب های تعاملی با هزاران فیلم، تمرین تعاملی بازی، فلش کارت ، آزمون و ...
                        </p>
                    </div>

                    <div className="flex w-fit bg-[#FFFFFF] gap-2 rounded-lg py-2 mt-2 px-2 sm:ml-[40%]">
                        <img className="mr-1 my-auto" src={'src/assets/chech.svg'} alt=""/>
                        <p className="text-[.9rem] text-[#1EB28F]">
                            امکان انجام تمرین ها به صورت تعاملی و
                            خود آموز
                        </p>
                    </div>
                </div>
            </div>

            <div className="hidden sm:flex flex-col sm:relative items-center mx-auto w-[100%] mt-32">
                <img className="absolute sm:top-0 right-[1%] sm:w-[36%] lg:-top-[35%]"
                     src={'src/assets/4.svg'} alt=""/>

                <div className="bg-[#E9861B] mt-5 rounded-lg px-5 py-3  w-[100%]">
                    <h1 className="text-center sm:text-start text-[#FEFEFE] text-[.9rem] mb-3 mr-[40%]">
                        پنل اختصاصی زبان آموز Student Zone
                    </h1>

                    <div className="flex w-fit bg-[#FFFFFF] gap-2 rounded-lg py-2 px-2 mr-[40%]">
                        <img className="mr-1 my-auto" src={'src/assets/Chech1.svg'} alt=""/>
                        <p className="text-[.9rem] text-[#E9861B]">
                            دسترسی به کتاب تعاملی اسپیکاپ در هر زمان و همچنین فیلم جلسات قبل
                        </p>
                    </div>

                    <div className="flex w-fit bg-[#FFFFFF] gap-2 rounded-lg py-2 mt-2 px-2 mr-[40%]">
                        <img className="mr-1 my-auto" src={'src/assets/Chech1.svg'} alt=""/>
                        <p className="text-[.9rem] text-[#E9861B]">
                            ارسال و دریافت تکلیف و ارتباط مستمر با استاد و سوپروایزر مربوطه
                        </p>
                    </div>
                </div>
            </div>

            <div className="hidden sm:flex flex-col sm:relative items-center mx-auto w-[100%] mt-32">
                <img className="sm:absolute sm:-top-5 sm:left-[3%] sm:w-[40%] lg:-top-[40%] sm:order-2"
                     src={'src/assets/5.svg'} alt=""/>

                <div className="bg-[#23D0A6] mt-5 rounded-lg px-5 py-3 order-1 w-[100%]">
                    <h1 className="text-center sm:text-start text-[#FEFEFE] text-[.9rem] mb-3 sm:ml-[40%]">
                        سیستم نظارت و پشتیبانی Progress Monitoring System
                    </h1>

                    <div className="flex w-fit bg-[#FFFFFF] gap-2 rounded-lg py-2 px-2 sm:ml-[40%]">
                        <img className="mr-1 my-auto" src={'src/assets/chech.svg'} alt=""/>
                        <p className="text-[.9rem] text-[#1EB28F]">
                            نظارت و گزارش های مستمر ازمیزان پیشرفت زبان آموز
                        </p>
                    </div>

                    <div className="flex w-fit bg-[#FFFFFF] gap-2 rounded-lg py-2 mt-2 px-2 sm:ml-[40%]">
                        <img className="mr-1 my-auto" src={'src/assets/chech.svg'} alt=""/>
                        <p className="text-[.9rem] text-[#1EB28F]">
                            رفع اشکالات احتمالی با کلاس های رایگان
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Academy;