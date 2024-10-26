import React from 'react'
import Address from '../Components/Contact/Address'
import Forms from '../Components/Contact/Forms'
import ContactPage from '../Components/Contact/ContactPage'

const Contact = () => {
  return (
    <div>
      <ContactPage/>
        <Address/>
        <Forms/>
    </div>
  )
}

export default Contact