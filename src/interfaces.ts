export interface ICity {
    coord: {
        lon: number;
        lat: number
    },
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
    },
    clouds: {
        all: number
    },
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    }
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