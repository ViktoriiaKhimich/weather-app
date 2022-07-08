import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import { Input, StyledInputBase } from './styles';
import { fetchWeatherByCity } from '../../store/weatherSlice';
import { addNotication } from '../../store/notificationSlice';
import { SEARCH_INPUT_PLACEHOLDER, SEARCH_INPUT_TEXT } from '../../constants';
import { findCityByName } from '../../helpers/findCityByName';

export const SearchAppBar: FC = () => {
    const [searchedCity, setSearchedCity] = useState<string>('')
    const cities = useSelector((state: RootState) => state.weather.cities)

    const dispatch = useDispatch<AppDispatch>()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (!findCityByName(cities, searchedCity)) {
            dispatch(fetchWeatherByCity(searchedCity))
        } else {
            dispatch(addNotication({
                severity: 'error',
                isOpen: true,
                message: `City ${searchedCity} is already in your list!`
            }))
        }
        setSearchedCity('')
    }

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <form onSubmit={handleSubmit}>
                        <Input>
                            <StyledInputBase
                                name='cityName'
                                value={'' || searchedCity}
                                onChange={(event) => setSearchedCity(event.target.value)}
                                placeholder={SEARCH_INPUT_PLACEHOLDER}
                                inputProps={{ 'aria-label': 'city' }}
                            />
                        </Input>
                    </form>
                    <Typography
                        style={{ marginLeft: 15 }}
                        variant="h6"
                        noWrap
                        component="div"
                    >
                        {SEARCH_INPUT_TEXT}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box >
    );
}
