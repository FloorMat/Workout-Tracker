const date = new Date()
const year = date.getFullYear()
const month = date.getMonth()
const dayName = date.getDay()
const day = date.getDate()

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

export const formattedDate = `${weekDays[dayName]} ${months[month]} ${day}, ${year}`

export const exercises = {squatExercises: ["Body Weight Squats","Weighted Squats","Pistol Squats"],
lungeExercises: ["Regular Lunges","Weighted Lunges","Bulgarian Lunges"],
calfRaiseExercises: ["Body Weight Calf Raises", "Weighted Calf Raises", "Elevated Calf Raises"],
hipThrustExercises: ["Hip Thrusts on da chair"],
abExercises: ["Plank","Hollow Body Holds","Leg Raises","Hanging Leg Raises","L Sits","Hanging L Sits"],
backExercises: ["Pull-ups","Inverted Body Weight Rows","One Arm Dumbbell Pulls","Bent Over Dumbbell Rows"],
tricepExercises:["Parallel Dumbbell Bench Presses","Tricep Kickbacks","Skull Crushers","Decline Pushups","Dips"],
bicepExercises:["Curls","Hammer Curls","Chin-ups"],
chestExercises:["Wide Arm Pushups","Decline Pushups","Dips","Fly Presses","Dumbbell Bench Presses"],
shoulderExercises:["Pike Pushups","Lateral Raises","Overhead Raises","Front Raises"]}
