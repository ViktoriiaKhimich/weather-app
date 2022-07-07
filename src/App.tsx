import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { HomePage } from './pages/HomePage/HomePage';
import { CityPage } from './pages/CityPage/CityPage';
import { fetchWeatherByCity } from './store/weatherSlice';
import { AppDispatch, RootState } from './store/store';
import { Notification } from './components/Notification/Notification';

import './App.css';
import { notifSlice } from './store/notificationSlice';

function App() {
  const loading = useSelector((state: RootState) => state.weather.loading)
  const notif = useSelector((state: RootState) => state.notif)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const cityName: string[] = JSON.parse(localStorage.getItem('cities') || '[]')
    cityName.forEach((city: string) => dispatch(fetchWeatherByCity(city)))
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cities/:cityId' element={<CityPage />} />
      </Routes>
      {notif.isOpen && (<Notification severity={notif.severity} message={notif.message} />)}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default App;
