import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, IconButton } from '@mui/material';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

import { convertKelvinToCelsius } from '../../helpers/convertKelvinToCelsius';
import { fetchWeatherByCity, removeCity } from '../../store/weatherSlice';
import { AppDispatch } from '../../store/store';
import { SHOW_MORE_BTN, UPDATE_WEATHER_BTN } from '../../constants';
import { ICity } from '../../interfaces';

interface IProps {
    city: ICity
}

export const CityCard: FC<IProps> = ({ city }) => {

    const dispatch = useDispatch<AppDispatch>()

    const mainInfo = (): JSX.Element => {
        return (
            <>
                <ThermostatOutlinedIcon />
                {city.main.temp}
                {' '} {city.weather[0].main}
            </>
        )
    }

    return (
        <Card sx={{ maxWidth: 345 }} style={{ position: 'relative' }}>
            <IconButton aria-label="delete" onClick={() => dispatch(removeCity(city))} style={{ position: 'absolute', top: 10, right: 10 }}>
                <DeleteIcon color='primary' />
            </IconButton>
            <CardMedia
                component="img"
                height="140"
                image={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {city.name}, {city.sys.country}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {mainInfo()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Min temp:{convertKelvinToCelsius(city.main.temp_min)}
                    {' '} Max temp:{convertKelvinToCelsius(city.main.temp_max)}
                </Typography>
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Link to={`/cities/${city.id}`}><Button size="small">{SHOW_MORE_BTN}</Button></Link>
                <Button size="small" variant="contained" onClick={() => dispatch(fetchWeatherByCity(city.name))}>{UPDATE_WEATHER_BTN}</Button>
            </CardActions>
        </Card>
    );
}
