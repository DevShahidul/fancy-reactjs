import React from 'react'

export const WalletModal = () => {
   return (
      <div className="wallet-content-area">
         <div className="modals-content text-center">
            <button type="button" className="close-btn"><img src="assets/img/icon/cross.svg" alt="Close Icon" /></button>
            <div className="modals-header mb-45">
               <h5 className="modals-title mb-15">CONNECT WALLET</h5>
               <p>Please select a wallet to connect</p>
            </div>
            <div className="modals-body">
               <button className="btn btn-transparent wallet-box">
                  <img src="assets/img/cat.svg" alt="Cat Img" />
                  <p>MetaMask</p>
               </button>
               <button className="btn btn-transparent wallet-box">
                  <img src="assets/img/connect.svg" alt="Connect Img" />
                  <p>WalletConnect</p>
               </button>
            </div>
         </div>
      </div>
   )
}
