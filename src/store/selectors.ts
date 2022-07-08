import { RootState } from "./store";
import { ICity } from "../interfaces";

const getCities = (state: RootState) => state.weather.cities

export const getCityById = (id: number) => (state: RootState): ICity | undefined => {
    const cities = getCities(state);
    return cities.find((city) => city.id === id);
};

export const sortCitiesInAlphabeticOrder = () => (state: RootState): ICity[] => {
    const cities = getCities(state);
    const arrayForSort = [...cities];
    function compare(a: ICity, b: ICity) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }
    return arrayForSort.sort(compare);
};

