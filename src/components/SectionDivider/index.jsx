import React from 'react'
import { SvgWrapper, SvgBg } from './styles'

const SectionDivider = ({ position }) => {
  return (
    <SvgWrapper>
      {position === "top" ? (
        <SvgBg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none" style={{backgroundColor: '#2e2d2a'}}>
          <path d="M100,100 v-50 q-10,-30 -20,0 t-20,0 t-20,0 t-20,0 t-20,0 v50 Z" fill="#FBF4EE"></path>
        </SvgBg>
      ) : (
        <SvgBg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none" style={{backgroundColor: '#fff'}}>
          <path d="M0,0 v50 q10,30 20,0 t20,0 t20,0 t20,0 t20,0 v-50 Z" fill="#FBF4EE"></path>
        </SvgBg>
      )}
    </SvgWrapper>
  )
}

export default SectionDivider
