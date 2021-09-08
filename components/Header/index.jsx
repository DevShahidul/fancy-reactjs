import React from 'react'
import Link from 'next/link'

export const Header = () => {
   return (
      <header className="main-header">
         <div className="container">
            <div className="d-flex align-items-center pt-20 pb-20">
               <Link href="/"><a className="header-logo logo-text">Fancy</a></Link>
               <div className="header-btn-group ml-auto">
                  <button className="theme_btn">Connect Wallet</button>
                  <button className="theme_btn que_btn"><img src="assets/img/icon/question-mark-1.svg" alt="Question Icon" /></button>
               </div>
            </div>
         </div>
      </header>
   )
}
