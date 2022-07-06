import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import { CityCard } from '../CityCard/CityCard';
import { RootState } from '../../store/store';

export const CitiesList: FC = () => {

    const cities = useSelector((state: RootState) => state.weather.cities)

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: 50 }}>
            {cities.length && cities.map((city) => <Grid item xs={3} key={city.id}><Link to={`/cities/${city.id}`}><CityCard city={city} /></Link></Grid>)}
        </Grid>
    )
}