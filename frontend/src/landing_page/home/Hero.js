import React from 'react'

function Hero() {
    return(
        <div className="container p-5 mb-5">
            <div className="row text-center">
               <img src='media/images/homeHero.png' style={{width:"100%"}} alt="Home Hero" className="mb-5"/> 
                <h1 clasName="mt-5">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%",margin:"auto"}}>Signup Now</button>
            </div>
        </div>
    );
}   
export default Hero;