import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { CityInfo } from './CityInfo';
import { citiesMock } from '../../mocks';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
}));

const componentProps = {
  city: citiesMock[0],
};

const mockCityInfo = props => {
  const history = createMemoryHistory();
  return render(
    <Router
      location={history.location}
      navigator={history}
    >
      <CityInfo {...props} />
    </Router>
  );
};

describe('Test CityInfo component', () => {
  it('should display a CityInfoCard component', () => {
    mockCityInfo(componentProps);
    const cityInfoCard = screen.getByTestId('cityInfoCard');
    expect(cityInfoCard).toBeInTheDocument();
  });
});
