import { findCityByName } from '../findCityByName';
import { citiesMock } from '../../mocks';

describe('test findCityByName helper', () => {
  it('should return city if city exists in a provided array', () => {
    expect(findCityByName(citiesMock, 'London')).toBe(citiesMock[0]);
  });

  it('should return undefined if city does not exist in a provided array', () => {
    expect(findCityByName(citiesMock, 'Kyiv')).toBeUndefined();
  });
});
