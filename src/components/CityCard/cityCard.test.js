import React from 'react';
import { useDispatch } from 'react-redux';
import { Router, useNavigate } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';

import { removeCity } from '../../store/weather/weatherSlice';
import { fetchWeatherByCity } from '../../store/weather/asyncThunk';
import { CityCard } from './CityCard';
import { citiesMock } from '../../mocks';

jest.mock('../../store/weather/weatherSlice');
jest.mock('../../store/weather/asyncThunk');

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const mockCityCard = props => {
  const history = createMemoryHistory();
  return render(
    <Router
      location={history.location}
      navigator={history}
    >
      <CityCard {...props} />
    </Router>
  );
};

const componentsProps = {
  city: citiesMock[0],
  testId: 'city-card',
};

describe('test CityCard component', () => {
  const dispatch = jest.fn();
  const navigate = jest.fn();
  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);
    useNavigate.mockReturnValue(navigate);
  });
  it('calls dispatch on button click to remove city from list of cities', () => {
    removeCity.mockImplementation(city => city);
    mockCityCard(componentsProps);
    fireEvent.click(screen.getByTestId('delete'));
    expect(dispatch).toBeCalledWith(componentsProps.city);
  });

  it('should redirect to city info page on button click', () => {
    history.push = jest.fn();
    mockCityCard(componentsProps);
    fireEvent.click(screen.getByTestId('link'));
    expect(navigate).toBeCalledWith(`/cities/${componentsProps.city.id}`);
  });

  it('should dispatch an action to update weather on update weather button click', () => {
    fetchWeatherByCity.mockImplementation(cityName => cityName);
    mockCityCard(componentsProps);
    fireEvent.click(screen.getByTestId('updateWeather'));
    expect(dispatch).toBeCalledWith(componentsProps.city.name);
  });
});
