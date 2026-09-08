import React, { useState } from 'react';
import CheckoutItemCard from '../components/CheckoutItemCard/CheckOutItemCard'; // ใช้คอมโพเนนต์รายการสินค้าที่เราทำไว้ก่อนหน้า

const CheckoutPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);

    const [checkoutItems] = useState([
        {
            id: 1,
            name: 'Manchester United FC 26/27 Away Jersey Authentic',
            size: 'Middle',
            price: 140,
            quantity: 1,
            image: 'https://via.placeholder.com/80'
        },
        {
            id: 2,
            name: 'Arsenal FC 26/27 Away Jersey Authentic',
            size: 'Large',
            price: 140,
            quantity: 1,
            image: 'https://via.placeholder.com/80'
        }
    ]);

    return (
        <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
            <div className="max-w-md mx-auto w-full p-4">

                {/* ส่วนสรุปคำสั่งซื้อแบบย่อ/ขยายได้ (Order Summary Toggle) */}
                <div className="border border-gray-200 rounded-lg p-3 mb-6 bg-gray-50">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => setIsSummaryOpen(!isSummaryOpen)}
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold">Order Summary</span>
                            <svg className={`w-4 h-4 transition-transform ${isSummaryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <span className="text-sm font-bold">$457</span>
                    </div>

                    {/* รายละเอียดเมื่อกดเปิด Dropdown */}
                    {isSummaryOpen && (
                        <div className="mt-4 pt-3 border-t border-gray-200 space-y-3">
                            {checkoutItems.map(item => (
                                <CheckoutItemCard key={item.id} item={item} />
                            ))}

                            <div className="space-y-1.5 text-xs pt-2">
                                <div className="flex justify-between text-gray-500">
                                    <span>Subtotal</span>
                                    <span className="font-bold text-gray-900">$565</span>
                                </div>
                                <div className="flex justify-between text-gray-500">
                                    <span>Discount (-20%)</span>
                                    <span className="font-bold text-red-500">-$113</span>
                                </div>
                                <div className="flex justify-between text-gray-500">
                                    <span>Delivery Fee</span>
                                    <span className="font-bold text-gray-900">$15</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* ฟอร์มข้อมูลการจัดส่ง (Delivery) */}
                <div className="mb-6">
                    <h3 className="text-base font-bold mb-3">Delivery</h3>

                    <div className="space-y-3">
                        <select className="w-full h-11 px-3 rounded-md border border-gray-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-black">
                            <option>Thailand</option>
                        </select>

                        <div className="grid grid-cols-2 gap-2">
                            <input type="text" placeholder="First name" className="w-full h-11 px-3 rounded-md border border-gray-300 text-xs focus:outline-none focus:ring-1 focus:ring-black" />
                            <input type="text" placeholder="Last name" className="w-full h-11 px-3 rounded-md border border-gray-300 text-xs focus:outline-none focus:ring-1 focus:ring-black" />
                        </div>

                        <input type="text" placeholder="Address" className="w-full h-11 px-3 rounded-md border border-gray-300 text-xs focus:outline-none focus:ring-1 focus:ring-black" />
                        <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full h-11 px-3 rounded-md border border-gray-300 text-xs focus:outline-none focus:ring-1 focus:ring-black" />

                        <div className="grid grid-cols-3 gap-2">
                            <input type="text" placeholder="City" className="w-full h-11 px-3 rounded-md border border-gray-300 text-xs focus:outline-none focus:ring-1 focus:ring-black" />
                            <input type="text" placeholder="Province" className="w-full h-11 px-3 rounded-md border border-gray-300 text-xs focus:outline-none focus:ring-1 focus:ring-black" />
                            <input type="text" placeholder="Postal code" className="w-full h-11 px-3 rounded-md border border-gray-300 text-xs focus:outline-none focus:ring-1 focus:ring-black" />
                        </div>

                        <input type="tel" placeholder="Phone" className="w-full h-11 px-3 rounded-md border border-gray-300 text-xs focus:outline-none focus:ring-1 focus:ring-black" />

                        <label className="flex items-center gap-2 text-xs text-gray-600 pt-1 cursor-pointer">
                            <input type="checkbox" defaultChecked className="rounded border-gray-300 text-black focus:ring-black" />
                            Save this information for next time
                        </label>
                    </div>
                </div>

                {/* วิธีการจัดส่ง (Shipping Method) */}
                <div className="mb-6">
                    <h3 className="text-base font-bold mb-3">Shipping method</h3>
                    <div className="border border-indigo-900 bg-indigo-50/30 p-3 rounded-md flex justify-between items-center text-xs font-semibold">
                        <span>Free Shipping</span>
                        <span>$0.00</span>
                    </div>
                </div>

                {/* วิธีการชำระเงิน (Payment) */}
                <div className="mb-6">
                    <h3 className="text-base font-bold mb-3">Payment</h3>

                    <div className="space-y-3">
                        {/* Credit Card Option */}
                        <div className={`border rounded-lg p-3 transition-all ${paymentMethod === 'card' ? 'border-indigo-950 bg-gray-50/50' : 'border-gray-200'}`}>
                            <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                                <input
                                    type="radio"
                                    name="payment"
                                    checked={paymentMethod === 'card'}
                                    onChange={() => setPaymentMethod('card')}
                                    className="text-black focus:ring-black"
                                />
                                Credit Card
                            </label>

                            {paymentMethod === 'card' && (
                                <div className="mt-3 space-y-2 pt-2 border-t border-gray-200">
                                    <input type="text" placeholder="Card number" className="w-full h-10 px-3 rounded-md border border-gray-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-black" />
                                    <div className="grid grid-cols-2 gap-2">
                                        <input type="text" placeholder="Expiration date (MM/YY)" className="w-full h-10 px-3 rounded-md border border-gray-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-black" />
                                        <input type="text" placeholder="Security code" className="w-full h-10 px-3 rounded-md border border-gray-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-black" />
                                    </div>
                                    <input type="text" placeholder="Name on card" className="w-full h-10 px-3 rounded-md border border-gray-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-black" />
                                </div>
                            )}
                        </div>

                        {/* Mobile Banking / QR PromptPay */}
                        <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-between text-xs font-semibold cursor-pointer">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="payment" onChange={() => setPaymentMethod('qr')} className="text-black focus:ring-black" />
                                QR PromptPay
                            </label>
                        </div>

                        {/* Cash on Delivery */}
                        <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-between text-xs font-semibold cursor-pointer">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="payment" onChange={() => setPaymentMethod('cod')} className="text-black focus:ring-black" />
                                Cash on Delivery (COD)
                            </label>
                        </div>
                    </div>
                </div>

                {/* ปุ่ม Pay Now */}
                <button className="w-full h-12 bg-indigo-950 hover:bg-indigo-900 text-white font-semibold text-sm rounded-full transition-colors shadow-sm">
                    PAY NOW
                </button>

            </div>
        </div>
    );
};

export default CheckoutPage;