import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }) => {

    return (
        <>
            <main className="page-container">
                <Header />
                {children}
                <Footer />
            </main>
        </>
    )
}
