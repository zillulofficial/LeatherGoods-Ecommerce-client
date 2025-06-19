import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PurchaseSuccess = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <div className="min-h-screen w-full bg-white flex items-center justify-center px-4">
                <motion.div
                    className="bg-white shadow-2xl rounded-2xl px-10 py-16 max-w-xl text-center relative overflow-hidden"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                >
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

                    {/* Checkmark Animation */}
                    <motion.div
                        className="z-10 relative inline-block mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <svg
                            className="w-20 h-20 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                        >
                            <motion.path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1 }}
                            />
                        </svg>
                    </motion.div>

                    {/* Text */}
                    <motion.h2
                        className="text-3xl font-bold text-gray-900 z-10 relative"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        Payment Successful!
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 mt-4 z-10 relative"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        Thank you for your purchase. We’ve received your payment.
                    </motion.p>

                    {/* Button */}
                    <motion.button
                        className="mt-10 px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-700 focus:outline-none z-10 relative"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/')}
                    >
                        Go to Home
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default PurchaseSuccess;