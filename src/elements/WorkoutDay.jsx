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


    return (
    <form className="workout-form" onSubmit={handleSubmit}>
        <div className="exercise-block">
            <h1>{type === "leg" ? "Squat" : "Back"} Exercise</h1>
            <select id="name1" value={formData.name1} name="name1" onChange={handleChange} className="selector" required>
                <option value="">--Choose--</option>
                {type === "leg" ? exercises.squatExercises.map(exercise => <option value={exercise}>{exercise}</option>) : 
                exercises.backExercises.map(exercise => <option value={exercise}>{exercise}</option>)}
            </select>
            <h2>Set 1:</h2>
            <label htmlFor="reps1">Reps:</label>
            <input name="reps1" id="reps1" value={formData.reps1} onChange={handleChange} required></input>
            <label htmlFor="weight1">Weight:</label>
            <input name="weight1" id="weight1" value={formData.weight1} onChange={handleChange} required></input>
            <h2>Set 2:</h2>
            <label htmlFor="reps2">Reps:</label>
            <input name="reps2" id="reps2" value={formData.reps2} onChange={handleChange} required></input>
            <label htmlFor="weight2">Weight:</label>
            <input name="weight2" id="weight2" value={formData.weight2} onChange={handleChange} required></input>
            <h2>Set 3:</h2>
            <label htmlFor="reps3">Reps:</label>
            <input name="reps3" id="reps3" value={formData.reps3} onChange={handleChange} required></input>
            <label htmlFor="weight3">Weight:</label>
            <input name="weight3" id="weight3" value={formData.weight3} onChange={handleChange} required></input>
        </div>
        <div className="exercise-block">
            <h1>{type === "leg" ? "Lunge" : "Tricep"} Exercise</h1>
            <select id="name2" value={formData.name2} name="name2" onChange={handleChange} className="selector" required>
                <option value="">--Choose--</option>
                {type === "leg" ? exercises.lungeExercises.map(exercise => <option value={exercise}>{exercise}</option>) : 
                exercises.tricepExercises.map(exercise => <option value={exercise}>{exercise}</option>)}
            </select>
            <h2>Set 1:</h2>
            <label htmlFor="reps4">Reps:</label>
            <input name="reps4" id="reps4" value={formData.reps4} onChange={handleChange} required></input>
            <label htmlFor="weight4">Weight:</label>
            <input name="weight4" id="weight4" value={formData.weight4} onChange={handleChange} required></input>
            <h2>Set 2:</h2>
            <label htmlFor="reps5">Reps:</label>
            <input name="reps5" id="reps5" value={formData.reps5} onChange={handleChange} required></input>
            <label htmlFor="weight5">Weight:</label>
            <input name="weight5" id="weight5" value={formData.weight5} onChange={handleChange} required></input>
            <h2>Set 3:</h2>
            <label htmlFor="reps6">Reps:</label>
            <input name="reps6" id="reps6" value={formData.reps6} onChange={handleChange} required></input>
            <label htmlFor="weight6">Weight:</label>
            <input name="weight6" id="weight6" value={formData.weight6} onChange={handleChange} required></input>
        </div>
        <div className="exercise-block">
            <h1>{type === "leg" ? "Calf Raise" : "Bicep"} Exercise</h1>
            <select id="name3" value={formData.name3} name="name3" onChange={handleChange} className="selector" required>
                <option value="">--Choose--</option>
                {type === "leg" ? exercises.calfRaiseExercises.map(exercise => <option value={exercise}>{exercise}</option>) : 
                exercises.bicepExercises.map(exercise => <option value={exercise}>{exercise}</option>)}
            </select>
            <h2>Set 1:</h2>
            <label htmlFor="reps7">Reps:</label>
            <input name="reps7" id="reps7" value={formData.reps7} onChange={handleChange} required></input>
            <label htmlFor="weight7">Weight:</label>
            <input name="weight7" id="weight7" value={formData.weight7} onChange={handleChange} required></input>
            <h2>Set 2:</h2>
            <label htmlFor="reps8">Reps:</label>
            <input name="reps8" id="reps8" value={formData.reps8} onChange={handleChange} required></input>
            <label htmlFor="weight8">Weight:</label>
            <input name="weight8" id="weight8" value={formData.weight8} onChange={handleChange} required></input>
            <h2>Set 3:</h2>
            <label htmlFor="reps9">Reps:</label>
            <input name="reps9" id="reps9" value={formData.reps9} onChange={handleChange} required></input>
            <label htmlFor="weight9">Weight:</label>
            <input name="weight9" id="weight9" value={formData.weight9} onChange={handleChange} required></input>
        </div>
        <div className="exercise-block">
            <h1>{type === "leg" ? "Hip Thrust" : "Chest"} Exercise</h1>
            <select id="name4" value={formData.name4} name="name4" onChange={handleChange} className="selector" required>
                <option value="">--Choose--</option>
                {type === "leg" ? exercises.hipThrustExercises.map(exercise => <option value={exercise}>{exercise}</option>) : 
                exercises.chestExercises.map(exercise => <option value={exercise}>{exercise}</option>)}
            </select>
            <h2>Set 1:</h2>
            <label htmlFor="reps10">Reps:</label>
            <input name="reps10" id="reps10" value={formData.reps10} onChange={handleChange} required></input>
            <label htmlFor="weight10">Weight:</label>
            <input name="weight10" id="weight10" value={formData.weight10} onChange={handleChange} required></input>
            <h2>Set 2:</h2>
            <label htmlFor="reps11">Reps:</label>
            <input name="reps11" id="reps11" value={formData.reps11} onChange={handleChange} required></input>
            <label htmlFor="weight11">Weight:</label>
            <input name="weight11" id="weight11" value={formData.weight11} onChange={handleChange} required></input>
            <h2>Set 3:</h2>
            <label htmlFor="reps12">Reps:</label>
            <input name="reps12" id="reps12" value={formData.reps12} onChange={handleChange} required></input>
            <label htmlFor="weight12">Weight:</label>
            <input name="weight12" id="weight12" value={formData.weight12} onChange={handleChange} required></input>
        </div>
        <div className="exercise-block">
            <h1>{type === "leg" ? "Ab" : "Shoulder"} Exercise</h1>
            <select id="name5" value={formData.name5} name="name5" onChange={handleChange} className="selector" required>
                <option value="">--Choose--</option>
                {type === "leg" ? exercises.abExercises.map(exercise => <option value={exercise}>{exercise}</option>) : 
                exercises.shoulderExercises.map(exercise => <option value={exercise}>{exercise}</option>)}
            </select>
            <h2>Set 1:</h2>
            <label htmlFor="reps13">Reps:</label>
            <input name="reps13" id="reps13" value={formData.reps13} onChange={handleChange} required></input>
            <label htmlFor="weight13">Weight:</label>
            <input name="weight13" id="weight13" value={formData.weight13} onChange={handleChange} required></input>
            <h2>Set 2:</h2>
            <label htmlFor="reps14">Reps:</label>
            <input name="reps14" id="reps14" value={formData.reps14} onChange={handleChange} required></input>
            <label htmlFor="weight14">Weight:</label>
            <input name="weight14" id="weight14" value={formData.weight14} onChange={handleChange} required></input>
            <h2>Set 3:</h2>
            <label htmlFor="reps15">Reps:</label>
            <input name="reps15" id="reps15" value={formData.reps15} onChange={handleChange} required></input>
            <label htmlFor="weight15">Weight:</label>
            <input name="weight15" id="weight15" value={formData.weight15} onChange={handleChange} required></input>
        </div>
        <button className="submit-btn">Submit</button>
    </form>
    )
}