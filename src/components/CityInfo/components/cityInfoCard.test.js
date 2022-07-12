import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { CityInfoCard } from './CityInfoCard';
import { citiesMock } from '../../../mocks';

afterEach(cleanup);

it('renders correctly', () => {
  const { asFragment } = render(<CityInfoCard city={citiesMock[0]} />);
  expect(asFragment()).toMatchSnapshot();
});
