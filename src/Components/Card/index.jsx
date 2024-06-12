import { useContext } from 'react';
import { ContextCart } from '../../Context';
import React from 'react'

function Card({ category, price, name, image }) {
  const context = useContext(ContextCart)
  return (
    <div className='bg-grey cursor-pointer w-56 h-60'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-3'>{category}</span>
        <img src={image} alt={name} className='w-full h-full object-cover rounded-lg' />
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1' onClick={() => context.setCount(context.count + 1)}>
          +
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light truncate mr-2'>{name}</span>
        <span className='text-lg font-medium'>{price}</span>
      </p>
    </div>
  )
}

export default Card
