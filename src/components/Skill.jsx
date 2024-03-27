import React from 'react';
import './Skill.css';
import { Footer } from './Footer';

 const Skill =()=>{
    return (
        
        <div className="container-fluid skill-body">
            <div className="col-lg-12 ">
                <p className='p-skill'> i have fairly good experience in the following languages and frameworks and have done some <br /> simple and complex projects with them</p>
            </div>
            <div className=' img-div' >
                <div className="row div-1">
                    <div className="col-md-4 text-center  custom-col ">
                        <img src="./images/html.png" alt="html"  className=' img-fluid img-con'/>
                        <p>html</p>
                    </div>
                    <div className="col-md-4 text-center   custom-col ">
                        <img src="./images/react.jpg" alt="react" className='img-fluid img-con ' />
                        <p>react</p>
                    </div>
                    <div className="col-md-4 text-center  custom-col ">
                        <img src="./images/js.png" alt="js" className='img-fluid img-con'/>
                        <p>js</p>
                    </div>
                </div>
                <div className="row mb-4 div-2">
                    <div className="col-md-4 text-center custom-col ">
                        <img src="./images/css.jpg" alt="css"   className='img-fluid img-con'/>
                        <p>css</p>
                    </div>
                    <div className="col-md-4 text-center custom-col ">
                        <img src="./images/bootstrap.png" alt="bootstrap"   className='img-fluid img-con'/>
                        <p>bootstrap</p>
                    </div>
                    <div className="col-md-4 text-center custom-col ">
                     <img src="./images/laravel.png" alt="laravel"  className='img-fluid img-con'/>
                     <p>laravel</p>
                    </div>
                </div>
                
                <div className="row mb-4 div-3">
                        <div className="col-sm-4 text-center custom-col ">
                            <img src="./images/php.png" alt="php"  className='img-fluid img-con'/>
                            <p>php</p>
                        </div>
                        <div className="col-sm-4 text-center custom-col ">
                            <img src="./images/java.jpg" alt="java"  className='img-fluid img-con'/>
                            <p>java</p>
                        </div>
                        <div className="col-sm-4 text-center custom-col " >
                            <img src="./images/python.jpg" alt="python" className='img-fluid img-con'/>
                            <p>python</p>
                         </div>
                         
                </div> 
            </div>
            <Footer/>
        </div>
    );
};
export default Skill;