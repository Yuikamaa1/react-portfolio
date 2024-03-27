import React, { useEffect, useState } from 'react';
// import React {useEffect,useState} from 'react';
import './Home.css';
import { Footer } from './Footer';
// import front from './images/frontend.jpg';

export const Home =()=>{
    const [role, setRole]=useState('software developer');

    useEffect (()=>{
        const changeRole =()=>{
            setRole('web developer');
            setTimeout(changeRole, 3000);
        };
        // const timer=
        setTimeout(changeRole, 3000);
        return ()=> clearTimeout(changeRole);
    },[]);
    return (
        <div className="container-fluid div1"> 
        
            <div className="row mb-4 ">
                <div className="col-md-6 h3 mt-5">
                    <h3 className='h3 text-center '>
                    <span className='slide-in'>hello, im brian kamau i'm a </span><br />
                    <span className='span-h3 animate__animated animate__slideInLeft slide-text'>{role}</span>
                    </h3>
                </div>
                <div className='col-md-6 image' >
                    <img src='./images/kamau.jpg' alt="kamau" height={150}  width={200} className='home-img'/>
                </div>

            </div>
            <hr />
            <div className="row mb-4 justify-content-lg-center ">
                <div className='col-md-4'>
                    <div className="service p-4 bg-success rounded-4  shadow-effect">
                        <h3 className='home-h3 '>Frontend developer</h3>
                        <p className='home-p'>Im a frontend developer with experience in building responsive and optimized sites</p>
                    </div>
                </div>    

                <div className='col-md-4'>
                    <div className="service p-4 bg-success rounded-4  shadow-effect">
                        <h3 className='home-h3'>Backend developer</h3>
                        <p className='home-p'>Im a backend developer with experience developing fast and optimized back-end systems and APIs</p>
                    </div>
                </div> 
           </div>   
            <div className="row justify-content-lg-center">
                <div className='col-md-4'>
                    <div className="service p-4 pb-1  bg-success rounded-4  shadow-effect">
                        <h3 className='home-h3'>ui/ux designer</h3>
                        <p className='home-p'>I have designed multiple landing pages and have created design systems as well</p>
                    </div>
                </div> 

                <div className='col-md-4'>
                    <div className="service p-4 bg-success rounded-4  shadow-effect">
                        <h3 className='home-h3'>Desktop App developer</h3>
                        <p className='home-p'>I have created several application using java (jdbc and gui) and mysql</p>
                    </div>
                </div> 
            </div>
            <div className='text-bg-dark '>
                    <p>our team members :-</p>
                </div>
            <div className="row img-div justify-content-center ">
               
                <div className="col-md-4 ">
                    <img src="./images/p1.jpg"  height={200}  width={170} alt="team 1" />
                    <p className='text-primary'>ken kahura</p>
                </div>
                <div className="col-md-4">
                    <img src="./images/p2.jpg" alt="team 2" height={200}  width={170} />
                    <p className='text-primary'>Raj omuom</p>
                </div>
                <div className="col-md-4">
                    <img src="./images/p3.jpg" alt="team 3" height={200}  width={170}/>
                    <p className='text-primary'>John Doe</p>
                </div>
            </div>
            <Footer/>
                   
     </div>
    );
    
}