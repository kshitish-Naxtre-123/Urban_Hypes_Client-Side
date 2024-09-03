import { apiSlice } from "./apiSlice";
import { CATEGORY_URL } from "../constants";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCetgories: builder.query({
      query: () => `${CATEGORY_URL}/categories`,
    }),
  }),
});

export const { useGetAllCetgoriesQuery } = categoryApiSlice;
