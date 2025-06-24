
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const cartItems = [
    {
        name: "StitchRite Groover Pro",
        price: 6000,
        imageURL: "http://res.cloudinary.com/dzs02ilah/image/upload/v1744196455/stitchrite-groover-pro.jpg"
    },
    {
        name: "Edge Slicker",
        price: 1500,
        imageURL: "https://example.com/slicker.jpg"
    }
];
const floatingVariants = {
    animate: {
        y: [0, -15, 0],
        x: [0, 15, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

const geometricShapes = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() > 0.5 ? 'w-4 h-4' : 'w-3 h-3',
    shape: Math.random() > 0.5 ? 'rounded-full' : 'rotate-45',
}));


const CartPage = () => {
    const navigate = useNavigate();

    const getTotalPrice = () =>
        cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

    const handleConfirm = () => {
        alert('Redirecting to payment...');
        navigate('/purchase');
    };

    return (
        <div className="relative min-h-screen bg-white px-4 py-20 w-full flex flex-col items-center overflow-hidden">
            {geometricShapes.map((shape) => (
                <motion.div
                    key={shape.id}
                    className={`absolute bg-black opacity-10 ${shape.size} ${shape.shape}`}
                    style={{ top: shape.top, left: shape.left }}
                    variants={floatingVariants}
                    animate="animate"
                />
            ))}
            {/* Background Sparkle Circles */}
            <motion.div
                className="absolute w-[600px] h-[600px] bg-green-100 rounded-full top-[-250px] left-[-200px] z-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
            />
            <motion.div
                className="absolute w-[300px] h-[300px] bg-green-200 rounded-full bottom-[-150px] right-[-100px] z-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
            />

            <motion.h1
                className="text-4xl font-bold mb-10 text-center relative z-10"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Your Cart
            </motion.h1>

            <AnimatePresence>
                {cartItems.length > 0 ? (
                    <motion.div
                        className="w-full max-w-4xl space-y-6 relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {cartItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-6 rounded-xl shadow-md backdrop-blur-lg"
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <img
                                    src={item.imageURL}
                                    alt={item.name}
                                    className="w-24 h-24 object-contain mb-4 sm:mb-0"
                                />
                                <div className="text-center sm:text-left">
                                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-gray-500 mt-2">Price: ৳{item.price}</p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Total + Confirm */}
                        <div className="text-center mt-10">
                            <motion.p
                                className="text-2xl font-semibold text-gray-800 mb-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                Total: ৳{getTotalPrice()}
                            </motion.p>

                            <motion.button
                                onClick={handleConfirm}
                                className="px-8 py-4 bg-black text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Confirm Purchase
                            </motion.button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.p
                        className="text-gray-500 text-xl mt-10 relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        Your cart is empty.
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CartPage;