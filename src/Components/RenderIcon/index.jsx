import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { useContext } from "react";
import { ContextCart } from "../../Context";

const IconPlusOrCheck = ({ data }) => {
    const context = useContext(ContextCart);
    const isInCart = context.cartProducts.filter(item => item.product === data.product).length > 0;
    const addProductsToCart = (event, data) => {
        if (isInCart) return;
        event.stopPropagation();
        data.quantity = 1;
        context.setCartProducts([...context.cartProducts, data]);
        context.setCount(context.count + 1);
        context.openChekoutSideMenu();
        context.closeProductDetail();
    };

    const bgColor = isInCart? 'bg-green-500' : 'bg-white';
    
    return (
        <div
          className={`${bgColor} absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1`}
            onClick={(event) => {
              addProductsToCart(event, data); }
            }>
            {isInCart? <CheckIcon className='h-4 w-4 text-white-500' /> : <PlusIcon className='h-4 w-4 text-black' />}
        </div>
    )
};

export default IconPlusOrCheck