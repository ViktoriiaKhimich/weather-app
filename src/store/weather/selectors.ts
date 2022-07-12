import { RootState } from '../store';
import { ICity } from '../../interfaces';

const getCities = (state: RootState) => state.weather.cities;

export const getCityById =
  (id: number) =>
  (state: RootState): ICity | undefined => {
    const cities = getCities(state);
    return cities.find(city => city.id === id);
  };
