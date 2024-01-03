import React, { useState } from "react";


export default function LegDay({submit}){
    const [formData, setFormData] = useState({reps1: "", weight1: ""})

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
    setFormData({reps1: "", weight1: ""})
    }


    return <form onSubmit={handleSubmit}>
        <input name="reps1" id="reps1" value={formData.reps1} onChange={handleChange}></input>
        <input name="weight1" id="weight1" value={formData.weight1} onChange={handleChange}></input>
        <button>Submit</button>
    </form>
}