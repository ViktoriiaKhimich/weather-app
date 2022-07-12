import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weather/weatherSlice';
import notifReducer from '../store/notificationSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    notif: notifReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
