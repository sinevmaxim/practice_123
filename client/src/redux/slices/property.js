// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import {api} from '../../api/axios.js';

// export const fetchProperties = createAsyncThunk(
//     'properties/fetchProperties',
//     async () => {
//         const { data } = await api.get('/api/property');
//         return data;
//     }
// );

// const initialState = {
//     properties: {
//         items: [],
//         status: 'loading',
//     },
// };

// const propertySlice = createSlice({
//     name: 'properties',
//     initialState,
//     reducers: {
//         removeProperty: (state, action) => {
//             state.posts = state.posts.filter(
//                 (obj) => obj._id !== action.payload
//             );
//         },
//     },
//     extraReducers: {
//         [fetchProperties.pending]: (state) => {
//             state.properties.status = 'loading';
//         },
//         [fetchProperties.fulfilled]: (state, action) => {
//             state.properties.items = action.payload;
//             state.properties.status = 'loaded';
//         },
//         [fetchProperties.rejected]: (state) => {
//             state.properties.items = [];
//             state.properties.status = 'error';
//         },
//     },
// });

// export const propertyReducer = propertySlice.reducer;
