import React from 'react';
import { useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './App';
import { appState } from './mocks';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
}));

const mockApp = () => {
  const mockStore = configureStore();
  const history = createMemoryHistory();
  const store = mockStore(appState);
  return render(
    <Provider store={store}>
      <Router
        location={history.location}
        navigator={history}
      >
        <App />
      </Router>
    </Provider>
  );
};

describe('Test CitiesList component', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback(appState);
    });
  });

  it('should display notification if error occurs', () => {
    mockApp();
    const notif = screen.getByTestId('notif');
    expect(notif).toBeInTheDocument();
  });

  it('should display loading backdrop if loading state is true', () => {
    mockApp();
    const loading = screen.getByTestId('loading');
    expect(loading).toBeInTheDocument();
  });
});
