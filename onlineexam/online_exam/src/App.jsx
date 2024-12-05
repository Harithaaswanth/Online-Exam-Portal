
import NavbarComponent from './components/NavbarComponent'
import LoginComponent from './components/LoginComponent'
import { Route, Routes } from 'react-router-dom'
import RegisterComponent from './components/RegisterComponent.Jsx'
import LogoutComponent from './components/LogoutComponent'
import QuestionComponent from './components/QuestionComponent'
import ViewQuestionComponent from './components/ViewQuestionComponent'
import ExamComponent from './components/ExamComponent'
import StudentAnswerComponent from './components/ExamComponent'



const App = () => {

  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path='/login' element={<LoginComponent />}></Route>
        <Route path='/register' element={<RegisterComponent />}></Route>
        <Route path='/question' element={<QuestionComponent />}></Route>
        <Route path='/view' element={<ViewQuestionComponent />}></Route>
        <Route path='/studentexam' element={<ExamComponent />}></Route>

        <Route path='/studentanser' element={<StudentAnswerComponent />}></Route>

        <Route path='/logout' element={<LogoutComponent />}></Route>



      </Routes>
    </div>
  )
}

export default App
