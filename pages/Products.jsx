
import { Use } from '../src/context/Context.jsx'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Products = () => {
 const navigate = useNavigate() 
 const { addWishList, wishList, loading, data } = Use()
  
  return (
    <>
    <Outlet />
    <div className='w-full h-full grid grid-cols-4 max-[950px]:grid-cols-3 max-[650px]:grid-cols-2 max-[450px]:grid-cols-1'>
      {loading ? (
    <p className="w-screen h-screen flex justify-center items-center">
      Loading...
    </p>
  ): data.map((item, index) => {
    const getId = (item) => item.id ?? item.name
    const isWish = wishList.some((w) => getId(w) === getId(item))
        return <div key={index} onClick={() => navigate(`/products/${item.id ?? item.name}`)} className='relative m-5 border border-amber-500 p-2 rounded-md bg-gray-200'>
              
              <img src='https://lh3.googleusercontent.com/PwnSEJ2nxk_ZL2EqwKGE8imatOrWMycLmUNQYV0LIKa4_j_4Cx60TSN8xrJ1uowliytjl2w9RHGxdq7pQyq1KpHBMK8wJdniU6S90qPFCQsrXhMwrw=w0-rwa-e366-v1'/>
        
              <h1 className='text-center font-semibold'>{item.name}</h1>
              <p className='line-clamp-1 text-sm pt-1'>{item.description}</p>
              <h3 className='mt-2 p-1 hover:cursor-pointer text-center bg-amber-400 rounded-sm font-semibold'>{item.price}</h3>
            
              <div onClick={(e) => {e.stopPropagation(), addWishList(item)}} className='absolute top-0'> 
             <i className={`${isWish ? "ri-heart-fill text-red-500" : "ri-heart-line"}`}></i>
             </div>     
        </div>
      })}
    </div>
    </>
  )
}

export default Products
