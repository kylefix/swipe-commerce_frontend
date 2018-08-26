import React from 'react'
import DesktopWrapper from './DesktopWrapper'
import MobileWrapper from './MobileWrapper'

export default ({ children }) => (
  <>
    <DesktopWrapper>{children}</DesktopWrapper>
    <MobileWrapper>{children}</MobileWrapper>
  </>
)
