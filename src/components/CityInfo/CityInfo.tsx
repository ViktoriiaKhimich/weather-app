import React, { FC } from 'react';
import { CardMedia } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { getCurrentDateAndTime, convertMsToHoursAndMins } from '../../helpers/getDateAndTime';
import { ICity } from '../../interfaces';
import { convertKelvinToCelsius } from '../../helpers/convertKelvinToCelsius';
import { getCityById } from '../../store/selectors';


interface IProps {
    city: ICity | undefined
}

const card = (city: ICity | undefined) => {

    return (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {getCurrentDateAndTime()}
                </Typography>
                <Typography variant="h3" component="div">
                    {city?.name}, {city?.sys.country}
                </Typography>
                <Typography style={{ display: 'flex' }} sx={{ mb: 1.5 }} color="text.secondary" component="div">
                    <CardMedia
                        style={{ width: 50, height: 90, marginRight: 10 }}
                        component="img"
                        image={`http://openweathermap.org/img/w/${city?.weather[0].icon}.png`}
                        alt="weather"
                    />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ThermostatOutlinedIcon />
                        <h1>{convertKelvinToCelsius(city?.main.temp)}°C</h1>
                    </div>
                </Typography>
                <Typography sx={{ fontSize: 14 }} variant="body2" component='div'>
                    <p style={{ display: 'flex', alignItems: 'center' }}>Feels like {convertKelvinToCelsius(city?.main.feels_like)}°C. {city?.weather[0].main}</p>
                    <p style={{ display: 'flex', alignItems: 'center' }}>Temperature is from {convertKelvinToCelsius(city?.main.temp_min)}°C to {convertKelvinToCelsius(city?.main.temp_max)}°C</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                            <p>Pressure: {city?.main.pressure}</p>
                            <p>Humidity: {city?.main.humidity}</p>
                            <p>Wind speed is: {city?.wind.speed} m/s</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end', justifyContent: 'end' }}>
                            <p>The sunrise is at {convertMsToHoursAndMins(city?.sys.sunrise)}</p>
                            <p>The sunset is at {convertMsToHoursAndMins(city?.sys.sunset)}</p>
                        </div>
                    </div>
                </Typography>
            </CardContent>
        </React.Fragment>
    );
}

export const CityInfo: FC = () => {

    const { cityId } = useParams<string>();

    const city = useSelector(getCityById(Number(cityId)))

    return (
        <Box style={{ width: '50%' }}>
            <Card variant="outlined">{card(city)}</Card>
        </Box>
        // <>
        //     <div>
        //         <p>{getCurrentDateAndTime()}</p>
        //         <h2>{city?.name}, {city?.sys.country}</h2>
        //         <div style={{ display: 'flex' }}>
        //             <CardMedia
        //                 style={{ width: 50, height: 90, marginRight: 10 }}
        //                 component="img"
        //                 image={`http://openweathermap.org/img/w/${city?.weather[0].icon}.png`}
        //                 alt="weather"
        //             />
        //             <div style={{ display: 'flex', alignItems: 'center' }}>
        //                 <ThermostatOutlinedIcon />
        //                 <h1>{convertKelvinToCelsius(city?.main.temp || 0)}</h1>
        //             </div>
        //         </div>

        // <p>Feels like {city?.main.feels_like}. {city?.weather[0].main}</p>
        // <p>Temperature is from {city?.main.temp_min} to {city?.main.temp_max}</p>
        // <p>Pressure: {city?.main.pressure}</p>
        // <p>Humidity: {city?.main.humidity}</p>
        // <p>Wind speed is: {city?.wind.speed} m/s</p>
        // <p>The sunrise is at {city?.sys.sunrise}</p>
        // <p>The sunset is at {city?.sys.sunset}</p>
        //     </div>
        // </>
    )
}