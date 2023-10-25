import { IList, ILists } from "../../model/listModel"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const listApi = createApi({
  reducerPath: "listApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://dummyjson.com/todos`,
  }),
  tagTypes: ["List"],
  endpoints: (builder) => ({
    getListsWithPagination: builder.query<
      ILists,
      { skip?: number; limit?: number }
    >({
      query: ({ skip = 1, limit = 10 }) => ({
        url: `/?skip=${skip}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["List"],
    }),
    getList: builder.query<IList, number>({
      query: (id) => ({
        url: `/${id}/`,
        method: "GET",
      }),
      providesTags: ["List"],
    }),
  }),
})

export const {
  useGetListsWithPaginationQuery,
  useLazyGetListsWithPaginationQuery,
  useGetListQuery,
} = listApi
