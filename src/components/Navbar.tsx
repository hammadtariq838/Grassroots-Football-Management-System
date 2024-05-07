import { Link, useNavigate } from 'react-router-dom';
import { Button, buttonVariants } from './ui/button';
import { GoalIcon } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useLogoutMutation } from '@/services/userApiSlice';
import { logout } from '@/features/auth/authSlice';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const { userInfo } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
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
    <header className="bg-gray-900 py-4 px-6 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link to='/' className="flex items-center gap-4">
          <GoalIcon className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Grassroots Football</h1>
        </Link>
        <div className="flex items-center gap-4">
          {
            userInfo ? (
              <>
                <Button variant='outline' className='text-black' onClick={logoutHandler}>Logout</Button>
              </>
            ) : (
              <>
                <Link to='/login' className={cn(buttonVariants({ variant: 'outline' }), 'text-black')}>Sign In</Link>
                <Link to='/register' className={cn(buttonVariants({ variant: 'outline' }), 'text-black')}>Sign Up</Link>
              </>
            )
          }
        </div>
      </div>
    </header>
  );
};

export default Navbar;
