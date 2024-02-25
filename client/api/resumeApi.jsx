import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const resumeApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api',
    }),
    endpoints: (builder) => ({
        getExperience: builder.mutation({
            query: () => '/experience',
        }),
        getSingleExperience: builder.query({
            query: (id) => `/experience/${id}`,
        }),
        getSkills: builder.mutation({
            query: () => '/skills',
        }),
        getSingleSkills: builder.query({
            query: (id) => `/skills/${id}`,
        }),
        getProjects: builder.mutation({
            query: () => '/projects',
        }),
        getSingleProjects: builder.query({
            query: (id) => `/projects/${id}`,
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `/auth/register`,
                method: 'POST',
                body: {...data},
            }),
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: {...data},
            }),
        }),
        getAccount: builder.query({
            query: (token) => ({
                url: '/auth/me',
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            }),
        }),
        updateUsername: builder.mutation({
            query: (data) => ({
                url: `/user/username`,
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${data.token}`,
                },
                body: {...data},
            }),
        }),
        updateUser: (state, {payload}) => {
            state.user = payload;
            sessionStorage.setItem('user', JSON.stringify(state.user));
        },
        updateEmail: builder.mutation({
            query: (data) => ({
                url: `/user/email`,
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${data.token}`,
                },
                body: {...data},
            }),
        }),
    }),
});

export const {
    useGetExperienceMutation,
    useGetSingleExperienceQuery,
    useGetProjectsMutation,
    useGetSingleProjectsQuery,
    useGetSkillsMutation,
    useGetSingleSkillsQuery,
    useRegisterMutation,
    useLoginMutation,
    useGetAccountQuery,
    useUpdateEmailMutation,
    useUpdateUsernameMutation,
} = resumeApi;
