import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const BASE_URL = 'http://localhost:5000';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    return headers;
  },
  credentials: 'include',
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User', 'Game'],
  endpoints: () => ({}),
});
