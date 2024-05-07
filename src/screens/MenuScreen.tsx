import styles from '@/css/menu.module.css';
import { useGetMenuQuery } from '@/services/menuApiSlice';
import { Link } from 'react-router-dom';

const MenuScreen = () => {
  const { data, isLoading } = useGetMenuQuery({});

  return (
    <div className={styles.container}>
      <h2 className="mt-12">Menu</h2>
      <div className={styles.menuitems}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data.menu.map((menuItem: any) => (
            <div className={styles.itemcard} key={menuItem._id}>
              <Link to={`${menuItem._id}`}>
                <div className={styles.itemdetails}>
                  <h3 className={styles.itemname}>{menuItem.name}</h3>
                  <p className={styles.itemdescription}>
                    {menuItem.description}
                  </p>
                  <p className={styles.itemdescription}>
                    {' '}
                    Price: {menuItem.price}
                  </p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MenuScreen;
