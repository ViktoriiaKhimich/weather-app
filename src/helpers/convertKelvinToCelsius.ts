export const convertKelvinToCelsius = (kelvins: number): number => {
    const degrees = kelvins - 275.15
    return Math.round(degrees)
}