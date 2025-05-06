import React from 'react'
import { userData } from '../helpers'
import { Link } from 'react-router';


function Profile() {
   const {username} = userData();

  return (
    <div>
        <h1>This is {username} profile Page</h1>
        <div className="registerLinkLogin">
               <Link to='/Logout'>Logout</Link>
       </div>
        
        
        
    </div>
  )
}

export default Profile