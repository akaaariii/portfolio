import React from 'react'
import { BgSecondary, Wrapper } from '../../globalStyles'
import { ContactContainer, ContactLink, MailLink, MailIcon } from './styles'

const Contact = () => {
  return (
    <BgSecondary>
      <Wrapper id="contact">
        <h2>Contact</h2>
        <ContactContainer>
          <p>
            I would love to hear from you &#33;<br />
            Drop me a line. I'll get back to you soon :&#41;
          </p>
          <ContactLink>
            <MailIcon />
            <div>
              <MailLink href="mailto:caaari23&#64;gmail.com">caaari23@gmail.com</MailLink>
            </div>
          </ContactLink>
        </ContactContainer>
      </Wrapper>
    </BgSecondary>
  )
}

export default Contact
