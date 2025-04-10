import React from 'react';

const ItemCard = ({ items }) => {
    const { _id, name, imageURL, price, description, status } = items
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm hover:scale-95 duration-300 transition-all ease">
                <figure>
                    <img className="h-[250px] lg:h-[350px] mb-6"
                        src={imageURL}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="flex items-center justify-between">
                        <p className="text-2xl font-semibold dms">{name}</p>
                        <p
                            className={`py-1 text-center ${status === 'On Stock' && ' text-emerald-500 bg-emerald-100/60'
                                } ${status === 'Out of Stock' && ' text-red-500 bg-red-100/60'
                                } ${status === 'Soon Arrival' && ' text-yellow-500 bg-yellow-100/60'
                                } rounded-full text-xs w-1
                                                            `}
                        >
                            {status}
                        </p>
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 ">{description}</p>
                    <div className="card-actions justify-end">
                        <p className='mt-2 text-sm font-bold text-gray-600 '>
                            Price: <span className="text-[#84acfa]">${price}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;