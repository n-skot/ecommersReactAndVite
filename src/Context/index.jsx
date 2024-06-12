import { createContext, useState } from "react"

export const ContextCart = createContext()

export const ProviderCart = ({ children }) => {
    const [count, setCount] = useState(0)
    return (
        <ContextCart.Provider value={{
            count,
            setCount
        }}>
            { children }
        </ContextCart.Provider>
    )
}