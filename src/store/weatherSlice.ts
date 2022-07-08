import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { addNotication } from './notificationSlice';

import { addToLS } from '../helpers/localStorage/addToLS';
import { removeFromLS } from '../helpers/localStorage/removeFromLS';
import { ICity, IError, IDailyWeather } from '../interfaces';

const API_KEY = 'cda98f771710dfa64f48f02df183ada6'

interface IWeatherState {
    cities: ICity[];
    loading: boolean;
    error: IError | null;
    dailyWeather: IDailyWeather | null;
}

export const fetchWeatherByCity = createAsyncThunk(
    'weather/fetchWeatherByCity',
    async (cityName: string, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${API_KEY}`)
            return response.data
        } catch (error: any) {
            dispatch(addNotication({
                severity: 'error',
                message: error.response.data.message,
                isOpen: true
            }))
            return rejectWithValue(error)
        }
    }
)

export const fetchDailyWeatherByCity = createAsyncThunk(
    'weather/fetchDailyWeatherByCity',
    async ({ lat, lon }: { lat: number, lon: number }, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current,hourly&units=metric&appid=cda98f771710dfa64f48f02df183ada6`)
            return response.data
        } catch (error: any) {
            dispatch(addNotication({
                severity: 'error',
                message: error.response.data.message,
                isOpen: true
            }))
            return rejectWithValue(error)
        }
    }
)

const initialState: IWeatherState = {
    cities: [],
    loading: false,
    error: null,
    dailyWeather: null,
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        addCity: (state, action) => {
            state.cities.push(action.payload)
        },
        removeCity: (state, action) => {
            state.cities = state.cities.filter((city) => city.id !== action.payload.id)
            removeFromLS(action.payload.name)
        },
    },
    extraReducers: {
        [fetchWeatherByCity.pending.type]: (state) => { state.loading = true },
        [fetchWeatherByCity.fulfilled.type]: (state, action: PayloadAction<ICity>) => {
            addToLS(action.payload.name)
            state.loading = false;
            const city = state.cities.find((city) => city.name === action.payload.name)
            if (city) {
                const newState = state.cities.map((item) => {
                    return item.name === action.payload.name ? action.payload : item
                })
                state.cities = newState
            } else {
                state.cities.push(action.payload)
            }
        },
        [fetchWeatherByCity.rejected.type]: (state, action) => {
            state.error = action.payload.response.data;
            state.loading = false;
        },
        [fetchDailyWeatherByCity.pending.type]: (state) => { state.loading = true },
        [fetchDailyWeatherByCity.fulfilled.type]: (state, action: PayloadAction<IDailyWeather>) => {
            state.loading = false;
            state.dailyWeather = action.payload;
        },
        [fetchDailyWeatherByCity.rejected.type]: (state, action) => {
            state.error = action.payload.response.data;
            state.loading = false;
        }
    },
})

export const { addCity, removeCity } = weatherSlice.actions
export default weatherSlice.reducer
