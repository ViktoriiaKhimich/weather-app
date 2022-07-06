import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';

import { CityCard } from '../CityCard/CityCard';
import { RootState } from '../../store/store';
// import { Notification } from '../Notification/Notification';

export const CitiesList: FC = () => {

    const cities = useSelector((state: RootState) => state.weather.cities)
    const error = useSelector((state: RootState) => state.weather.error)

    console.log(error);

    return (
        <div style={{ margin: 30 }}>
            {/* {error && <Notification severity='error' message={error.response.data.message} />} */}
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {cities.length && cities.map((city) => <Grid item xs={3} key={city.id}><CityCard city={city} /></Grid>)}
            </Grid>
        </div>
    )
}