import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Hotel} from '../types/hotel';

export const hotelApi = createApi({
  reducerPath: 'hotelApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://run.mocky.io/v3/',
  }),
  endpoints: builder => ({
    getHotelByName: builder.query<Hotel, string>({
      query: () => 'eef3c24d-5bfd-4881-9af7-0b404ce09507',
    }),
  }),
});

export const {useGetHotelByNameQuery} = hotelApi;
