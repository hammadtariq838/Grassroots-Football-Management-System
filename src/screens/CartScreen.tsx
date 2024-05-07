/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from 'react-router-dom';
import {
  addToCart,
  clearCartItems,
  removeFromCart,
} from '@/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { usePlaceOrderMutation } from '@/services/orderApiSlice';
import { toast } from 'sonner';

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = async (menu: any, qty: any) => {
    dispatch(addToCart({ ...menu, qty }));
  };

  const removeFromCartHandler = (id: any) => {
    dispatch(removeFromCart(id));
  };
  const [createOrder, { isLoading }] = usePlaceOrderMutation();

  const checkoutHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        totalPrice: cart.totalPrice,
      }).unwrap();
      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error('Error: placing order');
      console.log('error', err);
    }
  };

  return (
    <div className="mx-auto mt-20 w-max rounded border p-8">
      <div>
        <h1 className="text-center text-xl font-semibold">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/menu">Go Back</Link>
          </div>
        ) : (
          <div>
            {cartItems.map((item: any) => (
              <div key={item._id}>
                <div className="flex items-center gap-4 border p-8">
                  <Link to={`/product/${item._id}`}>
                    <p>{item.name}</p>
                    <div>${item.price}</div>
                  </Link>
                  <Input
                    type="number"
                    value={item.qty}
                    onChange={(e) =>
                      addToCartHandler(item, Number(e.target.value))
                    }
                  />
                  <Button onClick={() => removeFromCartHandler(item._id)}>
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <div className="flex gap-4">
          <h2>
            Subtotal ({cartItems.reduce((acc: any, item: any) => acc + item.qty, 0)})
            items
          </h2>
          <p>
            ${' '}
            {cartItems
              .reduce((acc: any, item: any) => acc + item.qty * item.price, 0)
              .toFixed(2)}
          </p>
        </div>
        <div>
          <Button
            type="button"
            className="btn-block"
            disabled={cartItems.length === 0 || isLoading}
            onClick={checkoutHandler}
          >
            Proceed To Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
