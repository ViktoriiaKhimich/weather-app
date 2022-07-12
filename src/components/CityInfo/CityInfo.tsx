import React, { FC } from 'react';
import { Box } from '@mui/material';

import { CityInfoCard } from './components/CityInfoCard';
import { ICity } from '../../interfaces';

interface IProps {
  city: ICity;
}

export const CityInfo: FC<IProps> = ({ city }) => {
  return (
    <Box style={{ width: '50%' }}>
      <CityInfoCard city={city} />
    </Box>
  );
};
