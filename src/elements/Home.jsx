import React, {useState, useEffect} from "react";
import { addDoc, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore"
import { workoutCollection, db } from "../firebase.js"


export default function Home(){
    const [workouts, setWorkouts] = useState([])

    workouts.sort((a,b) => a.createdAt - b.createdAt)

    useEffect(() => {
        const unsub = onSnapshot(workoutCollection, (snapshot)=>{
            const workoutsArr = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            setWorkouts(workoutsArr)
        })
        return unsub
    }, [])

    function checkBody(weight){
        if(weight.toLowerCase() === "body"){
            return "Weight"
        } else {
            return "Pounds"
        }
    }

    const workoutEls = workouts.map((workout) => {
        return workout.Rest ? (
        <div className="workout">
            <h2>{workout.Date}</h2>
            <h2>{workout.Rest}</h2> 
        </div> ) :
        ( 
        <div className="workout">
            <h2>{workout.Date}</h2>
            {console.log(workout.Exercises)}
            {workout.Exercises.map(object => {
                const exercise = object[Object.keys(object)[0]]
                return (
                    <>
                        <h2>{exercise.Name}</h2>
                        <ul>
                            <li>Set 1: {exercise.Set1.Reps} Reps, {exercise.Set1.Weight} {checkBody(exercise.Set1.Weight)}</li>
                            <li>Set 2: {exercise.Set2.Reps} Reps, {exercise.Set2.Weight} {checkBody(exercise.Set2.Weight)}</li>
                            <li>Set 3: {exercise.Set3.Reps} Reps, {exercise.Set3.Weight} {checkBody(exercise.Set3.Weight)}</li>
                        </ul>
                    </>
                )
            })}
        </div>)
        })
        
        return (
            <div className="workout-grid">
            {workoutEls}
        </div>
    )
}