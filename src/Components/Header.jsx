const Header = () => {
    const clickHandler = (event, selectedIndex) => {
        const parent = [...event.target.parentElement.children];
        parent.forEach((el, index) => {
            if (index === selectedIndex) {
                el.classList.add("text-[#1EB28F]")
            } else {
                el.classList.remove("text-[#1EB28F]")
            }
        })
    }

    return (
        <>
            <div
                className="font-body h-10 bg-gradient-to-r from-[#0052CC] via-[#5FD4AF] to-[#0052CC] ...  mt-3 p-1 hidden md:block">
                <p className="text-center text-slate-50 mt-1">درس خوندن به راهه | بسته های آموزشی با بهترین قیمت</p>
            </div>

            <div className="bg-[#FEFEFE] lg:sticky lg:top-0 z-50">
                <div
                    className="flex flex-col lg:flex-row lg:justify-between margin
                           items-center h-16 font-body"
                    dir="rtl">

                    <img className="lg:size-36 size-28 mt-5" src={'src/assets/logo.svg'} alt="Logo"/>

                    <div className="flex flex-row w-full justify-between lg:hidden m-2">
                        <img src={'src/assets/menu.svg'} alt="menu"/>

                        <button className="rounded text-slate-50 bg-[#0052CC] p-2 px-6">ورود و ثبت نام</button>
                    </div>
                    {/*<div className="flex flex-row items-end lg:hidden mt-5">*/}
                    {/*    <img src={'src/assets/menu.svg'} alt="menu"/>*/}
                    {/*    <button className="rounded text-slate-50 bg-[#0052CC] p-2 px-6 my-auto">*/}
                    {/*        <label className='my-auto'>*/}
                    {/*            ورود و ثبت نام*/}
                    {/*        </label>*/}
                    {/*    </button>*/}
                    {/*</div>*/}

                    <div className="flex-row gap-6 justify-center my-auto hidden lg:flex">
                        <div className="text-[.9rem]" onClick={() => {
                            clickHandler(event, 0)
                        }}>صفحه اصلی
                        </div>
                        <div className="text-[.9rem]" onClick={() => {
                            clickHandler(event, 1)
                        }}>محتوا و محصولات
                        </div>
                        <div className="text-[.9rem]" onClick={() => {
                            clickHandler(event, 2)
                        }}>درباره ما
                        </div>
                        <div className="text-[.9rem]" onClick={() => {
                            clickHandler(event, 3)
                        }}>سوالات متداول
                        </div>
                        <div className="text-[.9rem]" onClick={() => {
                            clickHandler(event, 4)
                        }}>تماس با ما
                        </div>
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