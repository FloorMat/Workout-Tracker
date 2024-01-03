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
                <h2>{workout.Exercise1.Name}</h2>
                <ul>
                    <li>Set 1: {workout.Exercise1.Set1.Reps} Reps, {workout.Exercise1.Set1.Weight} {checkBody(workout.Exercise1.Set1.Weight)}</li>
                    <li>Set 2: {workout.Exercise1.Set2.Reps} Reps, {workout.Exercise1.Set2.Weight} {checkBody(workout.Exercise1.Set2.Weight)}</li>
                    <li>Set 3: {workout.Exercise1.Set3.Reps} Reps, {workout.Exercise1.Set3.Weight} {checkBody(workout.Exercise1.Set3.Weight)}</li>
                </ul>
                <h2>{workout.Exercise2.Name}</h2>
                <ul>
                    <li>Set 1: {workout.Exercise2.Set1.Reps} Reps, {workout.Exercise2.Set1.Weight} {checkBody(workout.Exercise1.Set1.Weight)}</li>
                    <li>Set 2: {workout.Exercise2.Set2.Reps} Reps, {workout.Exercise2.Set2.Weight} {checkBody(workout.Exercise1.Set2.Weight)}</li>
                    <li>Set 3: {workout.Exercise2.Set3.Reps} Reps, {workout.Exercise2.Set3.Weight} {checkBody(workout.Exercise1.Set2.Weight)}</li>
                </ul>
                <h2>{workout.Exercise3.Name}</h2>
                <ul>
                    <li>Set 1: {workout.Exercise3.Set1.Reps} Reps, {workout.Exercise3.Set1.Weight} {checkBody(workout.Exercise1.Set1.Weight)}</li>
                    <li>Set 2: {workout.Exercise3.Set2.Reps} Reps, {workout.Exercise3.Set2.Weight} {checkBody(workout.Exercise1.Set2.Weight)}</li>
                    <li>Set 3: {workout.Exercise3.Set3.Reps} Reps, {workout.Exercise3.Set3.Weight} {checkBody(workout.Exercise1.Set2.Weight)}</li>
                </ul>
                <h2>{workout.Exercise4.Name}</h2>
                <ul>
                    <li>Set 1: {workout.Exercise4.Set1.Reps} Reps, {workout.Exercise4.Set1.Weight} {checkBody(workout.Exercise1.Set1.Weight)}</li>
                    <li>Set 2: {workout.Exercise4.Set2.Reps} Reps, {workout.Exercise4.Set2.Weight} {checkBody(workout.Exercise1.Set2.Weight)}</li>
                    <li>Set 3: {workout.Exercise4.Set3.Reps} Reps, {workout.Exercise4.Set3.Weight} {checkBody(workout.Exercise1.Set2.Weight)}</li>
                </ul>
                <h2>{workout.Exercise5.Name}</h2>
                <ul>
                    <li>Set 1: {workout.Exercise5.Set1.Reps} Reps, {workout.Exercise5.Set1.Weight} {checkBody(workout.Exercise1.Set1.Weight)}</li>
                    <li>Set 2: {workout.Exercise5.Set2.Reps} Reps, {workout.Exercise5.Set2.Weight} {checkBody(workout.Exercise1.Set2.Weight)}</li>
                    <li>Set 3: {workout.Exercise5.Set3.Reps} Reps, {workout.Exercise5.Set3.Weight} {checkBody(workout.Exercise1.Set2.Weight)}</li>
                </ul>
            </div>
        )
    })

    return (
        <div className="workout-grid">
            {workoutEls}
        </div>
    )
}