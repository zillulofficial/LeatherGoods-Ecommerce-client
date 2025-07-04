import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root/Root';
import AuthProvider from './Provider/AuthProvider';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home';
import Dashboard from './Layout/Dashboard/Dashboard';
import Users from './Pages/Dashboard/Users';
import Orders from './Pages/Dashboard/Orders';
import Items from './Pages/Dashboard/Items';
import Themes from './Pages/Dashboard/Themes';
import Setting from './Pages/Dashboard/Setting';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AddItems from './Pages/Dashboard/AddItems';
import ProductPage from './Pages/ProductPage/ProductPage';
import UpdateItem from './Pages/UpdateItem/UpdateItem';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import PurchaseOrder from './Pages/PurchaseOrder/PurchaseOrder';
import PurchaseSuccess from './Pages/PurchaseSuccess/PurchaseSuccess';
import PurchaseFailiure from './Pages/PurchaseFailiure/PurchaseFailiure';
import PurchaseDetails from './Pages/Dashboard/PurchaseDetails';
import CartPage from './Pages/CartPage/CartPage';
import WishlistPage from './Pages/WishlistPage/WishlistPage';
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/payment/success/:id',
        element: <PurchaseSuccess></PurchaseSuccess>
      },
      {
        path: '/payment/failiure/:id',
        element: <PurchaseFailiure></PurchaseFailiure>
      },
      {
        path: '/leatherCollection/:category',
        element: <PrivateRoute><ProductPage></ProductPage></PrivateRoute>
      },
      {
        path: '/cart',
        element: <PrivateRoute><CartPage></CartPage></PrivateRoute>
      },
      {
        path: '/wishlist',
        element: <PrivateRoute><WishlistPage></WishlistPage></PrivateRoute>
      },
      {
        path: '/Collection/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/item/${params.id}`)
      },
      {
        path: '/purchase',
        element: <PrivateRoute><PurchaseOrder></PurchaseOrder></PrivateRoute>
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'users',
        element: <Users></Users>
      },
      {
        path: 'contacts',
        element: <Orders></Orders>
      },
      {
        path: 'purchases',
        element: <PurchaseDetails></PurchaseDetails>
      },
      {
        path: 'addItem',
        element: <AddItems></AddItems>
      },
      {
        path: 'update/:id',
        element: <UpdateItem></UpdateItem>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/item/${params.id}`)
      },
      {
        path: 'item',
        element: <Items></Items>
      },
      {
        path: 'themes',
        element: <Themes></Themes>
      },
      {
        path: 'setting',
        element: <Setting></Setting>
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
