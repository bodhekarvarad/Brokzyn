import React from 'react'

function Awards() {
    return(
        <div className="container mt-5">
            <div className="row"> 
                <div className="col-lg-6 p-5 col-sm-12">
                    <img src='media/images/largestBroker.svg' alt="awards"/>
                </div>
                <div className="col-lg-6 p-5 mt-5 col-sm-12">
                   <h1> Largest stock broker in India</h1>
                   <p className="mb-5">That's why 1.6+ crore customers trust with ₹6 lakh crores of equity investments, making us India’s largest broker,contributing to 15% of daily retail exchange volumes in India.</p>
              <div className="row">
                <div className='col-6'>
                 <ul>
                <li>
                     <p>Futures and Options</p>
                </li>
                 <li>
                     <p>Commodity Trading</p>
                </li>
                 <li>
                     <p>Currency Derivatives</p>
                </li> 
                
               
               </ul>
               </div>
               <div className='col-6'>
                 <ul>
                <li>
                     <p>Mutual Funds</p>
                </li>
                 <li>
                     <p>IPO's</p>
                </li>
                 <li>
                     <p>Direct Equity</p>
                </li>
              </ul>
                </div>
              </div>
               
                <img src="media/images/pressLogos.png" style={{ width: "90%" }} alt="Press Logos" />
                </div>
            </div>

       
        </div>
    );
}
export default Awards;