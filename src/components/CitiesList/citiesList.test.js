import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { CitiesList } from './CitiesList';
import { mockAppState } from '../../mocks';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
}));

const mockCititesList = () => {
  const mockStore = configureStore();
  const history = createMemoryHistory();
  const store = mockStore(mockAppState);
  return render(
    <Provider store={store}>
      <Router
        location={history.location}
        navigator={history}
      >
        <CitiesList />
      </Router>
    </Provider>
  );
};

describe('Test CitiesList component', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback(mockAppState);
    });
  });

  it('should display a text if cities array is empty', () => {
    useSelector.mockReturnValue(() => []);
    mockCititesList();
    const noCitiesText = screen.getByText(
      'Add a city to your weather forecast'
    );
    expect(noCitiesText).toBeInTheDocument();
  });

  it('should display amount of city cards equal to length of cities array', async () => {
    mockCititesList();
    const cityCards = await screen.findAllByTestId('city-card');
    expect(cityCards).toHaveLength(1);
  });
});
