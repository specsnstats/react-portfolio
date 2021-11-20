import React, { useState } from "react";
import About from "../pages/About"
import Portfolio from "../pages/Portfolio"
import Contact from "../pages/Contact"
import Header from "../Header"

function Body() {
    const [currentPage, setCurrentPage] = useState('About')

    const renderPage = ()=>{
        if (currentPage === "About"){
            return <About />
        }
        if (currentPage === "Portfolio"){
            return <Portfolio />
        }
        if (currentPage === "Contact"){
            return <Contact />
        }
    }

    const handlePageChange=(page)=> setCurrentPage(page)

    return (
        <>
          <Header currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </>
    )
}

export default Body;