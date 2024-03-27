import React from 'react';
import './project.css';
export const Project =()=>{
    return (
        <div className='container-fluid project-body'>
            <h1 className='h1'>My projects</h1>
            <hr />
            <div className="col">
                <div className="card-body">
                    <h5 className='card-title mb-2 ' >project 1 </h5>
                    <p className='card-text'>
                       This is a project i have build using laravel a php framework and bootstrap, its about a student CRUD operation 
                       and you can view it in the github
                    </p>
                    <a href="#" className='btn btn-success '>View project</a>
                </div>
            </div>


        </div>
    );
}