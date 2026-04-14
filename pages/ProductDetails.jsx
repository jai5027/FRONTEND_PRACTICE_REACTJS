import React from 'react'
import { Use } from '../src/context/Context'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { data, addWishList, wishList } = Use();
    const { id } = useParams()

    const getId = (item) => item.id ?? item.name

    const product = data.find((item) => getId(item) === id)    
    const isWish = wishList.some((w) => getId(w) === getId(product))
  return (
   <>
   
   <div className='relative m-5 border border-amber-500 p-2 rounded-md bg-gray-200'>
              
              <img src='https://lh3.googleusercontent.com/PwnSEJ2nxk_ZL2EqwKGE8imatOrWMycLmUNQYV0LIKa4_j_4Cx60TSN8xrJ1uowliytjl2w9RHGxdq7pQyq1KpHBMK8wJdniU6S90qPFCQsrXhMwrw=w0-rwa-e366-v1'/>
        
              <h1 className='text-center font-semibold'>{product.name}</h1>
              <p className=' text-sm pt-1'>{product.description}</p>
              <h3 className='mt-2 p-1 hover:cursor-pointer text-center bg-amber-400 rounded-sm font-semibold'>{product.price}</h3>
            
              <div onClick={(e) => {e.stopPropagation(), addWishList(product)}} className='absolute top-0'> 
             <i className={`${isWish ? "ri-heart-fill text-red-500" : "ri-heart-line"}`}></i>
             </div>     
        </div>
   </>
  )
}

export default ProductDetails
