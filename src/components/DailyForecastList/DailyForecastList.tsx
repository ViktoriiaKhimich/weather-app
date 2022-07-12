import React, { FC } from 'react';
import { List, Typography } from '@mui/material';
import { v4 } from 'uuid';

import { DailyForecastListItem } from './components/DailyForecastListItem';
import { IDailyWeather, IDaily } from '../../interfaces';

interface IProps {
  weather: IDailyWeather;
}

export const DailyForecastList: FC<IProps> = ({ weather }) => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      style={{ marginLeft: 30 }}
    >
      <Typography
        sx={{ display: 'inline' }}
        component='h4'
        variant='h4'
        color='text.primary'
      >
        8-day forecast
      </Typography>
      {weather.daily.map((day: IDaily) => (
        <DailyForecastListItem
          key={v4()}
          dayForecast={day}
        />
      ))}
    </List>
  );
};
