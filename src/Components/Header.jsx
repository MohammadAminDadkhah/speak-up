const Header = () => {
    return (
        <>
            <div className="font-body h-10 bg-gradient-to-r from-[#0052CC] via-[#5FD4AF] to-[#0052CC] ...  mt-3 p-1">
                <p className="text-center text-slate-50">درس خوندن به راهه | بسته های آموزشی با بهترین قیمت</p>
            </div>
            <div className="h-16 font-body sticky top-0  bg-white container mx-auto" dir="rtl">
                <div className="pt-3 flex flex-row justify-between">

                    <div className="basis-1/4 flex align-items-center justify-center">
                        <img className="h-10 my-auto ms-24 " src={'src/assets/logo.svg'} alt="Logo"/>
                    </div>

                    <div className="flex flex-row basis-1/2 gap-6 justify-center my-auto">
                        <div>صفحه اصلی</div>
                        <div>محتوا و محصولات</div>
                        <div>درباره ما</div>
                        <div>سوالات متداول</div>
                        <div>تماس با ما</div>
                    </div>

                    <div className="basis-1/4 flex">
                        <button className="ms-16 rounded-xl text-slate-50 bg-[#0052CC] p-2 px-6 my-auto">
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