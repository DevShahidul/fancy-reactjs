import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Modal } from './Modal'
import { WalletModal } from './WalletModal'

export const Layout = ({ children }) => {
    return (
        <>
            <div className="page-container">
                <Modal>
                    <WalletModal />
                </Modal>
                <Header />
                {children}
            </div>
            <Footer />
        </>
    )
}
