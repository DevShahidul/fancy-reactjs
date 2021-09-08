import React from 'react'

export const Modal = ({ children, isOpen }) => {
   return (
      <>
         {isOpen ?
            <div className="modal-wrap">
               {children}
            </div> : null
         }
      </>
   )
}
