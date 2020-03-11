import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Menu, Responsive, Segment } from 'semantic-ui-react'

interface LayoutProps {
  children?: any
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Responsive minWidth={0}>
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 0, padding: '1em 0em' }}
        vertical
      >
        <Menu inverted pointing secondary size="large">
          <Container>
            <Menu.Item as={Link} to="/" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Example</Menu.Item>
            <Menu.Item as="a">Example</Menu.Item>
            <Menu.Item position="right">
              <Link to="/login">
                <Button inverted>Log in</Button>
              </Link>
              <Link to="/register">
                <Button inverted style={{ marginLeft: '0.5em' }}>
                  Sign Up
                </Button>
              </Link>
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>

      {children}
    </Responsive>
  )
}

export default Layout
