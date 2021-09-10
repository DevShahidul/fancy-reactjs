import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const CategoryItem = ({ productThumb, title, price, stock }) => {
   const itemSlug = title.replace(/ /g, '-');
   return (
      <div className="filter-item mb-30">
         <Link href={`/category/${itemSlug.toLowerCase()}`}><a><Image className="w-100 mb-10" src={productThumb} alt={title} width="268" height="268" /></a></Link>
         <Link href={`/category/${itemSlug}`}><a className="item-title">{title}</a></Link>
         <span className="item-text">{price} ETH {stock.current}/{stock.total} remaining</span>
      </div>
   )
}
