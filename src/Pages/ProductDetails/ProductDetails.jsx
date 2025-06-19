import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    x: [0, 20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

const geometricShapes = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() > 0.5 ? 'w-4 h-4' : 'w-3 h-3',
  shape: Math.random() > 0.5 ? 'rounded-full' : 'rotate-45',
}));

const ProductDetails = () => {
  const product = useLoaderData()
  // console.log(product);

  useEffect(() => {
    document.title = "JobSync | Item Details"
  }, [])

  return (
    <div className="relative w-full bg-white overflow-hidden pt-12 ">
      {/* Floating Geometric Shapes */}
      {geometricShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute bg-black opacity-10 ${shape.size} ${shape.shape}`}
          style={{ top: shape.top, left: shape.left }}
          variants={floatingVariants}
          animate="animate"
        />
      ))}

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 pt-12 mb-12 lg:mb-30">
        {/* Product Image */}
        <motion.img
          src={product.imageURL}
          alt={product.name}
          className="w-full lg:w-1/2 max-w-[600px] rounded-xl shadow-xl object-contain"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Product Details */}
        <motion.div
          className="w-full lg:w-1/2 max-w-2xl space-y-6 text-center lg:text-left px-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-sm uppercase text-gray-500">{product.category}</p>
          <p className={` ${product.status === 'On Stock' && ' text-emerald-500'
            } ${product.status === 'Out of Stock' && ' text-red-500'
            } ${product.status === 'Soon Arrival' && ' text-yellow-500'
            } rounded-full text-md font-medium
                                                            `}
          >{product.status}</p>
          <p className="text-3xl font-semibold text-gray-800"> ৳ {product.price}</p>
          <p className="text-lg text-gray-600">{product.description}</p>

          {/* Purchase Now Button */}
          <Link Link to={`/Collection/purchase/${product._id}`}>
            <button class="cursor-pointer relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg class="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Purchase Now</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;