import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import * as motion from "motion/react-client"; //server

function CartItem() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.8}}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className=' flex max-md:flex-col gap-4  items-center justify-between border-b border-main p-4 bg-white rounded-2xl'>
      <div className=' flex items-center gap-6'>
        <Image src="/product2.png" alt="product" width={100} height={100} />
        <div className=' space-y-2'>
          <h1 className=' font-bold'>Product Name</h1>
          <p className=' text-main'>Price: <span className=' font-bold'>7636</span> </p>
        </div>
      </div>
      <div className=' text-2xl flex items-center gap-4'><CiSquarePlus className='text-main size-8 ' />8<CiSquareMinus  className='text-main size-8 ' /></div>
             <Button className={'p-0  text-white border-none cursor-pointer flex items-center gap-2  hover:gap-3 transition-all duration-300 bg-main hover:bg-main'}><MdDeleteForever className=' size-5 text-white'/>Remove</Button>

    </motion.div>
  )
}

export default CartItem
