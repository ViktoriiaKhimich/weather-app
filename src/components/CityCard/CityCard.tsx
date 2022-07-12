import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

import { fetchWeatherByCity } from '../../store/weather/asyncThunk';
import { removeCity } from '../../store/weather/weatherSlice';
import { AppDispatch } from '../../store/store';
import { SHOW_MORE_BTN, UPDATE_WEATHER_BTN } from '../../constants';
import { ICity } from '../../interfaces';

interface IProps {
  city: ICity;
  testId: string;
}

export const CityCard: FC<IProps> = ({ city, testId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <Card
      {...(testId && { 'data-testid': testId })}
      sx={{ maxWidth: 345 }}
      style={{ position: 'relative' }}
    >
      <IconButton
        data-testid='delete'
        aria-label='delete'
        onClick={() => dispatch(removeCity(city))}
        style={{ position: 'absolute', top: 10, right: 10 }}
      >
        <DeleteIcon color='primary' />
      </IconButton>
      <CardMedia
        component='img'
        height='140'
        image={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
        alt='weather'
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
        >
          {city.name}, {city.sys.country}
        </Typography>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
        >
          <>
            <ThermostatOutlinedIcon />
            {city.main.temp}°C {city.weather[0].main}
          </>
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          Min temp: {city.main.temp_min}°C Max temp: {city.main.temp_max}°C
        </Typography>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button
          onClick={() => navigate(`/cities/${city.id}`)}
          data-testid='link'
          size='small'
        >
          {SHOW_MORE_BTN}
        </Button>
        <Button
          data-testid='updateWeather'
          size='small'
          variant='contained'
          onClick={() => dispatch(fetchWeatherByCity(city.name))}
        >
          {UPDATE_WEATHER_BTN}
        </Button>
      </CardActions>
    </Card>
  );
};
