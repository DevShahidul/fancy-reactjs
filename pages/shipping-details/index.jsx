import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ShippingDetails = () => {
   return (
      <div className="contact-form">
         <button type="button" className="close-btn"><Image src="/assets/img/icon/cross.svg" alt="Close Icon" width="16px" height="16px" /></button>
         <div className="container">
            <div className="row">
               <div className="col-xl-12">
                  <h6 className="form-title">Shipping Details</h6>
                  <form action="#" className="form-two mb-55">
                     <div className="form-group">
                        <label htmlFor="address">Street Address</label>
                        <input type="text" id="address" name="address" placeholder="1234 Address Street" />
                     </div>
                     <div className="form-group">
                        <label htmlFor="city">City/Province</label>
                        <input type="text" id="city" name="city" placeholder="Salt Lake City" />
                     </div>
                     <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input type="text" id="state" name="state" placeholder="Utah" />
                     </div>
                     <div className="form-group">
                        <label htmlFor="zip">Zip</label>
                        <input type="text" id="zip" name="zip" placeholder="84105" />
                     </div>
                     <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input type="text" id="country" name="country" placeholder="United States" />
                     </div>
                     <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" placeholder="yourname@email.com" />
                     </div>
                  </form>
               </div>
               <div className="col-12">
                  <div className="submit_btn text-center">
                     <Link href="/thank-you"><button type="submit" className="theme_btn">Submit</button></Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default ShippingDetails;