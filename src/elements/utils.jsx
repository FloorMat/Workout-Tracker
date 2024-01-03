const date = new Date()
const year = date.getFullYear()
const month = date.getMonth()
const dayName = date.getDay()
const day = date.getDate()

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

export const formattedDate = `${weekDays[dayName]} ${months[month]} ${day}, ${year}`