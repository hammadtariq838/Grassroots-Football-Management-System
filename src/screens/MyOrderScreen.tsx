import styles from '@/css/myorder.module.css';
import { useGetMyOrdersQuery } from '@/services/orderApiSlice';

/**
 *
 * [
  {
    "_id": "6623a8544a94b535dec2b459",
    "user": "662385b2998a84217c9a39f7",
    "orderItems": [
      {
        "name": "Burger",
        "qty": 4,
        "price": 10.99,
        "menu": "662385b2998a84217c9a39f9",
        "_id": "6623a8544a94b535dec2b45a"
      }
    ],
    "totalPrice": 43.96,
    "status": "processing",
    "createdAt": "2024-04-20T11:34:44.725Z",
    "updatedAt": "2024-04-20T11:34:44.725Z",
    "__v": 0
  }
]
 */

const MyOrderScreen = () => {
  const { data: orders } = useGetMyOrdersQuery({});
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>My Order</h2>
        {
          <pre>
            <code>{JSON.stringify(orders, null, 2)}</code>
          </pre>
        }
        {/* <div className={styles.orderdetails}>
          <div className={styles.item}>
            <span className={styles.name}>Burger</span>
            <span className={styles.quantity}>x2</span>
            <span className={styles.price}>$10.00</span>
          </div>
          <div className={styles.item}>
            <span className={styles.name}>Pizza</span>
            <span className={styles.quantity}>x1</span>
            <span className={styles.price}>$12.00</span>
          </div>
          <div className={styles.total}>
            <span>Total:</span>
            <span className={styles.totalprice}>$22.00</span>
          </div>
          <div className={styles.status}>
            <span>Status:</span>
            <span className={styles.orderstatus}>In Progress</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MyOrderScreen;
