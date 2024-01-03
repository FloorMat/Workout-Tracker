import React, {useState} from "react";


export default function RestDay({submit}){
    const [formData, setFormData] = useState({rest:"Rest Day"})

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
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Its a Rest day nothing to input here</h1>
            <button>Submit</button>
        </form>
    )}