export const convertKelvinToCelsius = (kelvins: number | undefined) => {
    if (typeof (kelvins) === 'number') {
        const degrees = kelvins && kelvins - 275.15
        return Math.round(degrees)
    }
}