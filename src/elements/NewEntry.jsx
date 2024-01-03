import React from "react";
import LegDay from "./LegDay";
import ArmDay from "./ArmDay1"
import RestDay from "./RestDay"
import { addDoc, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore"
import { workoutCollection, db } from "../firebase.js"
import { formattedDate } from "./utils.jsx";


export default function NewEntry(){

    // WORK ON PROPER DATA INPUT FOR EACH DAY(probably gonna have to be in each file)
    // Create data for exercise names
    // maybe try to figure out using react router forms instead
    // style

    async function createNewWorkOutLegs(formData) {
        const newWorkOut = {
            createdAt: Date.now(),
            Exercise1: {Name:"Squats", Set1: {Reps:formData.reps1, Weight: formData.weight1}, Set2: {Reps:formData.reps2, Weight: formData.weight2}, Set3: {Reps:formData.reps3, Weight: formData.weight3}},
            Exercise2: {Name:"Lunges", Set1: {Reps:formData.reps4, Weight: formData.weight4}, Set2: {Reps:formData.reps5, Weight: formData.weight5}, Set3: {Reps:formData.reps6, Weight: formData.weight6}},
            Exercise3: {Name:"Calf Raises", Set1: {Reps:formData.reps7, Weight: formData.weight7}, Set2: {Reps:formData.reps8, Weight: formData.weight8}, Set3: {Reps:formData.reps9, Weight: formData.weight9}},
            Exercise4: {Name:"Hip Thrusts", Set1: {Reps:formData.reps10, Weight: formData.weight10}, Set2: {Reps:formData.reps11, Weight: formData.weight11}, Set3: {Reps:formData.reps12, Weight: formData.weight12}},
            Exercise5: {Name:"Abs", Set1: {Reps:formData.reps13, Weight: formData.weight13}, Set2: {Reps:formData.reps14, Weight: formData.weight14}, Set3: {Reps:formData.reps15, Weight: formData.weight15}},
            Date: formattedDate
        }
        await addDoc(workoutCollection, newWorkOut)
    }

    async function createNewWorkOutArms(formData) {
        const newWorkOut = {
            createdAt: Date.now(),
            Exercise1: {Name:"Back", Set1: {Reps:formData.reps1, Weight: formData.weight1}, Set2: {Reps:formData.reps2, Weight: formData.weight2}, Set3: {Reps:formData.reps3, Weight: formData.weight3}},
            Exercise2: {Name:"Tricep", Set1: {Reps:formData.reps4, Weight: formData.weight4}, Set2: {Reps:formData.reps5, Weight: formData.weight5}, Set3: {Reps:formData.reps6, Weight: formData.weight6}},
            Exercise3: {Name:"Bicep", Set1: {Reps:formData.reps7, Weight: formData.weight7}, Set2: {Reps:formData.reps8, Weight: formData.weight8}, Set3: {Reps:formData.reps9, Weight: formData.weight9}},
            Exercise4: {Name:"Chest", Set1: {Reps:formData.reps10, Weight: formData.weight10}, Set2: {Reps:formData.reps11, Weight: formData.weight11}, Set3: {Reps:formData.reps12, Weight: formData.weight12}},
            Exercise5: {Name:"Shoulder", Set1: {Reps:formData.reps13, Weight: formData.weight13}, Set2: {Reps:formData.reps14, Weight: formData.weight14}, Set3: {Reps:formData.reps15, Weight: formData.weight15}},
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
        return <LegDay submit={createNewWorkOutLegs}/>
    } else if (date.getDay() === 2 || (date.getDay() === 5)){
        return <ArmDay submit={createNewWorkOutArms}/>
    } else {
        return <RestDay submit={createNewWorkOutRest}/>
    }
}