// import { Button } from '@/components/ui/button';
import styles from '@/css/orders.module.css';
import { useGetOrdersQuery } from '@/services/orderApiSlice';

const OrdersScreen = () => {
  const { data: orders } = useGetOrdersQuery({});
  return (
    <div className={styles.container}>
      <h2 className="mt-12">Orders</h2>
      {
        <pre>
          <code>{JSON.stringify(orders, null, 2)}</code>
        </pre>
      }

      {/* <div className={styles.orders}>
        <div className={styles.ordercard}>
          <div className={styles.orderdetails}>
            <p>
              <strong>Items:</strong> Burger x2, Pizza x1
            </p>
            <p>
              <strong>Prices:</strong> $10.00, $12.00
            </p>
            <p>
              <strong>Total Price:</strong> $22.00
            </p>
            <p>
              <strong>Status:</strong> In Progress
            </p>
          </div>
          <div className={styles.updatestatus}>
            <select>
              <option value="processing">Processing</option>
              <option value="preparing">Preparing</option>
              <option value="ready">Ready</option>
              <option value="delivered">Delivered</option>
            </select>
            <Button className="w-max">Update Status</Button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default OrdersScreen;
