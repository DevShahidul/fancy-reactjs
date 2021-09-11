import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export const ProductDetails = ({ title, productImages, price, stock, productDescription, closeModal }) => {
   const [quantity, setQuantity] = useState(null);
   const handleOnChange = (e) => {
      let selectedQuantity = 0;
      selectedQuantity = e.target.value;
      setQuantity(selectedQuantity);
   }
   return (
      <div className="category-details-area">
         <button onClick={() => closeModal(prev => !prev)} type="button" className="close-btn"><Image src="/assets/img/icon/cross.svg" alt="Close Icon" width="393" height="392" /></button>
         <div className="container">
            <div className="row ">
               <div className="col-xl-6 col-lg-6 col-md-6">
                  <Swiper
                     // install Swiper modules
                     modules={[Pagination, A11y]}
                     //spaceBetween={50}
                     slidesPerView={1}
                     pagination={{ clickable: true }}
                     onSwiper={(swiper) => console.log(swiper)}
                     onSlideChange={() => console.log('slide change')}
                  >
                     {
                        productImages.map((item, index) => (
                           <SwiperSlide key={`slide-thumb-${index}`}>
                              <div className="img-box">
                                 <Image className="w-100" src={item} alt="" width="393" height="392" />
                              </div>
                           </SwiperSlide>
                        ))
                     }
                  </Swiper>
               </div>
               <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="category-item-details">
                     <h3 className="mb-20">{title}</h3>
                     <h6>Current price</h6>
                     <h3 className="mb-20">{price} ETH</h3>
                     <h6 className="mb-20">{stock.current}/{stock.total} remaining</h6>
                     <div className="select-item mb-25">
                        <div className="select-wrap d-flex align-items-center">
                           <span>Qty:</span>
                           <select onChange={handleOnChange} className="select" name="sortBy" id="sortItem">
                              <option value="36">36</option>
                              <option value="37">37</option>
                              <option value="38">38</option>
                           </select>
                           <span className="down-icon"><Image src="/assets/img/icon/chevron-down.svg" alt="Chevron Icon" width="9" height="4" /></span>
                        </div>
                     </div>
                     <p>Details</p>
                     <p className="mb-65">{productDescription}</p>
                     <Link href="/shipping-details"><a className="theme_btn">Purchase</a></Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}