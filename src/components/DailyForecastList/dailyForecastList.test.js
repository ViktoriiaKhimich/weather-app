import React from 'react';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';

import { DailyForecastList } from './DailyForecastList';
import { dailyWeatherMocks } from '../../mocks';

const mockDailyForecastList = props => {
  const history = createMemoryHistory();
  return render(
    <Router
      location={history.location}
      navigator={history}
    >
      <DailyForecastList {...props} />
    </Router>
  );
};

const componentsProps = {
  weather: dailyWeatherMocks,
};

describe('test DailyForecast component', () => {
  it('should display amount of dailyForecastItems equal length of weather array', () => {
    mockDailyForecastList(componentsProps);
    const forecastItems = screen.getAllByTestId('dailyForecastItem');
    expect(forecastItems).toHaveLength(componentsProps.weather.daily.length);
  });
});
