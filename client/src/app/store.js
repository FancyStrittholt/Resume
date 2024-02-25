import { configureStore } from '@reduxjs/toolkit';
import { resumeApi } from '../../api/resumeApi';
import slice from './slice';

const store = configureStore({
  reducer: {
    state: slice,
    [resumeApi.reducerPath]: resumeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(resumeApi.middleware),
});

export default store;
