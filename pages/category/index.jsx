import React from 'react'
import { CategoryItem } from '../../components/CategoryItem'
import Image from 'next/image'

const categoryData = [
   {
      id: 'PS001',
      title: 'Bored Ape Blue',
      productImages: ['/assets/img/demo-img-1.jpg', '/assets/img/demo-img-1.jpg', '/assets/img/demo-img-1.jpg', '/assets/img/demo-img-1.jpg'],
      productThumb: '/assets/img/demo-img-1.jpg',
      price: 1.2,
      stock: {
         total: 1200,
         current: 112
      },
      productDescription: 'em ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
   },
   {
      id: 'PS002',
      title: 'Mikey Jacket',
      productImages: ['/assets/img/demo-img-1.jpg', '/assets/img/demo-img-1.jpg', '/assets/img/demo-img-1.jpg', '/assets/img/demo-img-1.jpg'],
      productThumb: '/assets/img/demo-img-1.jpg',
      price: 1.2,
      stock: {
         total: 1200,
         current: 112
      },
      productDescription: 'em ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
   }
]

const Category = () => {
   return (
      <div className="category-filter-area pt-35 pb-200">
         <div className="container">
            <div className="row">
               <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="filter-wrapper mb-85">
                     <form action="#" className="form-one">
                        <input type="text" placeholder="Search" />
                        <button className="sub_btn"><Image src="/assets/img/icon/search.svg"
                           alt="Search Right" width="16" height="16" /></button>
                     </form>
                     <div className="select-item">
                        <select className="select" name="sortBy" id="sortItem">
                           <option value="Hats">Hats</option>
                           <option value="Aparel">Aparel</option>
                           <option value="Patch">Patch</option>
                        </select>
                        <span className="down-icon"><Image src="/assets/img/icon/chevron-down.svg"
                           alt="Chevron Icon" width="9" height="4" /></span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">

               {categoryData.map((item, index) => {
                  const itemKey = item.id + '-' + index
                  return (
                     <div key={itemKey} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <CategoryItem {...item} />
                     </div>
                  )
               })}

               {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <a href="./category-details.html" className="filter-item mb-30">
                     <img className="w-100 mb-10" src="/assets/img/demo-img-1.jpg" alt="Filter Img">
                     <a class ="item-title" href="#">Mikey Jacket</a>
                     <a class ="item-text" href="#">1.2 ETH 112/1200 remaining</a>
                  </a>
               </div> */}
            </div>
         </div>
      </div>
   )
}

export default Category;