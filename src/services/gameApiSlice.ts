import {
  CreateGameResponse,
  GetAllGamesResponse,
  GetGameResponse,
} from '@/types';
import { apiSlice } from './apiSlice';

const GAME_URL = '/game';

export const gameApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllGames: builder.query<GetAllGamesResponse, void>({
      query: () => `${GAME_URL}/`,
      providesTags: ['Game'],
    }),
    createGame: builder.mutation<
      CreateGameResponse,
      {
        name: string;
        dateTime: string;
        teams: string[];
      }
    >({
      query: (data) => ({
        url: `${GAME_URL}/`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Game'],
    }),
    getGameById: builder.query<GetGameResponse, string>({
      query: (id) => `${GAME_URL}/${id}`,
    }),
  }),
});

export const {
  useGetAllGamesQuery,
  useCreateGameMutation,
  useGetGameByIdQuery,
} = gameApiSlice;
