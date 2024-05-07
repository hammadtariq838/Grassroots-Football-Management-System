import { useAppDispatch } from '@/app/hooks';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import styles from '@/css/menu.module.css';
import { addToCart } from '@/features/cart/cartSlice';
import { useGetMenuByIdQuery } from '@/services/menuApiSlice';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MenuDetailScreen = () => {
  const { id: menuId } = useParams();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  const { data: menu, isLoading } = useGetMenuByIdQuery(menuId);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...menu, qty }));
    navigate('/cart');
  };

  return (
    <div className={styles.container}>
      <h2 className="mt-12">Menu</h2>
      <div className={styles.menuitems}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.itemcard} key={menu._id}>
            <div className={styles.itemdetails}>
              <h3 className={styles.itemname}>{menu.name}</h3>
              <p className={styles.itemdescription}>{menu.description}</p>
              <p className={styles.itemdescription}> Price: {menu.price}</p>
            </div>
            <div className="flex gap-8">
              <div className="flex items-center gap-2 ">
                <label className="m-auto">Qty</label>
                <Input
                  type="number"
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                />
              </div>

              <Button
                disabled={qty <= 0}
                onClick={addToCartHandler}
                className="w-max"
              >
                Add To Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuDetailScreen;
