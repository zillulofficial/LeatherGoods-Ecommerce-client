import axios from "axios";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import { FaHeart } from "react-icons/fa";

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
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [, refetch] = useCart()

  useEffect(() => {
    document.title = "JobSync | Item Details"
  }, [])

  const handleCart = data => {

    if (user && user?.email) {
      const cartInfo = {
        ...data, email: user?.email
      }

      axiosSecure.post('/carts', cartInfo)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: 'Success!',
              text: `${data?.name} Added successfully`,
              icon: 'success',
              confirmButtonText: 'Okay'
            })
            // refetch the cart
            refetch()
          }
        })

    }
    else {
      Swal.fire({
        title: "You Are not Logged in",
        text: "Please login to add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      });
    }

  }
  const handleWishlist = data => {

    if (user && user?.email) {
      const cartInfo = {
        ...data, email: user?.email
      }

      axiosSecure.post('/wishlist', cartInfo)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: 'Success!',
              text: `${data?.name} Added to wishlist`,
              icon: 'success',
              confirmButtonText: 'Okay'
            })
            // refetch the cart
            refetch()
          }
        })

    }
    else {
      Swal.fire({
        title: "You Are not Logged in",
        text: "Please login to add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      });
    }

  }

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
          {/* <Link Link to={`/Collection/purchase/${product._id}`}>
            
          </Link> */}
          <div className="flex justify-center lg:justify-start items-center   gap-5">
            <button
              onClick={() => handleCart(product)}
              disabled={product.status !== 'On Stock'}
              className={`cursor-pointer relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded group
    ${product.status !== 'On Stock' ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-50 text-black hover:pl-10 hover:pr-6'}
  `}
            >
              <span className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out 
    ${product.status !== 'On Stock' ? 'bg-gray-400' : 'bg-black group-hover:h-full'}
  `}></span>

              <span className={`absolute right-0 pr-4 duration-200 ease-out 
    ${product.status === 'On Stock' ? 'group-hover:translate-x-12' : ''}
  `}>
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>

              <span className={`absolute left-0 pl-2.5 -translate-x-12 
    ${product.status === 'On Stock' ? 'group-hover:translate-x-0' : ''}
    ease-out duration-200
  `}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>

              <span className={`relative w-full text-left transition-colors duration-200 ease-in-out 
    ${product.status === 'On Stock' ? 'group-hover:text-white' : ''}
  `}>
                {product.status !== 'On Stock' ? 'Unavailable' : 'Add to Cart'}
              </span>
            </button>
            <span onClick={() => handleWishlist(product)} className="cursor-pointer hover:scale-110 transition-all ease duration-500"><FaHeart className="text-3xl text-red-300"></FaHeart></span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;