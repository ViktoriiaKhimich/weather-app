import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'cda98f771710dfa64f48f02df183ada6'

interface IWeatherState {
    cities: any[],
    loading: boolean,
    error: any,
}

export const fetchWeatherByCity = createAsyncThunk(
    'weather/fetchWeatherByCity',
    async (cityName: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}&units='metric'`)
            return response.data;
        } catch (error) {
            console.log(error);
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
            state.cities.filter((city) => city.id !== action.payload)
        }
    },
    extraReducers: {
        [fetchWeatherByCity.pending.type]: (state) => { state.loading = true },
        [fetchWeatherByCity.fulfilled.type]: (state, action: PayloadAction<never>) => {
            state.loading = false;
            state.cities.push(action.payload)
        },
        [fetchWeatherByCity.rejected.type]: (state, action) => { state.error = action.payload },
    },
})

export const { addCity } = weatherSlice.actions
export default weatherSlice.reducer
