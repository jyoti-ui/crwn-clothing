import { createContext, useState} from "react";
import PRODUCTS from "../shop-data.json"

export const ProductContext = createContext({
    products : [],
    setShopData : () => null,
})

export const ProductProvider = ({children}) => {
    const [products, setProductsData] = useState(PRODUCTS)
    const value = {products, setProductsData }
 return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
 )
}