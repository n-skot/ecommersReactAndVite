import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ContextCart } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import "./style.css";

const CheckuotSideMenu = () => {
    const context = useContext(ContextCart);
    console.log("cart products: ", context.cartProducts);

    return (
        <aside className={`${context.isChekoutSideMenu ? 'flex' : 'hidden'} scrollable-cards checkout-side-menu flex-col fixed bg-white right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon className='size-8 cursor-pointer' onClick={() => context.closeChekoutSideMenu()} />
            </div>
            <div className="px-3">
                {
                    context.cartProducts.map(product => (
                        <OrderCard key={product.product} title={product.name} imageUrl={product.image} price={product.price} />
                    ))
                }
            </div>
        </aside>
    )
}

export default CheckuotSideMenu