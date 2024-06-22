import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ContextCart } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import "./style.css";

const CheckuotSideMenu = () => {
    const context = useContext(ContextCart);
    console.log("cart products: ", context.cartProducts);
    const totalPrice = context.cartProducts.reduce((total, product) => total + (product.quantity * product.price), 0)

    return (
        <aside className={`${context.isChekoutSideMenu ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed bg-white right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon className='size-8 cursor-pointer' onClick={() => context.closeChekoutSideMenu()} />
            </div>
            <div className="px-3 overflow-y-scroll">
                {
                    context.cartProducts.map(product => (
                        <OrderCard key={product.product} productId={product.product} title={product.name} imageUrl={product.image} price={product.price} />
                    ))
                }
            </div>
            <div className="px-3 mb-2">
                <h3 className="text-lg font-medium mt-6">Total: ${totalPrice? totalPrice : '...'}</h3>
                <button className="w-full py-3 text-white font-medium bg-blue-500 rounded-lg">Checkout</button>
            </div>
        </aside>
    )
}

export default CheckuotSideMenu