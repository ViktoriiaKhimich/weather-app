import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';

import { CityCard } from '../CityCard/CityCard';
import { RootState } from '../../store/store';

export const CitiesList: FC = () => {
  const cities = useSelector((state: RootState) => state.weather.cities);

  return (
    <div style={{ margin: 30 }}>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {!cities.length ? (
          <h1 style={{ marginLeft: 'auto', marginRight: 'auto', color: 'red' }}>
            Add a city to your weather forecast
          </h1>
        ) : (
          cities.map(city => (
            <Grid
              item
              xs={3}
              key={city.id}
            >
              <CityCard
                city={city}
                testId='city-card'
              />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};
