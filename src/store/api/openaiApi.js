import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const openaiApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.BACKEND_URL }),
	reducerPath: "openai",
	endpoints: (builder) => ({
		fetchCode: builder.query({
			query: (prompt) => ({
				url: "/writecode",
				body: { prompt },
				method: "POST",
			}),
		}),
		fetchExplain: builder.query({
			query: (prompt) => ({
				url: "/explaincode",
				body: { prompt },
				method: "POST",
			}),
		}),
		fetchUnitTest: builder.query({
			query: (prompt) => ({
				url: "/writeunittest",
				body: { prompt },
				method: "POST",
			}),
		}),
	}),
});

export const { useLazyFetchCodeQuery, useLazyFetchExplainQuery, useLazyFetchUnitTestQuery } = openaiApi;
