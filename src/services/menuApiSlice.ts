import { apiSlice } from './apiSlice';
const MENU_URL = '/api/menu';

export const menuApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: () => ({
        url: MENU_URL,
      }),
    }),
    getMenuById: builder.query({
      query: (id) => ({
        url: `${MENU_URL}/${id}`,
      }),
    }),
  }),
});

export const { useGetMenuByIdQuery, useGetMenuQuery } = menuApiSlice;
