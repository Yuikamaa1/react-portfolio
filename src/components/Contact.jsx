import React from 'react';
import './contact.css';

export const Contact =()=>{
    return (
       
        <section id='contact' className='full-height px-lg-5'>
            <div className="container">

                <div className="row justify-content-center text-center pb-4" data-aos='fade-up'>
                    <div className="col-lg-8 pb-4">
                        <h1 className='text-brand h1-header' >contact</h1>
                        <h1>if interested in talking or hiring let's talk</h1>
                    </div>
                    <div className="col-lg-8">
                        <form action="#" className='row justify-content-center  text-center '>
                            <div className="form-group col-md-6 mb-3">
                                <input type="text" className='form-control' placeholder='enter name'/>
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <input type="text" className='form-control' placeholder='enter email'/>
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <input type="text" className='form-control' placeholder='enter subject'/>
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <textarea name="" rows="4" className='form-control' placeholder='write your message'></textarea>
                            </div>
                            <div>
                                <button type='button' className='btn btn-sm btn-success'>contact me</button>
                            </div>
                        </form>
                        <hr />
                        <div className='text-success '>
                            
                    
                            <p><img src="./images/phone.png" alt="phone" height={22}  width={30} /> +254711591305</p>
                            <p><img src="./images/email.jpg" alt="email" height={22}  width={30} /> kamaub700@gmail.com</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
       
    );
}