import React from "react";
import RestDay from "./RestDay"
import { addDoc, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore"
import { workoutCollection, db } from "../firebase.js"
import { formattedDate } from "./utils.jsx";
import WorkoutDay from "./WorkoutDay.jsx";


export default function NewEntry(){

    // Try to reduce all the repeat code
    // maybe try to figure out using react router forms instead

    async function createNewWorkOut(formData) {
        const newWorkOut = {
            createdAt: Date.now(),
            Exercises:[
                {Exercise1: {Name:formData.name1, Set1: {Reps:formData.reps1, Weight: formData.weight1}, Set2: {Reps:formData.reps2, Weight: formData.weight2}, Set3: {Reps:formData.reps3, Weight: formData.weight3}}},
                {Exercise2: {Name:formData.name2, Set1: {Reps:formData.reps4, Weight: formData.weight4}, Set2: {Reps:formData.reps5, Weight: formData.weight5}, Set3: {Reps:formData.reps6, Weight: formData.weight6}}},
                {Exercise3: {Name:formData.name3, Set1: {Reps:formData.reps7, Weight: formData.weight7}, Set2: {Reps:formData.reps8, Weight: formData.weight8}, Set3: {Reps:formData.reps9, Weight: formData.weight9}}},
                {Exercise4: {Name:formData.name4, Set1: {Reps:formData.reps10, Weight: formData.weight10}, Set2: {Reps:formData.reps11, Weight: formData.weight11}, Set3: {Reps:formData.reps12, Weight: formData.weight12}}},
                {Exercise5: {Name:formData.name5, Set1: {Reps:formData.reps13, Weight: formData.weight13}, Set2: {Reps:formData.reps14, Weight: formData.weight14}, Set3: {Reps:formData.reps15, Weight: formData.weight15}}}
            ],
            Date: formattedDate
        }
        await addDoc(workoutCollection, newWorkOut)
    }

    async function createNewWorkOutRest(formData){
        const newWorkOut = {
            createdAt: Date.now(),
            Date: formattedDate,
            Rest: formData.rest
        }
        await addDoc(workoutCollection, newWorkOut)
    }

    const date = new Date()


    if(date.getDay() === 1 || date.getDay() === 4){
        return <WorkoutDay type="leg" submit={createNewWorkOut}/>
    } else if (date.getDay() === 2 || (date.getDay() === 5)){
        return <WorkoutDay type="arm" submit={createNewWorkOut}/>
    } else {
        return <RestDay submit={createNewWorkOutRest}/>
    }
}