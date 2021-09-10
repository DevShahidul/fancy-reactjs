import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const ProductItem = ({ productThumb, title, price, stock, handleClick }) => {
   const itemSlug = title.replace(/ /g, '-');
   return (
      <div className="filter-item mb-30" onClick={handleClick}>
         <Link href={`/products/?${itemSlug.toLowerCase()}`} as={`/products/${itemSlug.toLowerCase()}`}><a><Image className="w-100 mb-10" src={productThumb} alt={title} width="268" height="268" /></a></Link>
         <Link href={`/products/?${itemSlug.toLowerCase()}`} as={`/products/${itemSlug.toLowerCase()}`}><a className="item-title">{title}</a></Link>
         <span className="item-text">{price} ETH {stock.current}/{stock.total} remaining</span>
      </div>
   )
}
