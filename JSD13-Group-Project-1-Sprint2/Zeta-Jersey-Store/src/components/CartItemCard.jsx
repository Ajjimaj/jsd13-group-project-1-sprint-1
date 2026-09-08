import React from 'react';

const CartItemCard = ({ item, onUpdateQuantity }) => {
    return (
        <div className="flex items-center justify-between py-3 border-b border-gray-100 gap-3 bg-white">
            {/* รูปภาพสินค้า */}
            <img
                src={item.image}
                alt={item.name}
                className="w-[70px] h-[70px] object-cover rounded-lg bg-gray-50 flex-shrink-0"
            />

            {/* รายละเอียดสินค้า */}
            <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-gray-900 truncate mb-1">{item.name}</h4>
                <p className="text-xs text-gray-500 mb-1">Size : {item.size}</p>
                <p className="text-sm font-bold text-gray-900">${item.price}</p>
            </div>

            {/* ปุ่มเพิ่ม-ลดจำนวน */}
            <div className="flex items-center flex-shrink-0">
                <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 gap-3">
                    <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="text-sm font-bold text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed hover:text-black"
                    >
                        -
                    </button>
                    <span className="text-sm font-semibold text-gray-900 min-w-[12px] text-center">
                        {item.quantity}
                    </span>
                    <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="text-sm font-bold text-gray-700 hover:text-black"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItemCard;