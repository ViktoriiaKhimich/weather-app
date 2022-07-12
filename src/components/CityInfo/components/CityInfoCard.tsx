import React, { FC } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';

import { getCurrentDateAndTime } from '../../../helpers/dateAndTime/getCurrentDateAndTime';
import { convertUnixToTime } from '../../../helpers/dateAndTime/convertUnixToTime';
import { ICity } from '../../../interfaces';

interface IProps {
  city: ICity;
}

export const CityInfoCard: FC<IProps> = ({ city }) => {
  return (
    <Card
      variant='outlined'
      data-testid='cityInfoCard'
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color='text.secondary'
          gutterBottom
        >
          {getCurrentDateAndTime()}
        </Typography>
        <Typography
          variant='h3'
          component='div'
        >
          {city?.name}, {city?.sys.country}
        </Typography>
        <Typography
          style={{ display: 'flex' }}
          sx={{ mb: 1.5 }}
          color='text.secondary'
          component='div'
        >
          <CardMedia
            style={{ width: 50, height: 90, marginRight: 10 }}
            component='img'
            image={`http://openweathermap.org/img/w/${city?.weather[0].icon}.png`}
            alt='weather'
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ThermostatOutlinedIcon />
            <h1>{city?.main.temp}°C</h1>
          </div>
        </Typography>
        <Typography
          sx={{ fontSize: 14 }}
          variant='body2'
          component='div'
        >
          <p style={{ display: 'flex', alignItems: 'center' }}>
            Feels like {city?.main.feels_like}°C. {city?.weather[0].main}
          </p>
          <p style={{ display: 'flex', alignItems: 'center' }}>
            Temperature is from {city?.main.temp_min}°C to {city?.main.temp_max}
            °C
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
              }}
            >
              <p>Pressure: {city?.main.pressure}</p>
              <p>Humidity: {city?.main.humidity}</p>
              <p>Wind speed is: {city?.wind.speed} m/s</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'end',
                justifyContent: 'end',
              }}
            >
              <p>The sunrise is at {convertUnixToTime(city?.sys.sunrise)}</p>
              <p>The sunset is at {convertUnixToTime(city?.sys.sunset)}</p>
            </div>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
};
