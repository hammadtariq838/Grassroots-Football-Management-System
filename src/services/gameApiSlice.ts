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
    }),
    getGameById: builder.query<GetGameResponse, void>({
      query: (id) => `${GAME_URL}/${id}`,
    }),
  }),
});

export const {
  useGetAllGamesQuery,
  useCreateGameMutation,
  useGetGameByIdQuery,
} = gameApiSlice;
