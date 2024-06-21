import { useContext } from "react";
import { ContextCart } from "../../Context";
import { XMarkIcon } from '@heroicons/react/24/solid'
import './style.css'

function ProductDetail() {
  const context = useContext(ContextCart);
  const { productShow } = context;
  
  return (
    <aside className={`${context.isProductDetail ? 'flex' : 'hidden'} product-detail flex-col fixed bg-white right-0 border border-black rounded-lg`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <XMarkIcon className='size-8 cursor-pointer' onClick={() => context.closeProductDetail()} />
        </div>
        <figure className="px-6">
          <img
            className="w-full h-full object-cover rounded-lg" 
            src={productShow.image ? productShow.image[0] : null}
            alt={productShow.name} 
          />
        </figure>
        <p className="flex flex-col p-6">
          <span className='font-semibold text-lg mb-2'>Price: {productShow.price}</span>
          <span className='font-semibold text-lg'>Name: {productShow.name}</span>
          <span className='font-semibold text-lg'>Category: {productShow.category}</span>
        </p>
    </aside>
  )
}

export default ProductDetail