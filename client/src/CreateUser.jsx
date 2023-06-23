import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function CreateUser() {
    const [values,setValues] = useState({
        name:'',
        email:'',
        age:''
    })
    
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/createuser',values)
        .then(response =>{
            console.log(response)
            navigate('/')
        }
        )
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <form onSubmit={handleSubmit}>
                <h2>Create User</h2>
                <div className='mb-2'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' placeholder='Enter your Name' 
                    onChange={e=>setValues({...values,name:e.target.value})} className='form-control'></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter your Email' 
                    onChange={(e)=>setValues({...values,email:e.target.value})} className='form-control'></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor='age'>Age</label>
                    <input type='text' placeholder='Enter your Age'
                    onChange={(e)=>setValues({...values,age:e.target.value})} className='form-control'></input>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser