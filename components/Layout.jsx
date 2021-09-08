import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }) => {

    return (
        <>
            <div className="page-container">
                <Header />
                {children}
            </div>
            <Footer />
        </>
    )
}
