import { RouteEnum } from 'enums'
import { useCustomFormik } from 'hooks'
import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { Button, Container, Form, Grid, Image, Input } from 'semantic-ui-react'
import {
  HeadingContainer,
  LoginContainer,
  StyledLoginSubtitle,
  StyledLoginTitle,
  ButtonContainer,
  LogoContainer,
  StyledForgotPassword,
} from './styles'

// eslint-disable-next-line global-require
const logoIcon = require('assets/icons/logo.svg') as string

const Login = () => {
  const intl = useIntl()
  const { createProps, formik } = useCustomFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: console.log,
  })

  return (
    <LoginContainer>
      <Container>
        <Grid>
          <Grid.Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid.Column largeScreen={4} mobile={12} tablet={8}>
              <div>
                <LogoContainer>
                  <Image src={logoIcon} />
                </LogoContainer>
                <HeadingContainer>
                  <StyledLoginTitle>
                    <FormattedMessage id="login.title" />
                  </StyledLoginTitle>
                  <StyledLoginSubtitle>
                    <FormattedMessage id="login.subtitle" />
                  </StyledLoginSubtitle>
                </HeadingContainer>
                <div>
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Field
                      {...createProps('username')}
                      type="text"
                      placeholder={intl.formatMessage({
                        id: 'form.placeholder.username',
                      })}
                      label={intl.formatMessage({ id: 'form.label.username' })}
                      control={Input}
                    />
                    <Form.Field>
                      <label htmlFor="password">
                        <FormattedMessage id="form.label.password" />
                        <StyledForgotPassword>
                          <Link to={RouteEnum.ForgotPassword}>
                            <FormattedMessage id="login.forgotPassword" />
                          </Link>
                        </StyledForgotPassword>
                      </label>

                      <Input
                        {...createProps('password')}
                        type="password"
                        placeholder={intl.formatMessage({
                          id: 'form.placeholder.password',
                        })}
                      />
                    </Form.Field>
                    <ButtonContainer>
                      <Grid>
                        <Grid.Column width={1} />
                        <Grid.Column width={10} textAlign="center">
                          <Button fluid type="submit" color={'primary' as any}>
                            <FormattedMessage id="form.login" />
                          </Button>
                        </Grid.Column>
                      </Grid>
                    </ButtonContainer>
                    <div style={{ textAlign: 'center' }}>
                      <FormattedMessage id="login.notSignedYet" />
                      <Link to={RouteEnum.Register}>
                        <FormattedMessage id="login.registerHere" />
                      </Link>
                    </div>
                  </Form>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </LoginContainer>
  )
}

export default Login
