const getCurrentDate = (): string => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
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

export const convertMsToHoursAndMins = (ms: number | undefined) => {
    if (typeof (ms) === 'number') {
        const time = new Date(ms);
        return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    }
}