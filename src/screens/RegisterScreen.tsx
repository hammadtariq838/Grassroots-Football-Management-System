import { useAppDispatch, useAppSelector } from '@/app/hooks';
import styles from '@/css/signup.module.css';
import { setCredentials } from '@/features/auth/authSlice';
import { useRegisterMutation } from '@/services/usersApiSlice';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/menu');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
    } else {
      try {
        const res = await register({ name, username, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate('/');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        toast.error(err?.data?.message || err.error);
        console.log('error', err);
      }
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.loginform} onSubmit={submitHandler}>
        <h2>Signup</h2>
        <div className={styles.formgroup}>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Reenter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className={styles.formgroup}>
          <button type="submit" disabled={isLoading}>
            Sign Up
          </button>
        </div>
        <div className={styles.formgroup}>
          Already have an account?{' '}
          <Link to="/login" className={styles.signuplink}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
