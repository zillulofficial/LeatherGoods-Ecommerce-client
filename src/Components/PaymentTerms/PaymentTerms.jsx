import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const PaymentTerms = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="bg-[url(https://i.postimg.cc/Y9WQvrbG/bg-7.jpg)] bg-fixed bg-cover bg-no-repeat  py-32">
            <div className="max-w-3/4 mx-auto flex flex-col lg:flex-row justify-center items-center gap-10">
                <div data-aos="fade-up" data-aos-duration="1000" className="bg-[#84ACFA] pt-[76px] pb-32 px-20 w-full">
                    <div>
                        <p className="text-sm mb-10 text-blue-100">P A Y M E N T __ T E R M S</p>
                        <p className="md:text-4xl text-xl roboto font-bold uppercase mb-12">Payment Terms & Order<br className="hidden md:block" /> <span className="md:border-b-8  md:border-white">Requirements</span></p>
                        <p className="mb-5">At Velin International, we ensure secure and hassle-free transactions with flexible payment options,
                            including bank transfers, L/C, and wire transfers. </p>
                        <p className="mb-5">A deposit may be required for order processing, with
                            the balance due before shipment. </p>
                        <p>We maintain clear order requirements, including MOQs, customization
                            options, lead times, and quality assurance, ensuring a smooth and transparent buying experience.</p>
                    </div>
                </div>
                <div                 data-aos="fade-up" data-aos-duration="1000" className="bg-white py-16 px-20 w-full ">
                    <div>
                        <p className="text-sm mb-6 text-[#84ACFA] uppercase">T e l e g r a p h i c __ T r a n s f e r</p>
                        <p className="text-[#777777] mb-12 quicksand">A Telegraphic Transfer (TT) is an electronic method of sending funds internationally, often used for business transactions and trade payments.</p>
                    </div>
                    <div>
                        <p className="text-sm mb-6 text-[#84ACFA] uppercase">L / c</p>
                        <p className="text-[#777777] mb-12 quicksand">A Letter of Credit (L/C) at Sight is a secure payment method used in international trade where the seller (exporter) receives payment immediately upon presenting the required shipping documents to the bank.</p>
                    </div>
                    <div>
                        <p className="text-sm mb-6 text-[#84ACFA] uppercase">M i n i m u m __ Q u a n t i t y</p>
                        <p className="text-[#777777] mb-5 quicksand">To ensure efficient logistics and cost-effectiveness, we have set the following minimum order quantities:

                        </p>
                        <div className="md:ml-5">
                            <p className="text-[#777777] mb-2 quicksand">✔ Air Shipment: Minimum 1,000 square feet of leather.</p>
                            <p className="text-[#777777]  quicksand">✔ Sea Shipment: Minimum 3,000 square feet of leather.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentTerms;