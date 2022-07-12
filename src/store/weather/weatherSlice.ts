import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchWeatherByCity, fetchDailyWeatherByCity } from './asyncThunk';
import { addToLS } from '../../helpers/localStorage/addToLS';
import { removeFromLS } from '../../helpers/localStorage/removeFromLS';
import { ICity, IError, IDailyWeather } from '../../interfaces';

export interface IWeatherState {
  cities: ICity[];
  loading: boolean;
  error: IError | null;
  dailyWeather: IDailyWeather | null;
}

const initialState: IWeatherState = {
  cities: [],
  loading: false,
  error: null,
  dailyWeather: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addCity: (state, action) => {
      state.cities.push(action.payload);
    },
    removeCity: (state, action) => {
      state.cities = state.cities.filter(city => city.id !== action.payload.id);
      removeFromLS(action.payload.name);
    },
  },
  extraReducers: {
    [fetchWeatherByCity.pending.type]: state => {
      state.loading = true;
    },
    [fetchWeatherByCity.fulfilled.type]: (
      state,
      action: PayloadAction<ICity>
    ) => {
      addToLS(action.payload.name);
      state.loading = false;
      const city = state.cities.find(city => city.name === action.payload.name);
      if (city) {
        const newState = state.cities.map(item => {
          return item.name === action.payload.name ? action.payload : item;
        });
        state.cities = newState;
      } else {
        state.cities.push(action.payload);
      }
    },
    [fetchWeatherByCity.rejected.type]: (state, action) => {
      state.error = action.payload.response.data;
      state.loading = false;
    },
    [fetchDailyWeatherByCity.pending.type]: state => {
      state.loading = true;
    },
    [fetchDailyWeatherByCity.fulfilled.type]: (
      state,
      action: PayloadAction<IDailyWeather>
    ) => {
      state.loading = false;
      state.dailyWeather = action.payload;
    },
    [fetchDailyWeatherByCity.rejected.type]: (state, action) => {
      state.error = action.payload.response.data;
      state.loading = false;
    },
  },
});

export const { addCity, removeCity } = weatherSlice.actions;
export default weatherSlice.reducer;
