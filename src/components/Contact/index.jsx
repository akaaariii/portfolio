import React from 'react'
import { BgSecondary, Wrapper } from '../../globalStyles'
import { ContactContainer } from './styles'

const Contact = () => {
  return (
    <BgSecondary>
      <Wrapper id="contact">
        <h2>Contact</h2>
        <ContactContainer>
          <p>I would love to hear from you.</p>
          <p>caaari23@gmail.com</p>
        </ContactContainer>
      </Wrapper>
    </BgSecondary>
  )
}

export default Contact
