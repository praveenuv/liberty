import React,{useEffect, useState} from 'react'
import { listEmployee1 } from '../services/EmployeeService'
import { pending } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'


const PendingEmployeeComponents = () => {

    const [employee,setEmployee] = useState([])
    const [base64String,setBase64String] = useState([])
    const navigator = useNavigate();
    
    useEffect(() =>{
        listEmployee1().then((Response)=> {
            setEmployee(Response.data);
        }).catch(error => {
            console.error(error);
        })

        
        
    }, [])

    function saveEmployee(id,name){
        console.log(name);
        //e.preventDefault();
        console.log();
        pending(id,name).then((response) => {
            console.log(response.status);
            console.log(response.data);
            navigator('/employees')
        })
      
    }

  return (
    <div className='container'>
        <h2 className='text-center'>Liberty Youth Members</h2>
        <table className='table table-striped table-border'>
            <thead>
                <tr>
                    <th>Member id</th>
                    <th>Member First Name</th>
                    <th>Member Last Name</th>
                    <th>Member Email</th>
                    <th>Image</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td><img src={`data:image/jpeg;base64,${employee.image}`}  width="90" height="100"/></td>
                            <td>{employee.status}</td>
                            <td><button className='btn btn-primary mb-2' onClick={() => saveEmployee(employee.id,"accepted")}>Accept</button></td>
                            <td><button className='btn btn-primary mb-2' onClick={() => saveEmployee(employee.id,"rejected")}>reject</button></td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default PendingEmployeeComponents