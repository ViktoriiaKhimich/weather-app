import { monthNames } from "../../constants"

const getCurrentDate = (): string => {
    const date = new Date()
    return `${monthNames[date.getMonth()]} ${date.getDate()}`
}

const getCurrentTime = () => {
    const time = new Date();
    return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
}

export const getCurrentDateAndTime = () => {
    return `${getCurrentDate()}, ${getCurrentTime()}`
}