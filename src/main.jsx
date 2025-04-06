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
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
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
