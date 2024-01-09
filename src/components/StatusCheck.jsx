import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { statusChecking } from '../services/EmployeeService'


const StatusCheck = () => {

    const navigator = useNavigate();

    const [regId,setRegId] = useState('')
    const [stat,setStat] = useState('')

    function handleRegId(e){
        setRegId(e.target.value);
    }
function checking(e){
    e.preventDefault();
    console.log(regId)
        statusChecking(regId).then((response)=> {
            navigator('/Status',{state:{id:response.data.id,
                name:response.data.status}})
        })

}

    return(
        <div>
            <form> 
            <div className='form-group mb-2'>
                            <label className='form-label'>Enter Registration id here</label>
                            <input
                            type='number'
                            placeholder='Enter Registration id'
                            name='regId'
                            value={regId}
                            onChange={handleRegId}
                            >
                            </input>
                            <br></br>
                            <button className='btn-btn-success' onClick={checking}>submit</button>
                        </div>
            </form>
        </div>
    )


}
export default StatusCheck