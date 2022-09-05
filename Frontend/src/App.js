import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './Components/Login/Login';
import './Components/style.css';
import { Route, Routes } from "react-router-dom";
import Register from './Components/Register/Register';
import Loader from './Components/Loader/loader';
import bgImage from './Components/bg.jpg';
import './Components/FormikFields/animate.css';
import Error from './Components/Error/Error';
import Dashboard from './Components/Dashboard/Dashboard';
import Auth from './Components/Auth/Auth';

function App() {


const [isLoading , setIsLoading] = useState(false);

useEffect(() => {

  setIsLoading(true)

  setTimeout(()=>{
    setIsLoading(false);
  },4000)

}, [])



  return (

<>
      { isLoading ?
      
         <Loader/>
        :
        
        <div className="App">
          
          <img className='background-image'  src={bgImage} />

          <Routes>

          <Route exact path='/' element={<> <Login/> </>}/>
          <Route path='/register' element={<> <Register/> </>}/>

          {/* <Route path='/loader' element={<> <Loader/> </>}/> */}
          <Route element={<Auth/>}>
              <Route path='/dashboard' element={<> <Dashboard/> </>}/>
          </Route>
  

          <Route path="*"  element={<> <Error/> </>}/>

        </Routes>
  
         </div>
      }

   
</>
  );
}

export default App;
