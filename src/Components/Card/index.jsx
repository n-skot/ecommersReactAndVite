import { useContext } from 'react';
import { ContextCart } from '../../Context';
import IconPlusOrCheck from '../RenderIcon';

function Card({ product, category, price, name, image }) {
  const context = useContext(ContextCart);

  const productShow = (productDetail) => {
    context.openProductDetail();
    context.closeChekoutSideMenu();
    context.setProductShow(productDetail);
  };

  return (
    <div
      className='bg-grey cursor-pointer w-56 h-60'
      onClick={() => productShow({category, price, name, image})} >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-3'>{category}</span>
        <img src={image} alt={name} className='w-full h-full object-cover rounded-lg' />
        <IconPlusOrCheck data={{product, category, price, name, image}} />
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light truncate mr-2'>{name}</span>
        <span className='text-lg font-medium'>{price}</span>
      </p>
    </div>
  )
}

export default Card
