import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PurchaseFailiure = () => {
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
                    {/* Background Circles */}
                    <motion.div
                        className="absolute w-[600px] h-[600px] bg-red-100 rounded-full top-[-250px] left-[-200px] z-0"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <motion.div
                        className="absolute w-[300px] h-[300px] bg-red-200 rounded-full bottom-[-150px] right-[-100px] z-0"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.2 }}
                    />

                    {/* Cross Animation */}
                    <motion.div
                        className="z-10 relative inline-block mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <svg
                            className="w-20 h-20 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                        >
                            <motion.path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
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
                        Payment Failed
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 mt-4 z-10 relative"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        Something went wrong. Please try again or contact support.
                    </motion.p>

                    {/* Retry Button */}
                    <motion.button
                        className="mt-10 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-red-700 focus:outline-none z-10 relative"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/')}
                    >
                        Try Again
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default PurchaseFailiure;