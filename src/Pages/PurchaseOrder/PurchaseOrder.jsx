import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import useCart from "../../Hooks/useCart";
import { FaTimes } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

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
    const location = useLocation();
    const axiosSecure = useAxiosSecure()
    const { totalPrice } = location.state || {};

    const [total, setTotal] = useState(0);
    const [itemDetails, setItemDetails] = useState('');

    useEffect(() => {
        if (totalPrice !== undefined) {
            setTotal(totalPrice);
        }
    }, [totalPrice])
    const { register, handleSubmit, watch } = useForm();
    const [cart] = useCart()
    const product = useLoaderData()
    const { user } = useAuth()
    const [price, setPrice] = useState(0)

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

        return `${converted} ${symbol}`;

    };
    const cartSummary = cart.map(item => ({
        image: item?.imageURL,
        name: item?.name,
        price: item?.price,
        category: item?.category
    }));

    const onSubmit = (data) => {
        const rates = {
            BDT: 1,
            USD: 1 / 122.2, // ~122.2 BDT per USD
            INR: 1 / 1.409, // ~1.409 BDT per INR
        };

        const rate = rates[selectedCurrency] || 1;
        const converted = (total * rate).toFixed(2);
        setPrice(converted)

        const newData = {
            ...data,
            cartItems: cartSummary,
            price: price, 
            currency: selectedCurrency,
            buyerName: data.buyerName, 
            buyerEmail: data.buyerEmail,
            buyerPhone: data.buyerPhone,
            buyerAddress: data.buyerAddress

        }
        // console.log('Purchase Data:', newData);

        axios.post(`${import.meta.env.VITE_API_URL}/purchase`, newData)
            .then((res) => {
                console.log(res.data);
                if (!res.data?.url) {
                    throw new Error("Payment gateway URL not received");
                }
                window.location.replace(res.data?.url);
                axiosSecure.delete('/carts')

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
                        <h3 className="mb-4 text-3xl font-semibold dms text-black/50">Items Selected</h3>
                        {cart.map((item, index) => (

                            <motion.div
                                key={index}
                                className="w-full p-3 mb-2  backdrop-blur-lg"
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >

                                <div className=" sm:text-left">
                                    <div className="flex justify-between w-full">
                                        <div>
                                            <h3 className=" text-xl  text-gray-800">{item?.name}</h3>
                                            <p className="text-gray-500 mt-2">Price: ৳ {item?.price}</p>
                                        </div>
                                        <p className={`py-1 text-center ${item?.category === 'Bags' && ' text-emerald-500 bg-emerald-100/60'
                                            } ${item?.category === 'Shoes' && ' text-orange-500 bg-orange-100/60'
                                            } ${item?.category === 'Pure Leather' && ' text-amber-500 bg-amber-100/60'
                                            } ${item?.category === 'Other Items' && ' text-blue-500 bg-blue-100/60'
                                            } rounded-full text-xs w-22 h-6
                                                            `}>{item?.category}</p>
                                    </div>
                                </div>

                            </motion.div>
                        ))}
                        <h2 className="text-3xl font-bold text-gray-900"></h2>
                        <p className="text-2xl text-green-700 mt-4">
                            Total: {convertPrice(total)}
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