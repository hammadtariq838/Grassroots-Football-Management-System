import { useAppSelector } from '@/app/hooks';
import styles from '@/css/profile.module.css';
import { cn } from '@/lib/utils';
import MyOrderScreen from './MyOrderScreen';

const ProfileScreen = () => {
  const { userInfo } = useAppSelector((state) => state.auth);

  return (
    <div className={styles.container}>
      <div className={cn(styles.profile, 'mt-12')}>
        <h2>Profile</h2>
        <div className={styles.profileDetails}>
          <p>
            <strong>Name:</strong> {userInfo.name}
          </p>
          <p>
            <strong>Username:</strong> {userInfo.username}
          </p>
          <p>
            <strong>Role:</strong>{' '}
            {userInfo.isEmployee ? 'Employee' : 'Customer'}
          </p>
        </div>
        <MyOrderScreen />
      </div>
    </div>
  );
};

export default ProfileScreen;
