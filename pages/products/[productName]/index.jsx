import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const CategoryDetails = () => {
   const router = useRouter();
   const { productName } = router.query;
   return (
      <div className="category-details-area">
         <Link href="/products"><a type="button" className="close-btn"><Image src="/assets/img/icon/cross.svg" alt="Close Icon" width="393" height="392" /></a></Link>
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
                     <SwiperSlide>
                        <div className="img-box">
                           <Image className="w-100" src="/assets/img/demo-img-2.jpg" alt="" width="393" height="392" />
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className="img-box">
                           <Image className="w-100" src="/assets/img/demo-img-2.jpg" alt="" width="393" height="392" />
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className="img-box">
                           <Image className="w-100" src="/assets/img/demo-img-2.jpg" alt="" width="393" height="392" />
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className="img-box">
                           <Image className="w-100" src="/assets/img/demo-img-2.jpg" alt="" width="393" height="392" />
                        </div>
                     </SwiperSlide>
                  </Swiper>
               </div>
               <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="category-item-details">
                     <h3 className="mb-20">Bored Ape Blue</h3>
                     <h6>Current price</h6>
                     <h3 className="mb-20">1.2 ETH</h3>
                     <h6 className="mb-20">112/1200 remaining</h6>
                     <div className="select-item mb-25">
                        <div className="select-wrap d-flex align-items-center">
                           <span>Qty:</span>
                           <select className="select" name="sortBy" id="sortItem">
                              <option value="36">36</option>
                              <option value="37">37</option>
                              <option value="38">38</option>
                           </select>
                           <span className="down-icon"><Image src="/assets/img/icon/chevron-down.svg" alt="Chevron Icon" width="9" height="4" /></span>
                        </div>
                     </div>
                     <p>Details</p>
                     <p className="mb-65">em ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                     <a href="./contact.html" className="theme_btn">Purchase</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default CategoryDetails;