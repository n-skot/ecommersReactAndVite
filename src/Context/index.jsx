import { createContext, useState } from "react"

export const ContextCart = createContext()

export const ProviderCart = ({ children }) => {
    const [count, setCount] = useState(0);

    // Products detail
    const [isProductDetail, setProduct] = useState(false);
    const openProductDetail = () => setProduct(true);
    const closeProductDetail = () => setProduct(false);
    
    // Side menu
    const [isChekoutSideMenu, setChekoutSideMenu] = useState(false);
    const openChekoutSideMenu = () => setChekoutSideMenu(true);
    const closeChekoutSideMenu = () => setChekoutSideMenu(false);
    
    const [productShow, setProductShow] = useState({});

    const [cartProducts, setCartProducts] = useState([]);
    return (
        <ContextCart.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetail,
            productShow,
            setProductShow,
            cartProducts,
            setCartProducts,
            openChekoutSideMenu,
            closeChekoutSideMenu,
            isChekoutSideMenu
        }}>
            { children }
        </ContextCart.Provider>
    )
}