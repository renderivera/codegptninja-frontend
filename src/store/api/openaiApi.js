import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const openaiApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
	reducerPath: "openai",
	endpoints: (builder) => ({
		fetchCode: builder.mutation({
			query: (prompt) => ({
				url: "/code",
				body: { prompt: prompt },
				method: "POST",
			}),
		}),
	}),
});

export const { useFetchCodeMutation } = openaiApi;
