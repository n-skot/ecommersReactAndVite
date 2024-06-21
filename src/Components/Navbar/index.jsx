import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ContextCart } from "../../Context";

export const Navbar = () => {
    const context = useContext(ContextCart)
    const activeStyle = "underline underline-offset-4"
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'
                    className={({isActive}) => isActive ? activeStyle: undefined} 
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/all'
                    className={({isActive}) => isActive ? activeStyle: undefined}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                    className={({isActive}) => isActive ? activeStyle: undefined}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                    className={({isActive}) => isActive ? activeStyle: undefined}
                    >
                        Electronics
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    <NavLink to='/'>
                        n-skot@gmail.com
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-orders'
                    className={({isActive}) => isActive ? activeStyle: undefined}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                    className={({isActive}) => isActive ? activeStyle: undefined}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sing-in'
                    className={({isActive}) => isActive ? activeStyle: undefined}
                    >
                        Sing In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className='w-6 h-6' /> {context.count}
                </li>
            </ul>
        </nav>
    )
}