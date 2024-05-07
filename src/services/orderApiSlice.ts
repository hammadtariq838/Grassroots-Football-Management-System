import { apiSlice } from './apiSlice';
const ORDERS_URL = '/api/orders';

/**
 * 
router
  .route("/")
  .get(protect, employee, getOrders)
  .post(protect, addOrderItems);
router.get("/myorders", protect, getMyOrders);
router.put("/:id/status", protect, employee, updateOrderStatus);
 */

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => ({
        url: ORDERS_URL,
      }),
    }),
    placeOrder: builder.mutation({
      query: (data) => ({
        url: ORDERS_URL,
        method: 'POST',
        body: data,
      }),
    }),
    getMyOrders: builder.query({
      query: () => ({
        url: `${ORDERS_URL}/myorders`,
      }),
    }),
  }),
});

export const { useGetOrdersQuery, useGetMyOrdersQuery, usePlaceOrderMutation } =
  orderApiSlice;
