import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CityInfo } from '../../components/CityInfo/CityInfo';
import { DailyForecastList } from '../../components/DailyForecastList/DailyForecastList';
import { getCityById } from '../../store/weather/selectors';
import { AppDispatch, RootState } from '../../store/store';
import { fetchDailyWeatherByCity } from '../../store/weather/asyncThunk';

export const CityPage: FC = () => {
  const { cityId } = useParams<string>();
  const dispatch = useDispatch<AppDispatch>();

  const city = useSelector(getCityById(Number(cityId)));
  const dailyWeather = useSelector(
    (state: RootState) => state.weather.dailyWeather
  );

  useEffect(() => {
    if (city) {
      const lat = city.coord.lat;
      const lon = city.coord.lon;
      dispatch(fetchDailyWeatherByCity({ lat, lon }));
    }
  }, [city]);

  return (
    <>
      <div style={{ display: 'flex', margin: 20 }}>
        {city && <CityInfo city={city} />}
        {dailyWeather && <DailyForecastList weather={dailyWeather} />}
      </div>
    </>
  );
};
