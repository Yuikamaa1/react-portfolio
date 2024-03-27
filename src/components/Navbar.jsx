import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

export const Navbar =()=>{
    return (
    <nav className='navbar navbar-expand-lg  navbar-dark bg-dark nav1'>
        <div className="container-fluid">
            <a className='navbar-brand'  href="#">My Portfolio</a>
            <button className='navbar-toggler ' type="button" data-bs-toggle="collapse" data-bs-target="#navbarnav" aria-controls='navbar' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className="collapse navbar-collapse" id='navbarNav'>
                <ul className='navbar-nav ml-auto' >
                <li className='nav-item ' >
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item ' >
                        <Link to='/contact' className='nav-link'>Contact</Link>
                    </li>
                    <li className='nav-item '>
                        <Link to='/skill' className='nav-link'>skill</Link>
                    </li>
                    <li className='nav-item '>
                        <Link to='/project' className='nav-link'>project</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    );
}
// export default Navbar;