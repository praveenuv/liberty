import React,{useEffect, useState} from 'react'
import { listEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
import { statusChecking } from '../services/EmployeeService'


const ListEmployeeComponents = () => {

    const [employee,setEmployee] = useState([])
    const [base64String,setBase64String] = useState([])
    const navigator = useNavigate();
    
    useEffect(() =>{
        listEmployee().then((Response)=> {
            setEmployee(Response.data);
        }).catch(error => {
            console.error(error);
        })

        
        
    }, [])

    function addNewEmployee(){
        navigator('/add-employee')

    }
    function statusCheck(){
        navigator('/StatusCheck')
    }

  return (
    <div className='container'>
        <h2 className='text-center'><img src="images/youth.jpg" width="60" height="50" align="center"/> Liberty Youth Members</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>New Registration</button>
        <button className='btn btn-success mb-2' onClick={statusCheck}>Check Status</button>
        <table className='table table-striped table-border'>
            <thead>
                <tr>
                    <th>Member id</th>
                    <th>Member First Name</th>
                    <th>Member Last Name</th>
                    <th>Member Email</th>
                    <th>image</th>
                    
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
                            
                        </tr>)
                }<br></br>
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponents