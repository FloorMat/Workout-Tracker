import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


export default function RestDay({submit}){
    const [formData, setFormData] = useState({rest:"Rest Day"})

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
        <form onSubmit={handleSubmit}>
            <h1 className="rest">Its a Rest day nothing to input here</h1>
            <button className="submit-btn down">Submit</button>
        </form>
    )}