import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'



const EmployeeComponent = () => {

    const [firstName,setFirstName] =  useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [image,setImage] = useState('')
    const [photo,setPhoto] = useState('')
    const [regId,setRegId] = useState('')
   
    const navigator = useNavigate();

    const formData = new FormData();

    const [errors,setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        image: ''
    })


    function handleFirstName(e){
        setFirstName(e.target.value);
    }

    function handleLastName(e){
        setLastName(e.target.value);
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }
    function handleImage(e){
       
        setImage(URL.createObjectURL(e.target.files[0]));
        setPhoto(e.target.files[0]);
        
        
    }
    formData.append('file',photo);
    formData.append('firstName',firstName);
    formData.append('lastName',lastName);
    formData.append('email',email);


 

    function validateForm(){
        
        let valid=true;
        const errorsCopy={... errors}
        if(firstName.trim()){
            errorsCopy.firstName='';
        }else{
            errorsCopy.firstName='first name is required';
            valid=false;
        }

        if(lastName.trim()){
            errorsCopy.lastName='';
        }else{
            errorsCopy.lastName='last name is requird';
            valid=false;
        }

        if(email.trim()){
            errorsCopy.email='';
        }else{
            errorsCopy.email='email name is requird';
            valid=false;
        }
        if(photo){
            errorsCopy.photo='';
        }else{
            errorsCopy.photo='please upload photo';
            valid=false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    function saveEmployee(e){

        e.preventDefault();
        
        if(validateForm()){
        
        const employee = {firstName,lastName,email}
        console.log(employee)
        createEmployee(formData).then((response) => {
            console.log(response.data);
            setRegId(response.data.id);
            console.log(regId)
            navigator('/Status',{state:{id:response.data.id,
            name:response.data.status}})
        })
      }
    }

  return (
    <div className='container'>
        <br></br>
       <div className='row' >
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Enter Member Details</h2>
                <div className='card-body'>
                    <form method="post" encType="multipart/form-data"> 
                    <nav className="navbar navbar-light bg-light px-3">
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name</label>
                            <input
                            type='text'
                            placeholder='Enter member first name'
                            name='firstName'
                            value={firstName}
                            className={`form-control ${errors.firstName ? 'is-invalid': ''}`}
                            onChange={handleFirstName}
                            >
                            </input>
                            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Designation</label>
                            <input
                            type='text'
                            placeholder='Enter member Designation'
                            name='LastName'
                            value={lastName}
                            className={`form-control ${errors.lastName ? 'is-invalid': ''}`}
                            onChange={handleLastName}
                            >
                            </input>
                            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>email</label>
                            <input
                            type='text'
                            placeholder='Enter member email name'
                            name='email'
                            value={email}
                            className={`form-control ${errors.email ? 'is-invalid': ''}`}
                            onChange={handleEmail}
                            >
                            </input>
                            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>upload image</label>
                            <input
                            type='file'
                            placeholder='upload member image '
                            name='image'
                            
                            className={`form-control ${errors.photo ? 'is-invalid': ''}`}
                            onChange={handleImage}
                            >
                            </input>
                            <img src={image} alt="Uploaded" width="90" height="100"/>
                            {errors.photo && <div className='invalid-feedback'>{errors.photo}</div>}
                        </div>
                        <button className='btn-btn-success' onClick={saveEmployee}>submit</button>
                        </nav>
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent