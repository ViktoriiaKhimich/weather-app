import { ICity, IDailyWeather } from './interfaces';
import { IWeatherState } from './store/weather/weatherSlice';
import { INotif } from './store/notificationSlice';

interface IAppState {
  weather: IWeatherState;
  notif: INotif;
}

export const citiesMock: ICity[] = [
  {
    coord: {
      lon: -0.1257,
      lat: 51.5085,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
    base: 'stations',
    main: {
      temp: 19.22,
      feels_like: 19.05,
      temp_min: 18.25,
      temp_max: 20.56,
      pressure: 1031,
      humidity: 71,
    },
    visibility: 10000,
    wind: {
      speed: 3.6,
      deg: 330,
      gust: 9.24,
    },
    clouds: {
      all: 75,
    },
    dt: 1657353902,
    sys: {
      type: 2,
      id: 2019646,
      country: 'GB',
      sunrise: 1657338843,
      sunset: 1657397816,
    },
    timezone: 3600,
    id: 2643743,
    name: 'London',
    cod: 200,
  },
];

export const dailyWeatherMocks: IDailyWeather = {
  lat: 49.2497,
  lon: -123.1193,
  timezone: 'America/Vancouver',
  timezone_offset: -25200,
  daily: [
    {
      dt: 1657569600,
      sunrise: 1657541956,
      sunset: 1657599379,
      moonrise: 1657594620,
      moonset: 1657532400,
      moon_phase: 0.42,
      temp: {
        day: 21.29,
        min: 15.09,
        max: 23.17,
        night: 17.8,
        eve: 21.69,
        morn: 17.71,
      },
      pressure: 1020,
      humidity: 61,
      dew_point: 12.84,
      wind_speed: 3.15,
      wind_deg: 256,
      wind_gust: 2.78,
      feels_like: {
        day: 21.07,
        night: 17.59,
        eve: 21.43,
        morn: 17.47,
      },
      clouds: 0,
      pop: 0,
      uvi: 8,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
    },
  ],
};

export const mockAppState: IAppState = {
  weather: {
    cities: citiesMock,
    loading: false,
    error: null,
    dailyWeather: dailyWeatherMocks,
  },
  notif: {
    severity: '',
    message: '',
    isOpen: false,
  },
};

export const appState: IAppState = {
  weather: {
    cities: citiesMock,
    loading: true,
    error: null,
    dailyWeather: dailyWeatherMocks,
  },
  notif: {
    severity: 'error',
    message: 'City not found!',
    isOpen: true,
  },
};
