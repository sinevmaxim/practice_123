// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import {api} from '../../api/axios.js';

// export const fetchUserInfo = createAsyncThunk(
//     'auth/fetchUserInfo',
//     async (params) => {
//         const { data } = await api.post('/api/auth/login', params);
//         return data;
//     }
// );

// export const fetchRegister = createAsyncThunk(
//     'auth/fetchRegister',
//     async (params) => {
//         console.log(params);
//         const { data } = await api.post('/api/auth/register', params);
//         return data;
//     }
// );

// export const fetchGetMe = createAsyncThunk('auth/fetchGetMe', async () => {
//     const { data } = await api.get('/api/auth/me');
//     return data;
// });

// export const fetchLogout = createAsyncThunk('auth/fetchLogOut', async () => {
//     const { data } = await api.post('/api/auth/logout');
//     return data;
// });

// const initialState = {
//     data: null,
//     status: 'loading',
// };

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         setUserData: (state, action) => {
//             state.data = action.payload;
//         },
//         logout: (state) => {
//             state.data = null;
//         },
//     },
//     extraReducers: {
//         [fetchUserInfo.fulfilled]: (state, action) => {
//             state.data = action.payload;
//             state.status = 'loaded';
//         },
//         [fetchUserInfo.pending]: (state) => {
//             state.status = 'loading';
//             state.data = null;
//         },
//         [fetchUserInfo.rejected]: (state) => {
//             state.status = 'error';
//             state.data = null;
//         },
//         [fetchGetMe.fulfilled]: (state, action) => {
//             state.data = action.payload;
//             state.status = 'loaded';
//         },
//         [fetchGetMe.pending]: (state) => {
//             state.status = 'loading';
//             state.data = null;
//         },
//         [fetchGetMe.rejected]: (state) => {
//             state.status = 'error';
//             state.data = null;
//         },
//         [fetchRegister.fulfilled]: (state, action) => {
//             state.data = action.payload;
//             state.status = 'loaded';
//         },
//         [fetchRegister.pending]: (state) => {
//             state.status = 'loading';
//             state.data = null;
//         },
//         [fetchRegister.rejected]: (state) => {
//             state.status = 'error';
//             state.data = null;
//         },
//         [fetchLogout.fulfilled]: (state, action) => {
//             state.data = action.payload;
//             state.status = 'loaded';
//         },
//         [fetchLogout.pending]: (state) => {
//             state.status = 'loading';
//             state.data = null;
//         },
//         [fetchLogout.rejected]: (state) => {
//             state.status = 'error';
//             state.data = null;
//         },
//     },
// });

// export const selectIsAuth = (state) => Boolean(state.auth.data);
// export const authReducer = authSlice.reducer;
// export const { logout, setUserData } = authSlice.actions;
