import { createContext, useEffect, useState } from "react"

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

    // My order
    const [myOrder, setMyOrder] = useState([]);
    
    // get items
    const [items, setItems] = useState(null);
    const [filterItems, setFilterItems] = useState(null);

    //search for items
    const [searchByTitle, setSearchByTitle] = useState(null);

    //search for| items

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

    const filterByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    useEffect(() => {
        if (searchByTitle) return setFilterItems(filterByTitle(items, searchByTitle));
    }, [items, searchByTitle]);

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
            isChekoutSideMenu,
            myOrder,
            setMyOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
        }}>
            { children }
        </ContextCart.Provider>
    )
}