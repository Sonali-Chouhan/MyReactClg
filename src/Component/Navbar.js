import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>

<div className="header">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/userlogin">Login</Link>
          <Link to='/userRegistration'>Registrations</Link>
          <Link to="/postnewjob">postnewjob</Link>
          <Link to="/jobsearch">Jobsearch</Link>
          <Link to="/contactus">Contactus</Link>
          <Link to="/applyjob">Applyjob</Link>
          <Link to="/feedback">Feedback</Link>
        </div>
    </div>
  )
}

export default Navbar