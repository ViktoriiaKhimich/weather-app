import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { addToLS } from '../helpers/addToLS';
import { removeFromLS } from '../helpers/removeFromLS';
import { ICity, IError } from '../interfaces';

const API_KEY = 'cda98f771710dfa64f48f02df183ada6'

interface IWeatherState {
    cities: ICity[],
    loading: boolean,
    error: IError | null,
}

export const fetchWeatherByCity = createAsyncThunk(
    'weather/fetchWeatherByCity',
    async (cityName: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}&units='metric'`)
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState: IWeatherState = {
    cities: [],
    loading: false,
    error: null
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
        }
    },
    extraReducers: {
        [fetchWeatherByCity.pending.type]: (state) => { state.loading = true },
        [fetchWeatherByCity.fulfilled.type]: (state, action: PayloadAction<ICity>) => {
            addToLS(action.payload.name)
            state.loading = false;
            const city = state.cities.find((city) => city.name === action.payload.name)
            if (city) {
                state.cities.map((item) => {
                    if (item.name === city.name) {
                        return item = city
                    }
                    return item
                })
            } else {
                state.cities.push(action.payload)
            }
        },
        [fetchWeatherByCity.rejected.type]: (state, action) => {
            state.error = action.payload.response.data;
            state.loading = false;
        },
    },
})

export const { addCity, removeCity } = weatherSlice.actions
export default weatherSlice.reducer
