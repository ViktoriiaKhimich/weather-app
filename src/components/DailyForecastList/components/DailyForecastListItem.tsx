import React, { FC } from 'react';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Typography,
} from '@mui/material';

import { getMonthAndDay } from '../../../helpers/dateAndTime/getMonthAndDay';
import { IDaily } from '../../../interfaces';

interface IProps {
  dayForecast: IDaily;
}

export const DailyForecastListItem: FC<IProps> = ({ dayForecast }) => {
  return (
    <>
      <ListItem
        data-testid='dailyForecastItem'
        alignItems='flex-start'
      >
        <ListItemAvatar>
          <Avatar
            alt='weather'
            src={`http://openweathermap.org/img/w/${dayForecast.weather[0].icon}.png`}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              component='p'
              variant='body2'
              style={{ fontWeight: 'bold' }}
              color='text.primary'
            >
              {getMonthAndDay(dayForecast.dt)}
            </Typography>
          }
          secondary={
            <Typography
              sx={{ display: 'inline' }}
              component='p'
              variant='body2'
              color='text.primary'
            >
              {dayForecast.temp.max}°C/{dayForecast.temp.min}°C.{' '}
              {dayForecast.weather[0].main}
            </Typography>
          }
        />
      </ListItem>
      <Divider
        variant='inset'
        component='li'
      />
    </>
  );
};
