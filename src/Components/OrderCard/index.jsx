import { useContext } from "react";
import { ContextCart } from "../../Context";
import { TrashIcon } from "@heroicons/react/24/solid";

const OrderCard = props => {
    const { productId, title, imageUrl, price } = props;
    const context = useContext(ContextCart);

    const handleDelete = (productId) => {
        context.setCartProducts(context.cartProducts.filter(product => product.product!==productId))
        context.setCount(context.count - 1);
    };

    const onchangeQuantity = (event) => {
        const newQuantity = parseInt(event.target.value);
        context.setCartProducts(context.cartProducts.map(product => product.product === productId? {...product, quantity: newQuantity} : product));
        context.setCount(context.count - 1)
    };

    return (
        <div className="items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="h-20 w-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex justify-between items-right gap-2">
                <p className="text-lg font-medium">Price: {price}</p>
                <label htmlFor="quantity">
                    Quantity:
                    <input type="number" id="quantity" name="quantity" defaultValue={1} min="1" className="w-10 text-center" onChange={(event) => onchangeQuantity(event)}></input>
                </label>
                <TrashIcon className="h-6 w-6 text-black cursor-pointer" onClick={() => handleDelete(productId)} />
            </div>
        </div>
    )
}

export default OrderCard