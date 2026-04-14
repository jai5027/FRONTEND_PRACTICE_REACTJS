import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WishListContext = createContext()

export const WishListProvider = ({ children }) => {
    const [wishList, setWishList] = useState([])
    const [data, setData] = useState([])
     const [loading, setLoading] = useState(false)

    const getId = (item) => item.id ?? item.name

    const addWishList = (item) => {
        const itemId = getId(item)

        const exits = wishList.some((i) => getId(i) === itemId)
        if(exits){
            setWishList((prev) => prev.filter((i) => getId(i) !== itemId))
        } else {
            setWishList([...wishList, item])
        }
    }

    useEffect(() => { 
  async function getData(){
   setLoading(true) 
   const response = await axios.get(import.meta.env.VITE_FAKE_API)
   setData(response.data)
   setLoading(false)
  }
  getData()
}, [])

  const value = {addWishList, wishList, data, setData, loading, setLoading}

    return (
        <WishListContext.Provider value={value}>
            {children}
        </WishListContext.Provider>
    )
}

export const Use = () => {
    return useContext(WishListContext)
}
