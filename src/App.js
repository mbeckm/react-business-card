import React from 'react'
import Header from './components/Header'
import Bio from './components/Bio'
import Footer from './components/Footer'

export default function App(){
    return(
        <div className="container">
            <Header />
            <Bio />
            <Footer />
        </div>
        )
}