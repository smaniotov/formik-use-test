import React, { FC } from 'react'
import {
  Responsive,
  Visibility,
  Segment,
  Menu,
  Container,
  Button,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Layout: FC<any> = ({ children }) => {
  return (
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        // onBottomPassed={this.showFixedMenu}
        // onBottomPassedReverse={this.hideFixedMenu}
      >
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
              <Menu.Item as="a">Work</Menu.Item>
              <Menu.Item as="a">Company</Menu.Item>
              <Menu.Item as="a">Careers</Menu.Item>
              <Menu.Item position="right">
                <Link to="/login">
                  <Button inverted>Log in</Button>
                </Link>
                <Button as="a" inverted style={{ marginLeft: '0.5em' }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Visibility>

      {children}
    </Responsive>
  )
}

export default Layout
