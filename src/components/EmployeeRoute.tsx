import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@/app/hooks';

const EmployeeRoute = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  return userInfo && userInfo.isEmployee ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};
export default EmployeeRoute;
