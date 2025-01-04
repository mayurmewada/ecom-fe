import React from "react";
import logoTrademark from "../../assets/images/dealdeck-logo-trademark.png";

const index = () => {
    return (
        <footer className="bg-grey-50 mt-auto">
            <div className="footer-main-section container !py-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-7">
                    <div className="w-full lg:w-8/12 xl:w-9/12 flex flex-col md:flex-row gap-5 md:gap-7">
                        <div className="w-full sm:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
                            <p className="footer-links-heading text-[13px] uppercase font-bold tracking-wide leading-[15.6px] mb-4">categories</p>

                        </div>
                        <div className="w-full sm:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 xl:w-3/12 flex">
                        <div className="max-w-[256px] w-full flex flex-col">
                            <img className="max-w-[150px]" src={logoTrademark} alt="" />
                            <div className="contact-info mt-6 pt-6 pb-6 sm:pb-0">
                                <p className="footer-links-heading text-[13px] uppercase font-bold tracking-wide leading-[15.6px] mb-2">Customer Support</p>
                                <p className="contact-info-address text-[13px] leading-[19.5px] sm:leading-[19.2px] w-[193px]">Email: support@dealdeck.in</p>
                                <p className="contact-info-phone text-[13px] leading-[19.5px] sm:leading-[19.2px] w-[193px]">Phone: +1234567890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container !py-4">
                <div className="flex flex-col lg:flex-row gap-8 sm:gap-7">
                    <div className="w-full">
                        <div className={`auth-footer md:mt-auto flex flex-col gap-3 xl:flex-row items-baseline justify-between xl:gap-5`}>
                            <p className="text-[13px] w-full lg:w-8/12 xl:w-9/12">© 2024 DealDeck. All right reserved.</p>
                            <div className="auth-footer-links w-full lg:w-4/12 xl:w-3/12 flex items-center justify-left flex-wrap gap-x-6">
                                <a className="text-[13px]" href="/">
                                    Privacy Policy
                                </a>
                                <a className="text-[13px]" href="/">
                                    Terms & Conditions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default index;
