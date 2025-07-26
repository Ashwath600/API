import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import StudentTable from "./components/studentTable.jsx"
import EditStudent from "./components/editStudent.jsx"
import ViewStudent from "./components/viewStudent.jsx"
import CreatingStudent from "./components/creatingStudent.jsx"

function App() {
  return (
   <div>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<StudentTable/>}></Route>
    <Route path="/student/create" element={<CreatingStudent/>}></Route>
    <Route path="/student/edit/:studentid" element={<EditStudent/>}></Route>
    <Route path="/student/view/:studentid" element={< ViewStudent/>}></Route>
   </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
