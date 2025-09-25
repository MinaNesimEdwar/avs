import CartItem from '@/app/components/cartItem'
import React from 'react'

function Cart() {
  return (
    <div className='container  pb-20 pt-24 lg:pt-32  space-y-12'>
      <div className=' bg-light-black rounded-2xl p-6 space-y-6'>

     <div className='space-y-4'>
                <h3 className=' text-main font-bold text-2xl'>Shop Cart</h3>
        <p className=' text-gray-400'>Total Cart Price: <span className=' font-bold'>987654</span></p>
     </div>
     <CartItem/>
     <CartItem/>
     <CartItem/>
     <CartItem/>
      </div>
    </div>
  )
}

export default Cart
