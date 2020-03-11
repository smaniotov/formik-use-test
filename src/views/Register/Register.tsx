import { RouteEnum } from 'enums'
import { useCustomFormik } from 'hooks'
import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { Link, useHistory } from 'react-router-dom'
import { Button, Container, Form, Grid, Input } from 'semantic-ui-react'

const Register = () => {
  const intl = useIntl()
  const history = useHistory()
  const { createProps, formik } = useCustomFormik({
    initialValues: {
      name: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      birthDate: null,
    },
    onSubmit: values => {
      console.log({ values })
      history.push(RouteEnum.Dashboard)
    },
  })

  return (
    <Container>
      <Grid>
        <Grid.Row style={{ display: 'flex', justifyContent: 'center' }}>
          <Grid.Column width={5}>
            <div style={{ marginTop: '90px' }}>
              <h3>
                <FormattedMessage id="register.title" />
              </h3>
              <div>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Field
                    {...createProps('name')}
                    control={Input}
                    type="text"
                    label={intl.formatMessage({ id: 'form.label.name' })}
                  />
                  <Form.Field
                    {...createProps('lastName')}
                    control={Input}
                    type="text"
                    label={intl.formatMessage({ id: 'form.label.lastName' })}
                  />
                  <Form.Field
                    {...createProps('username')}
                    control={Input}
                    type="text"
                    label={intl.formatMessage({ id: 'form.label.username' })}
                  />
                  {/* <Form.Field {...createProps('birthDate')} control={Input} /> */}
                  <Form.Field
                    {...createProps('email')}
                    control={Input}
                    type="email"
                    label={intl.formatMessage({ id: 'form.label.email' })}
                  />
                  <Form.Field
                    {...createProps('password')}
                    control={Input}
                    type="password"
                    label={intl.formatMessage({ id: 'form.label.password' })}
                  />
                  <Form.Field
                    {...createProps('confirmPassword')}
                    control={Input}
                    type="password"
                    label={intl.formatMessage({
                      id: 'form.label.confirmPassword',
                    })}
                  />
                  <div>
                    <Link to={RouteEnum.Login}>
                      <FormattedMessage id="register.backToLogin" />
                    </Link>
                  </div>
                  <Button>
                    <FormattedMessage id="form.submit" />
                  </Button>
                </Form>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Register
