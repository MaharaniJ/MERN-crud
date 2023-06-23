import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Users() {
    const [users,setUsers] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        axios.get('http://localhost:5000')
        .then((response) => setUsers(response.data))
        .catch((error) =>console.error(error))
    },[])

    const handleDelete = (id)=>{
        // axios.delete('http://localhost:5000/deleteuser/'+id)
        // .then((res)=>{
        //     console.log(res)
        //     window.location.reload()
        // })
        // .catch((err)=>console.error(err))
        const confirm = window.confirm('Are you sure you want to delete')
         if (confirm){
            axios.delete('http://localhost:5000/deleteuser/'+id)
            .then((res)=>{
                console.log(res)
                window.location.reload()
            })
            .catch((err)=>console.error(err))
        }
       
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <Link to='/create' className='btn btn-success'>Create</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link to={`/update/${user._id}`} className='btn btn-primary'>Edit</Link>
                                    <button type='button' className='btn btn-danger' 
                                    onClick={(e)=>handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                            

                        })
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Users