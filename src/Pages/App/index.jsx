import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar'

import React from 'react'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import { ProviderCart } from '../../Context'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/MyAccount', element: <MyAccount /> },
    { path: '/MyOrder', element: <MyOrder /> },
    { path: '/MyOrders', element: <MyOrders /> },
    { path: '/*', element: <NotFound /> },
    { path: '/SingIn', element: <SingIn /> }
  ])
  return routes
}

function index() {
  return (
    <ProviderCart>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ProviderCart>
  )
}

export default index