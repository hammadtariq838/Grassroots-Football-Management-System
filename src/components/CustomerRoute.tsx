import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@/app/hooks';

const CustomerRoute = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  return userInfo && userInfo.isEmployee ? (
    <Navigate to="/login" replace />
  ) : (
    <Outlet />
  );
};
export default CustomerRoute;
