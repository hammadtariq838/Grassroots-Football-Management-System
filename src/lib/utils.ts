import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const addDecimals = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateCart = (state: any) => {
  // Calculate the items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce(
      (acc: number, item: { price: number; qty: number }) =>
        acc + item.price * item.qty,
      0
    )
  );

  // Calculate the total price
  state.totalPrice = Number(state.itemsPrice).toFixed(2);

  // Save the cart to localStorage
  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};
