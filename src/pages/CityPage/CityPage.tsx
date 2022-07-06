import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getCityById } from '../../store/selectors';

export const CityPage: FC = () => {
    const { cityId } = useParams<string>();

    const city = useSelector(getCityById(Number(cityId)))

    return (
        <></>
    )
}