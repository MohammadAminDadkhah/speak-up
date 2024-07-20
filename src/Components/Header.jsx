import {useEffect, useState} from "react";

const Header = () => {
    const [section, setMenus] = useState([
            {
                name: "صفحه اصلی",
                is_active: true
            },
            {
                name: "محتوا و محصولات",
                is_active: false
            },
            {
                name: "درباره ما",
                is_active: false
            },
            {
                name: "سوالات متداول",
                is_active: false
            },
            {
                name: "تماس با ما",
                is_active: false
            },
        ]
    );

    const changeMenu = ((item) => {
        setMenus((x) => {
            x = x.map(i => ({...i, is_active: i.name === item.name}));

            return x;

        });
    });


    return (
        <>
            <div
                className="font-body h-10 bg-gradient-to-r from-[#0052CC] via-[#5FD4AF] to-[#0052CC] ...  mt-3 p-1 hidden lg:block">
                <p className="text-center text-slate-50 mt-1">درس خوندن به راهه | بسته های آموزشی با بهترین قیمت</p>
            </div>

            <div className="lg:bg-[#FEFEFE] lg:sticky lg:top-0 z-50">
                <div
                    className="flex flex-col lg:flex-row lg:justify-between margin
                           lg:items-center h-16 font-body"
                    dir="rtl">

                    <img className="lg:size-36 size-28 sm:mt-5 mt-3 sm:mb-4" src={'src/assets/logo.svg'} alt="Logo"/>

                    <div className="flex flex-row w-full justify-between lg:hidden mt-2">
                        <img src={'src/assets/menu.svg'} alt="menu"/>

                        <button className="rounded text-slate-50 bg-[#0052CC] p-2 px-6">ورود و ثبت نام</button>
                    </div>


                    <div className="flex-row gap-6 justify-center my-auto hidden lg:flex">
                        {section.map((item, index) => (
                            <div className={`text-[.9rem] cursor-pointer 
                                ${item.is_active ? 'text-[#1EB28F]' : ''}`}
                                 key={index}
                                 onClick={() => changeMenu(item)}>
                                {item.name}
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:flex ml-1">
                        <button className="rounded text-slate-50 bg-[#0052CC] p-2 px-6">
                            <label className='my-auto'>
                                ورود و ثبت نام
                            </label>
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Header;