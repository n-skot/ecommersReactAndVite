import { CalendarDaysIcon, ChevronRightIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

const OrdersCard = props => {
    const { date, totalPrice, totalProduct } = props;

    return (
        <div className="flex justify-between items-center mb-3 p-6 border border-black rounded-lg w-80">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                <span className="flex mr-3">
                    <CalendarDaysIcon className="w-6 h-6 text-black"/>
                    {date}
                </span>
                    <span className="flex mr-3">
                        <ShoppingBagIcon className="w-6 h-6 text-black"/>
                        {totalProduct}
                    </span>
                </p>
                <p className="flex items-center gap-2">
                    <span className="flex mr-3 items-center text-xl">
                        <CurrencyDollarIcon className="w-6 h-6 text-black"/>
                        {totalPrice}
                    </span>
                    <ChevronRightIcon className="w-6 h-6 text-black"/>
                </p>
            </div>
        </div>
    )
}

export default OrdersCard   