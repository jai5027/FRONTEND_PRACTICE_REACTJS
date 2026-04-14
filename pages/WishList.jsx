
import { Use } from "../src/context/Context.jsx";

const WishList = () => {
  const { wishList, addWishList } = Use();

  return (
    <div>
      <h1>Wishlist</h1>
<div className='w-full h-full grid grid-cols-4'>
         {wishList.map((item, index) => {
        return <div key={index} className='relative m-5 border border-amber-500 p-2 rounded-md bg-gray-200'>
              <img src='https://lh3.googleusercontent.com/PwnSEJ2nxk_ZL2EqwKGE8imatOrWMycLmUNQYV0LIKa4_j_4Cx60TSN8xrJ1uowliytjl2w9RHGxdq7pQyq1KpHBMK8wJdniU6S90qPFCQsrXhMwrw=w0-rwa-e366-v1'/>
              <h1 className='text-center font-semibold'>{item.name}</h1>
              <p className='line-clamp-1 text-sm pt-1'>{item.description}</p>
              <h3 className='mt-2 p-1 hover:cursor-pointer text-center bg-amber-400 rounded-sm font-semibold'>{item.price}</h3>
              <div onClick={() => addWishList(item)} className="absolute top-0">
               <i className="ri-heart-fill text-red-500"></i>
        </div>
        </div>
      })}
</div>
    </div>
  );
};

export default WishList;