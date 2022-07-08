import React, { FC } from 'react';
import { v4 } from 'uuid';

interface IProps {
    hourlyTemp: any;
}

export const WeatherLineChart: FC<IProps> = ({ hourlyTemp }) => {

    const getTime = (dt: number) => {
        const date = new Date(dt * 1000);
        const hours = date.getHours();
        return hours
    }

    const getCurrentTime = () => {
        const date = new Date()
        const hours = date.getHours()
        return hours
    }

    const transformArray = (array: any) => {
        const start = array?.findIndex((item: any) => item.x === getCurrentTime())
        console.log(start);
        const end = start + 25
        return array?.slice(start, end)
    }

    const temps = hourlyTemp?.map((item: any) => {
        const data = {
            x: getTime(item.dt),
            y: Math.round(item.temp),
        }
        console.log('data', data);

        return data
    })

    return (
        <div style={{ display: 'flex' }}>
            {transformArray(temps)?.map((item: any) => {
                return (
                    <div
                        key={v4()}
                        style={{ marginRight: 10, width: 100, height: 50, backgroundColor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                        {item.y}°C
                    </div>
                )
            })}
        </div>
    )
}




