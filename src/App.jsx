import './App.css'
import HelloWorld from './HelloWorld'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import PendingEmployeeComponents from './components/PendingEmployeeComponents'
import Status from './components/Status'
import StatusCheck from './components/StatusCheck'
import { BrowserRouter , Route, Routes} from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
     <HeaderComponent/>
     <Routes>
      {/* //http://localhost:3000 */}
           <Route path='/' element = { <ListEmployeeComponents/>}></Route>
           {/* //http://localhost:3000/employees */}
           <Route path='/employees' element = {<ListEmployeeComponents/>}></Route>
           {/* pending at president */}
           <Route path='/pending' element = {<PendingEmployeeComponents/>}></Route>
           {/* status check */}
           <Route path='/Status' element = {<Status/>}></Route>
           {/* status check bye id*/}
           <Route path='/StatusCheck' element = {<StatusCheck/>}></Route>
           {/* //http://localhost:3000/add-employee */}
           <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>
     </Routes>
     <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
