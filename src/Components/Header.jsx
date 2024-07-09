const Header = () => {
    return (
        <>
            <div className="font-body h-10 bg-gradient-to-r from-[#0052CC] via-[#5FD4AF] to-[#0052CC] ...  mt-3 p-1 hidden md:block">
                <p className="text-center text-slate-50 mt-1">درس خوندن به راهه | بسته های آموزشی با بهترین قیمت</p>
            </div>
            <div className="h-16 font-body lg:sticky top-0  bg-white container mx-auto" dir="rtl">
                <div className="pt-3 flex lg:flex-row  flex-col justify-between focus:opacity-20">

                    <div className="lg:basis-1/4  align-items-center justify-center mx-8">
                        <img className="h-10 my-auto lg:ms-[6.29rem]" src={'src/assets/logo.svg'} alt="Logo"/>
                    </div>

                    <div className="flex flex-row lg:hidden mt-5 justify-between m-8">
                        <img src={'src/assets/menu.svg'} alt="menu"/>
                        <div className="flex">
                            <button className="rounded  text-slate-50 bg-[#0052CC] p-2 px-6 my-auto">
                                <label className='my-auto'>
                                    ورود و ثبت نام
                                </label>
                            </button>
                        </div>
                    </div>

                    <div className="flex-row basis-1/2 gap-6 justify-center my-auto hidden lg:flex">
                        <div>صفحه اصلی</div>
                        <div>محتوا و محصولات</div>
                        <div>درباره ما</div>
                        <div>سوالات متداول</div>
                        <div>تماس با ما</div>
                    </div>

                    <div className="basis-1/4 hidden lg:flex">
                        <button className="ms-16 rounded text-slate-50 bg-[#0052CC] p-2 px-6 my-auto">
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