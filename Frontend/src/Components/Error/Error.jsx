import React from 'react'
import './error.css';
import { Link } from 'react-router-dom';

function Error() {

  let getToken = localStorage.getItem('token');

  return (
   
	<div id="notfound">
    <div className="notfound">
        <div className="notfound-404">
            <h1>404</h1>
            <h2>Page not found</h2>
        </div>
       <Link to={(getToken!==null ? '/dashboard' : '/')}>Homepage</Link>
    </div>
</div>

  )
}

export default Error