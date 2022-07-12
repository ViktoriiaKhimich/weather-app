import React, { FC } from 'react';

import { SearchAppBar } from '../../components/SearchAppBar/SearchAppBar';
import { CitiesList } from '../../components/CitiesList/CitiesList';

export const HomePage: FC = () => {
  return (
    <div>
      <SearchAppBar />
      <CitiesList />
    </div>
  );
};
