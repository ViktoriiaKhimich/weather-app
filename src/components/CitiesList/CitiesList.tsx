import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';

import { CityCard } from '../CityCard/CityCard';
import { sortCitiesInAlphabeticOrder } from '../../store/selectors';

export const CitiesList: FC = () => {

    const cities = useSelector(sortCitiesInAlphabeticOrder())

    return (
        <div style={{ margin: 30 }}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {cities.length && cities.map((city) => <Grid item xs={3} key={city.id}><CityCard city={city} /></Grid>)}
            </Grid>
        </div>
    )
}