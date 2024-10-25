import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import PropTypes from 'prop-types'
const Layouts = ({children}) => {
  return (
    <div className='d-flex flex-column justify-content-between min-vh-100'>
        <Navbar />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}
Layouts.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layouts;
