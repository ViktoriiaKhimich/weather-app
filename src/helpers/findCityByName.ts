import { ICity } from '../interfaces';

export const findCityByName = (
  cities: ICity[],
  name: string
): ICity | undefined => {
  return cities.find(city => city.name === name);
};
