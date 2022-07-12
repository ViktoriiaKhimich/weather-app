export interface ICity {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  base: string;
  visibility: number;
  dt: number;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IError {
  cod: string;
  message: string;
}

export interface IDaily {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  clouds: number;
  pop: number;
  uvi: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
}

export interface IDailyWeather {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  daily: IDaily[];
}
