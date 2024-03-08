    import React from 'react'
    import Navbar from '../HomeComponents/Navbar'   
    import "./Banking.css"
import Bankhead from './Bankhead'
import Bankinglist from './Bankinglist'
import Footer from '../HomeComponents/Footer'

    const Banking = () => {
    return (
        <>
        <Navbar/>
        <div className="bg" style={{backgroundColor:'black'}}>
        <Bankhead/>
        <Bankinglist/>
        <Footer/>

        </div>
     




        </>
    

    )
    }

    export default Banking