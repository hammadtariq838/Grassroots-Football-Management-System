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
import { store } from './app/store';
import { Provider } from 'react-redux';

import PrivateRoute from './components/PrivateRoute.tsx';

import HomeScreen from './screens/HomeScreen.tsx';
import LoginScreen from './screens/LoginScreen.tsx';
import RegisterScreen from './screens/RegisterScreen.tsx';
import DashboardScreen from './screens/DashboardScreen.tsx';
import ChatScreen from './screens/ChatScreen.tsx';
import ChatDetailScreen from './screens/ChatDetailScreen.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomeScreen />} />
      <Route path="login" element={<LoginScreen />} />
      <Route path="register" element={<RegisterScreen />} />
      {/* private routes */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="dashboard" element={<DashboardScreen />} />
        <Route path="chat" element={<ChatScreen />} />
        <Route path="chat/:id" element={<ChatDetailScreen />} />
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
