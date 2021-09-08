import React from 'react'
import Link from 'next/link'

export const Footer = () => {
   return (
      <footer className="footer-area heding-bg pt-60 pb-30">
         <div className="container">
            <div className="row">
               <div className="col-lg-5 col-md-8">
                  <div className="widget widget-about position-relative mb-30">
                     <div className="footer-logo">
                        <span className="d-block">FA</span>
                        <span className="d-block">NC</span>
                        <span className="d-block">Y</span>
                     </div>
                     <h6 className="widget-title mb-20">We are Fancy</h6>
                     <p className="widget-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-4">
                  <div className="widget widget-list mb-30">
                     <h6 className="widget-title mb-20">Get in Touch</h6>
                     <ul className="list-item list-style-none">
                        <li><Link href="#"><a>Contact Us</a></Link></li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="widget widget-form mb-30">
                     <h6 className="widget-title mb-20">Be in the know</h6>
                     <form action="#" className="form-one mb-15">
                        <input type="text" placeholder="Your email" />
                        <button className="sub_btn"><img src="assets/img/icon/chevron-right.svg" alt="chevron-right" /></button>
                     </form>
                     <div className="fancy-social">
                        <Link href="#"><a><img src="assets/img/icon/facebook.svg" alt="Social Icon" /></a></Link>
                        <Link href="#"><a><img src="assets/img/icon/twitter.svg" alt="" /></a></Link>
                        <Link href="#"><a><img src="assets/img/icon/eye-man.svg" alt="" /></a></Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}
