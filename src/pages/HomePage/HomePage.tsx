import React, { FC } from 'react';

import { SearchAppBar } from '../../components/SearchBar/SearchBar';
import { CitiesList } from '../../components/CitiesList/CitiesList';

export const HomePage: FC = () => {

    return (
        <div>
            <SearchAppBar />
            <CitiesList />
        </div>
    )
}