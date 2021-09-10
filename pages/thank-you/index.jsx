import React from 'react'
import Link from 'next/link'

const ThankYou = () => {
   return (
      <div className="thank-area">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="thank-wrapper text-center">
                     <h6 className="sect-title mb-30">Thank You!</h6>
                     <Link href="/categories"><a className="theme_btn style-2">Back to Fancy</a></Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default ThankYou;