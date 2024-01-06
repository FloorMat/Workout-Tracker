import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { exercises } from "./utils";


export default function WorkoutDay({submit, type}){
    const [formData, setFormData] = useState({reps1: "", weight1: "",
    reps2: "", weight2: "",
    reps3: "", weight3: "",
    reps4: "", weight4: "",
    reps5: "", weight5: "",
    reps6: "", weight6: "",
    reps7: "", weight7: "",
    reps8: "", weight8: "",
    reps9: "", weight9: "",
    reps10: "", weight10: "",
    reps11: "", weight11: "",
    reps12: "", weight12: "",
    reps13: "", weight13: "",
    reps14: "", weight14: "",
    reps15: "", weight15: "",
    name1: "", name2: "", name3: "",
    name4: "", name5: ""})

    const navigate = useNavigate()

    const everythingArray = [{Title: ["Squat","Back"],Name: {Name: "name1",Value: formData.name1},Exercise: [exercises.squatExercises,exercises.backExercises],Sets: [{SetReps: {Name: "reps1",Value: formData.reps1},SetWeight: {Name: "weight1",Value: formData.weight1}}, {SetReps: {Name: "reps2",Value: formData.reps2}, SetWeight: {Name: "weight2",Value: formData.weight2}},{SetReps: {Name: "reps3",Value: formData.reps3},SetWeight: {Name: "weight3",Value: formData.weight3}}]},
    {Title: ["Lunge","Tricep"],Name: {Name: "name2",Value: formData.name2},Exercise: [exercises.lungeExercises,exercises.tricepExercises],Sets: [{SetReps: {Name: "reps4",Value: formData.reps4},SetWeight: {Name: "weight4",Value: formData.weight4}}, {SetReps: {Name: "reps5",Value: formData.reps5}, SetWeight: {Name: "weight5",Value: formData.weight5}},{SetReps: {Name: "reps6",Value: formData.reps6},SetWeight: {Name: "weight6",Value: formData.weight6}}]},
    {Title: ["Calf Raise","Bicep"],Name: {Name: "name3",Value: formData.name3},Exercise: [exercises.calfRaiseExercises,exercises.bicepExercises],Sets: [{SetReps: {Name: "reps7",Value: formData.reps7},SetWeight: {Name: "weight7",Value: formData.weight7}}, {SetReps: {Name: "reps8",Value: formData.reps8}, SetWeight: {Name: "weight8",Value: formData.weight8}},{SetReps: {Name: "reps9",Value: formData.reps9},SetWeight: {Name: "weight9",Value: formData.weight9}}]},
    {Title: ["Hip Thrust","Chest"],Name: {Name: "name4",Value: formData.name4},Exercise: [exercises.hipThrustExercises,exercises.chestExercises],Sets: [{SetReps: {Name: "reps10",Value: formData.reps10},SetWeight: {Name: "weight10",Value: formData.weight10}}, {SetReps: {Name: "reps11",Value: formData.reps11}, SetWeight: {Name: "weight11",Value: formData.weight11}},{SetReps: {Name: "reps12",Value: formData.reps12},SetWeight: {Name: "weight12",Value: formData.weight12}}]},
    {Title: ["Ab","Shoulder"],Name: {Name: "name5",Value: formData.name5},Exercise: [exercises.abExercises,exercises.shoulderExercises],Sets: [{SetReps: {Name: "reps13",Value: formData.reps13},SetWeight: {Name: "weight13",Value: formData.weight13}}, {SetReps: {Name: "reps14",Value: formData.reps14}, SetWeight: {Name: "weight14",Value: formData.weight14}},{SetReps: {Name: "reps15",Value: formData.reps15},SetWeight: {Name: "weight15",Value: formData.weight15}}]}]
    

    function handleChange(e){
        const {name, value} = e.target
    
        setFormData(prevForm => {
          return {
            ...prevForm,
            [name] : value
          }
        })
      }
    
    function handleSubmit(e){
    e.preventDefault()
    submit(formData)
    navigate("/")
    }

    const inputForms = everythingArray.map((list) => {
        return (
        <div className="exercise-block">
            <h1>{type === "leg" ? list.Title[0] : list.Title[1]} Exercise</h1>
            <select id={list.Name.Name} value={list.Name.Value} name={list.Name.Name} onChange={handleChange} className="selector" required>
                 <option value="">--Choose--</option>
                 {type === "leg" ? list.Exercise[0].map(exercise => <option value={exercise}>{exercise}</option>) : 
                 list.Exercise[1].map(exercise => <option value={exercise}>{exercise}</option>)}
             </select>
             {list.Sets.map((set,index) => {
                return (
                    <>
                        <h2>Set {index + 1}:</h2>
                        <label htmlFor={set.SetReps.Name}>Reps:</label>
                        <input name={set.SetReps.Name} id={set.SetReps.Name} value={set.SetReps.Value} onChange={handleChange} required></input>
                        <label htmlFor={set.SetWeight.Name}>Weight:</label>
                        <input name={set.SetWeight.Name} id={set.SetWeight.Name} value={set.SetWeight.Value} onChange={handleChange} required></input>
                    </>
                )
             })}
        </div>)
    })

    return (
    <form className="workout-form" onSubmit={handleSubmit}>
        {inputForms}
        <button className="submit-btn">Submit</button>
    </form>
    )
}