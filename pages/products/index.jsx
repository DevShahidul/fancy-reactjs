import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { ProductItem } from '../../components/ProductItem'
import { ProductDetails } from '../../components/ProductItem/ProductDetails'
import Image from 'next/image'
import { Modal } from '../../components/Modal'

const ProductData = [
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

const Product = () => {
   const router = useRouter();
   const [selectedItem, setSelectedItem] = useState(ProductData)
   const [isOpen, setIsOpen] = useState(false);

   const handleSelectedItem = (title) => {
      const filteredData = ProductData.filter(item => item.title === title)
      setSelectedItem(filteredData)
   }

   const handleOnclick = (title) => {
      handleSelectedItem(title)
      setIsOpen(true)
   }

   //console.log(selectedItem);
   return (
      <>
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

                  {ProductData.map((item, index) => {
                     const itemKey = item.id + '-' + index
                     const title = item.title;
                     return (
                        <div key={itemKey} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                           <ProductItem {...item} handleClick={() => handleOnclick(title)} />
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
         <Modal isOpen={isOpen}>
            <ProductDetails {...selectedItem[0]} />
         </Modal>
      </>
   )
}

export default Product;