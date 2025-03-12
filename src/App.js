import './css/app.css';
import Students from './pages/Students';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyNavbar from './Components/Navbar'


function App() {
  return (
    <body className='body'>
    <>
      <div>
        <BrowserRouter>
          <MyNavbar />
          <h1 className='title'>Welcome to Student Registration App</h1>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Register' element={<Register/>}></Route>
            <Route path='/Students' element={<Students/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      
    </>
    </body>
  );
}

export default App;
