import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Dashboard.css'

function Dashboard() {

    const getUser = localStorage.getItem('token');

  return (


    <div className='dashboard'>

        <div>
        <Navbar/>
        </div>

        <div class="center">
                <h2>Welcome {getUser} !!!</h2>
                </div>

    </div>


  )


}

export default Dashboard