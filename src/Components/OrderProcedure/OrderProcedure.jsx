
import { motion } from "framer-motion";
import VerticalNumber from "./VerticalNumber";

const OrderProcedure = () => {
    const enterpriseDetails = [
        {
            _id: 1,
            title: "Price Confirmation",
            description:
                "Once you select the required leather type, quality, and quantity, we will provide you with a competitive price quotation.Upon mutual agreement on pricing, we proceed to the next step.",
            number: 1,
            color: "#FBBC05",
            verticalLine: true,
        },
        {
            _id: 2,
            title: "Contract Signing",
            description:
                "A formal contract will be signed between you (the buyer) and the seller/manufacturer/tanner to confirm the order.This contract will also be verified and acknowledged by Velin International to ensure smooth processing.",
            number: 2,
            color: "#93C648",
            verticalLine: true,
        },
        {
            _id: 3,
            title: "Letter of Credit (L/C) Issuance",
            description:
                "Based on the contract, the buyer will open a Letter of Credit (L/C) in favor of the seller or in favor of Velin International (transferable). We assist in ensuring that all financial transactions comply with standard international trade practices.",
            number: 3,
            color: "#50B577",
            verticalLine: true,
        },
        {
            _id: 4,
            title: "Order Execution & Shipment",
            description:
                "Once the L/C is confirmed, production and processing will begin. We conduct quality control inspections at different stages to maintain product standards. After final approval, the leather will be shipped as per the agreed terms.",
            number: 4,
            color: "#50B577",
        },
    ];

    return (
        <div>
            <div className="container mx-auto flex flex-col lg:flex-row mb-24 md:w-3/4 lg:w-full">
                <h2 className="text-3xl font-bold w-full text-center lg:text-left mb-10 lg:mb-0">
                    What is the order procedure?
                </h2>
                <div>
                    {enterpriseDetails?.map((offer, idx) => (
                        <motion.div
                            initial={{ opacity: 0, x: 90 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 + idx * 0.4 }}
                            key={offer?._id}
                            className="flex gap-3"
                        >
                            <VerticalNumber
                                num={offer?.number}
                                color={offer?.color}
                                verticalLine={offer?.verticalLine}
                            ></VerticalNumber>
                            <div className="mt-2">
                                <h4 className="text-xl font-semibold">
                                    {offer?.title}
                                </h4>
                                <p className="pl-6 mt-5">{offer?.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        
        </div>
    );
};

export default OrderProcedure;