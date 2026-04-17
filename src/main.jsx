import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from '../pages/Home.jsx'
import Contact from '../pages/Contact.jsx'
import Products from '../pages/Products.jsx'
import WishList from '../pages/WishList.jsx'
import { WishListProvider } from './context/Context.jsx'
import ProductDetails from '../pages/ProductDetails.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import Search from '../pages/Search.jsx'
import Input from '../pages/Input.jsx'

const router = createBrowserRouter([
      {
        path: '/',
        element: <App />,
        children: [
          {
            path: '/',
            element: <Home />
          },
          {
            path: '/contact',
            element: <Contact />
          },
          {
            path: '/products',
            element: <Products />,
          },
          {
                path: '/products/:id',
                element: <ProductDetails />
          },
          {
            path: '/wishlist',
            element: <WishList />
          },
          {
            path: '/search',
            element: <Search />
          },
          {
            path: '/input',
            element: <Input />
          }
        ]
      }
])

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <WishListProvider>
    <RouterProvider router={router}/>
    </WishListProvider>
    </Provider>
)
