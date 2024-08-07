import { Link } from "react-router-dom";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ContextCart } from "../../Context";
import { faker } from "@faker-js/faker";
import OrderCard from "../../Components/OrderCard";
import "./style.css";

const CheckuotSideMenu = () => {
    const context = useContext(ContextCart);
    
    const handleCheckout = () => {
        const orderToAdd = {
            id: faker.string.uuid(),
            date: new Date().toLocaleDateString(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice,
            status: 'pending',
            userId: 'user123', // replace with actual user id
        };

        context.setMyOrder([...context.myOrder, orderToAdd]);
        context.setCartProducts([]);
        context.setCount(0);
        context.closeChekoutSideMenu();
    };

    const handleDelete = (productId) => {
        context.setCartProducts(context.cartProducts.filter(product => product.product!==productId))
        context.setCount(context.count - 1);
    };

    const totalPrice = context.cartProducts.reduce((total, product) => total + (product.quantity * product.price), 0)

    return (
        <aside className={`${context.isChekoutSideMenu ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed bg-white right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon className='size-8 cursor-pointer' onClick={() => context.closeChekoutSideMenu()} />
            </div>
            <div className="px-3 overflow-y-scroll flex-1">
                {
                    context.cartProducts.map(product => (
                        <OrderCard key={product.product} productId={product.product} title={product.name} imageUrl={product.image} price={product.price} handleDelete={handleDelete} />
                    ))
                }
            </div>
            <div className="px-3 mb-6">
                <h3 className="text-lg font-medium mt-6 mb-2">Total: ${totalPrice? totalPrice : '...'}</h3>
                {
                    context.cartProducts.length > 0 ?
                    <Link to={'/MyOrder/last'} >
                        <button className="w-full py-3 text-white font-medium bg-blue-500 rounded-lg" onClick={ () => handleCheckout() } >Checkout</button>
                    </Link>
                    : <button className="w-full py-3 text-white font-medium bg-blue-500 rounded-lg" onClick={() => alert('Agrega productos al carrito')}>Checkout</button>
                }
            </div>
        </aside>
    )
}

export default CheckuotSideMenu