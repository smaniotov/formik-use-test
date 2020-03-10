import React, { FC } from 'react'
import { Container, Menu, Button } from 'semantic-ui-react'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <Container>
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>Work</Menu.Item>
      <Menu.Item>Company</Menu.Item>
      <Menu.Item>Careers</Menu.Item>
      <Menu.Item position="right">
        <Button>Log in</Button>
        <Button>Sign Up</Button>
      </Menu.Item>
    </Container>
  )
}

export default Navbar
