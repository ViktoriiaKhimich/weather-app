import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CityInfo } from '../../components/CityInfo/CityInfo';
import { getCityById } from '../../store/selectors';

export const CityPage: FC = () => {
    return (
        <CityInfo />
    )
}