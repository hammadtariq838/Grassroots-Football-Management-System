import styles from '@/css/navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ShoppingCart, Store } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useLogoutMutation } from '@/services/usersApiSlice';
import { logout } from '@/features/auth/authSlice';
import { toast } from 'sonner';

const Navbar = () => {
  const { userInfo } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall({}).unwrap();
      dispatch(logout());
      toast.error('Successfully logged out!');
      navigate('/login');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err?.data?.message || err.error);
      console.error(err);
    }
  };

  return (
    <div>
      <ul className={styles.container}>
        <span className={styles.subContainer}>
          <Link to="/">
            <Store className="mx-8" />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          {userInfo?.isEmployee ? (
            <Link to="/orders">Orders</Link>
          ) : (
            <Link to="/my-orders">My Orders</Link>
          )}
        </span>
        <span className={styles.subContainer}>
          {userInfo ? (
            <>
              <Link to="/profile">Profile</Link>
              {userInfo?.isEmployee ? null : (
                <Link to="/cart">
                  <ShoppingCart />
                </Link>
              )}

              <Button
                variant="destructive"
                className={styles.logout}
                onClick={logoutHandler}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </span>
      </ul>
    </div>
  );
};

export default Navbar;
