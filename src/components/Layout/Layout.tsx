import React, { FC } from 'react'
import { Responsive } from 'semantic-ui-react'

interface LayoutProps {
  children?: any
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <Responsive minWidth={0}>{children}</Responsive>
}

export default Layout
