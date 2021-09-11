import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContactContent = () => {
   return (
      <div className="category-link-item pt-155 pb-120">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-12">
                  <div className="category-link-text text-center mb-15">
                     <p>
                        <Image src="/assets/img/link-img-1.jpg" alt="Link Img" width="135" height="70" /> CONNECT YOUR <span className="styled-text">wallet</span>
                        <span className="styled-text shape-2">shop</span> EXCLUSIVE  BRANDS
                        <Image src="/assets/img/link-img-2.jpg" alt="Link Img" width="135" height="70" />
                        PATCHES <Image src="/assets/img/link-img-3.jpg" alt="Link Img" width="135" height="70" />  APPAREL
                        &amp; OTHER <span className="styled-text shape-3">fancy</span> STUFF <Image src="/assets/img/link-img-4.jpg" alt="Link Img" width="135" height="70" />
                     </p>
                  </div>
               </div>
               <div className="col-lg-8">
                  <Link href="/products"><a className="shop-now d-flex align-items-center mb-30"><span>Shop</span>
                     <span>Now</span>
                  </a></Link>
               </div>
            </div>
         </div>
      </div >
   )
}

export default ContactContent;