import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginComponent from './components/LoginComponent';
import WelcomeComponent from './components/WelcomeComponent';
import ErrorComponent from './components/ErrorComponent';
import ListTodos from './components/ListTodos';
import Navbar from './components/Navbar';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path='/' element={<LoginComponent/>}/>
            <Route path='/welcome' element={<LoginComponent/>}/>
            <Route path='/todos' element={<ListTodos/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/welcome/:username' element={<WelcomeComponent/>}/>
            <Route path='*' element={<ErrorComponent/>}/>
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
