import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Categories = () => {
   return (
      <div className="fancy-item-area pt-90 pb-60">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="item-wrapper mb-30">
                     <Image className="img-fluid" src="/assets/img/item-4.jpg" alt="Item Img" width="565" height="540" />
                     <div class="center-btn">
                        <Link href="/"><a class="theme_btn style-1">Patches</a></Link>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="item-wrapper mb-30">
                     <Image src="/assets/img/item-5.jpg" alt="Item Img" width="365" height="252" />
                     <div class="center-btn">
                        <Link href="/"><a class="theme_btn style-1">Apparel</a></Link>
                     </div>
                  </div>
                  <div className="item-wrapper mb-30">
                     <Image src="/assets/img/item-6.jpg" alt="Item Img" width="365" height="252" />
                     <div class="center-btn">
                        <Link href="/"><a class="theme_btn style-1">Brands</a></Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Categories;