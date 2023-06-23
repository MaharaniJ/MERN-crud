import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateUser() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [values,setValues] = useState({
        name:'',
        email:"",
        age:""
      })
    
      useEffect(()=>{
        axios.get('http://localhost:5000/getuser/'+id)
        .then(res=>setValues(res.data))
        .catch(err=>console.error(err))
      },[])
    
      const handleUpdate = (e)=>{
        e.preventDefault()
        axios.put('http://localhost:5000/updateuser/'+id,values)
        .then(res=>{
         console.log(res)
         navigate('/')
        })
        .catch(err=>console.log(err))
      }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-primary'>
    <div className='w-50 border bg-light shadow px-5 pt-3 pb-5 rounded'>
        <form onSubmit={handleUpdate}>
            <h2>Update User</h2>
            <div className='mb-2'>
                <label htmlFor='name'>Name</label>
                <input type='text' placeholder='Enter your Name'
                value={values.name} onChange={e=>setValues({...values,name:e.target.value})} className='form-control'></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter your Email'
                value={values.email} onChange={e=>setValues({...values,email:e.target.value})}  className='form-control'></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='age'>Age</label>
                <input type='text' placeholder='Enter your Age'
                 value={values.age} onChange={e=>setValues({...values,age:e.target.value})}  className='form-control'></input>
            </div>
            <button className='btn btn-success'>Update</button>
        </form>
    </div>
</div>
  )
}

export default UpdateUser