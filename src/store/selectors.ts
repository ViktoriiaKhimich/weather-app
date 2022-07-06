import { RootState } from "./store"

const getCities = (state: RootState) => state.weather.cities

export const getCityById = (id: any) => (state: RootState) => {
    const cities = getCities(state);
    return cities.find((city) => city.id === id);
};

