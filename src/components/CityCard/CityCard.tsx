import React, { FC } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';

import { convertKelvinToCelsius } from '../../helpers/convertKelvinToCelsius';

type City = any

export const CityCard: FC<City> = ({ city }) => {

    const mainInfo = () => {
        return (
            <><ThermostatOutlinedIcon />
                {convertKelvinToCelsius(city.main.temp)}
                {' '} {city.weather[0].main}
            </>
        )
    }

    return (
        <Card sx={{ maxWidth: 345 }} style={{ marginTop: 50 }}>
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
                <Button size="small" variant="contained">Update current weather</Button>
            </CardActions>
        </Card>
    );
}
