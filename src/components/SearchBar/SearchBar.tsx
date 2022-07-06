import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { Search, SearchIconWrapper, StyledInputBase } from './styles'
import { fetchWeatherByCity } from '../../store/weatherSlice';

export const SearchAppBar: FC = () => {
    const [searchedCity, setSearchedCity] = useState<string>('')

    const dispatch = useDispatch<AppDispatch>()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(fetchWeatherByCity(searchedCity))
        setSearchedCity('')
    }

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                    >
                        Search weather in your city
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                name='cityName'
                                value={'' || searchedCity}
                                onChange={(event) => setSearchedCity(event.target.value)}
                                placeholder="City…"
                                inputProps={{ 'aria-label': 'city' }}
                            />
                        </Search>
                    </form>
                </Toolbar>
            </AppBar>
        </Box >
    );
}
