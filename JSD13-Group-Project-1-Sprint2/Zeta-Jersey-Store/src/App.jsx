import React, { useState } from 'react';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';

function App() {
  const [currentPage, setCurrentPage] = useState('cart');

  return (
    <div>
      {/* ปุ่มเมนูด้านบนไว้กดสลับหน้าทดสอบ */}
      <div className="bg-neutral-900 text-white p-3 flex justify-center gap-4 text-xs">
        <button onClick={() => setCurrentPage('cart')} className={`px-3 py-1 rounded ${currentPage === 'cart' ? 'bg-indigo-600' : ''}`}>Cart Page</button>
        <button onClick={() => setCurrentPage('checkout')} className={`px-3 py-1 rounded ${currentPage === 'checkout' ? 'bg-indigo-600' : ''}`}>Checkout Page</button>
        <button onClick={() => setCurrentPage('confirmation')} className={`px-3 py-1 rounded ${currentPage === 'confirmation' ? 'bg-indigo-600' : ''}`}>Confirmation Page</button>
      </div>

      {/* แสดงผลหน้าตาม State */}
      {currentPage === 'cart' && <CartPage />}
      {currentPage === 'checkout' && <CheckoutPage />}
      {currentPage === 'confirmation' && <OrderConfirmationPage />}
    </div>
  );
}

export default App;