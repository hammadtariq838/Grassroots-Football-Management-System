import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.tsx';
import MenuScreen from './screens/MenuScreen.tsx';
import LoginScreen from './screens/LoginScreen.tsx';
import RegisterScreen from './screens/RegisterScreen.tsx';
import MyOrderScreen from './screens/MyOrderScreen.tsx';
import OrdersScreen from './screens/OrdersScreen.tsx';
import ProfileScreen from './screens/ProfileScreen.tsx';

import { store } from './app/store';
import { Provider } from 'react-redux';

import PrivateRoute from './components/PrivateRoute.tsx';
import MenuDetailScreen from './screens/MenuDetailScreen.tsx';
import CartScreen from './screens/CartScreen.tsx';
import EmployeeRoute from './components/EmployeeRoute.tsx';
import CustomerRoute from './components/CustomerRoute.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomeScreen />} />
      <Route path="login" element={<LoginScreen />} />
      <Route path="register" element={<RegisterScreen />} />
      {/* private routes */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="profile" element={<ProfileScreen />} />
        <Route path="menu" element={<MenuScreen />} />
      </Route>
      <Route path="" element={<CustomerRoute />}>
        <Route path="my-orders" element={<MyOrderScreen />} />
        <Route path="cart" element={<CartScreen />} />
        <Route path="menu/:id" element={<MenuDetailScreen />} />
      </Route>
      <Route path="" element={<EmployeeRoute />}>
        <Route path="orders" element={<OrdersScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
