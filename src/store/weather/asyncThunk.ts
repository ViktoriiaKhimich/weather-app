import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { addNotication } from '../notificationSlice';

const API_KEY = 'cda98f771710dfa64f48f02df183ada6';

export const fetchWeatherByCity = createAsyncThunk(
  'weather/fetchWeatherByCity',
  async (cityName: string, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${API_KEY}`
      );
      return response.data;
    } catch (error: any) {
      dispatch(
        addNotication({
          severity: 'error',
          message: error.response.data.message,
          isOpen: true,
        })
      );
      return rejectWithValue(error);
    }
  }
);

export const fetchDailyWeatherByCity = createAsyncThunk(
  'weather/fetchDailyWeatherByCity',
  async (
    { lat, lon }: { lat: number; lon: number },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current,hourly&units=metric&appid=cda98f771710dfa64f48f02df183ada6`
      );
      return response.data;
    } catch (error: any) {
      dispatch(
        addNotication({
          severity: 'error',
          message: error.response.data.message,
          isOpen: true,
        })
      );
      return rejectWithValue(error);
    }
  }
);
