import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { useState } from "react";

const floatingVariants = {
    animate: {
        y: [0, -15, 0],
        x: [0, 15, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
};

const geometricShapes = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() > 0.5 ? 'w-4 h-4' : 'w-3 h-3',
    shape: Math.random() > 0.5 ? 'rounded-full' : 'rotate-45',
}));


const PurchaseOrder = () => {
    const { register, handleSubmit, watch } = useForm();
    const product = useLoaderData()
    const { user } = useAuth()
    const { id } = useParams()
    const [price, setPrice] = useState('')

    const selectedCurrency = watch('currency', 'BDT');

    const convertPrice = (priceBDT) => {
        const rates = {
            BDT: 1,
            USD: 1 / 122.2, // ~122.2 BDT per USD
            INR: 1 / 1.409, // ~1.409 BDT per INR
        };
        const symbols = {
            BDT: '৳',
            USD: '$',
            INR: '₹',
        };

        const rate = rates[selectedCurrency] || 1;
        const symbol = symbols[selectedCurrency] || '৳';
        const converted = (priceBDT * rate).toFixed(2);

        return `${symbol} ${converted}`;

    };

    const onSubmit = (data) => {
        const rates = {
            BDT: 1,
            USD: 1 / 122.2, // ~122.2 BDT per USD
            INR: 1 / 1.409, // ~1.409 BDT per INR
        };

        const rate = rates[selectedCurrency] || 1;
        const converted = (product?.price * rate).toFixed(2);
        setPrice(converted)

        const newData = { ...data, productId: id, price: price }
        // console.log('Purchase Data:', newData);

        axios.post(`${import.meta.env.VITE_API_URL}/purchase`, newData)
            .then((res) => {
                console.log(res.data);
                if (!res.data?.url) {
                    throw new Error("Payment gateway URL not received");
                }
                window.location.replace(res.data?.url);
                
            })

    };


    return (
        <div>
            <div className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center px-4 py-20">
                {geometricShapes.map((shape) => (
                    <motion.div
                        key={shape.id}
                        className={`absolute bg-black opacity-10 ${shape.size} ${shape.shape}`}
                        style={{ top: shape.top, left: shape.left }}
                        variants={floatingVariants}
                        animate="animate"
                    />
                ))}

                <motion.div
                    className="w-full max-w-5xl bg-white rounded-xl shadow-2xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Product Info */}
                    <div className="flex flex-col items-center justify-center p-10 text-center">
                        <img
                            src={product.imageURL}
                            alt={product.name}
                            className="w-full max-w-[300px] object-contain mb-6"
                        />
                        <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
                        <p className="text-2xl text-green-700 mt-4">
                            {convertPrice(product.price)}
                        </p>
                    </div>

                    {/* Purchase Form */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="bg-gray-50 p-10 flex flex-col gap-6 justify-center"
                    >
                        <input
                            {...register('buyerName')}
                            placeholder="Full Name"
                            required
                            className="border border-gray-300 rounded-md px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <input
                            {...register('buyerEmail')}
                            type="email"
                            placeholder="Email Address"
                            defaultValue={user?.email}
                            required
                            className="border border-gray-300 rounded-md px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        {/* Currency Dropdown */}
                        <select
                            {...register('currency')}
                            required
                            className="border border-gray-300 rounded-md px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-black"
                        >
                            <option value="BDT">BDT (৳)</option>
                            <option value="USD">US Dollars ($)</option>
                            <option value="INR">Rupees (₹)</option>
                        </select>
                        <input
                            {...register('buyerPhone')}
                            type="tel"
                            placeholder="Phone Number"
                            required
                            className="border border-gray-300 rounded-md px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <textarea
                            {...register('buyerAddress')}
                            placeholder="Shipping Address"
                            required
                            rows={3}
                            className="border border-gray-300 rounded-md px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />



                        <motion.button
                            type="submit"
                            className="mt-4 px-6 py-4 bg-black text-white text-lg font-bold rounded-full hover:shadow-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Confirm Purchase
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default PurchaseOrder;