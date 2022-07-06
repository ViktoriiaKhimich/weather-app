import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import { Input, StyledInputBase } from './styles';
import { fetchWeatherByCity } from '../../store/weatherSlice';
import { SEARCH_INPUT_PLACEHOLDER, SEARCH_INPUT_TEXT } from '../../constants';

export const SearchAppBar: FC = () => {
    const [searchedCity, setSearchedCity] = useState<string>('')

    const dispatch = useDispatch<AppDispatch>()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        dispatch(fetchWeatherByCity(searchedCity))
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
