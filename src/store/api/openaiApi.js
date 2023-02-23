import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const openaiApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
	reducerPath: "openai",
	endpoints: (builder) => ({
		fetchCode: builder.query({
			query: (prompt) => ({
				url: "/code",
				body: { prompt },
				method: "POST",
			}),
		}),
	}),
});

export const { useLazyFetchCodeQuery } = openaiApi;
