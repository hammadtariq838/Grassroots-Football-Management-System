import {
  CreateTeamResponse,
  UserGetAllResponse,
  UserSigninRequest,
  UserSigninResponse,
  UserSignoutResponse,
  UserSignupRequest,
  UserSignupResponse,
} from '@/types';
import { apiSlice } from './apiSlice';

const USER_URL = '/user';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<UserSignupResponse, UserSignupRequest>({
      query: (data) => ({
        url: `${USER_URL}/signup`,
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation<UserSigninResponse, UserSigninRequest>({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation<UserSignoutResponse, void>({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: 'POST',
      }),
    }),
    getUsers: builder.query<UserGetAllResponse, void>({
      query: () => `${USER_URL}/`,
    }),
    setTeam: builder.mutation<
      CreateTeamResponse,
      { name: string; players: string[] }
    >({
      query: (body) => ({
        url: `${USER_URL}/team`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetUsersQuery,
  useSetTeamMutation,
} = userApiSlice;
