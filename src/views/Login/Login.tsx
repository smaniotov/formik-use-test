import { useCustomFormik } from 'hooks'
import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import {
  Button,
  Checkbox,
  Container,
  Form,
  Grid,
  Input,
} from 'semantic-ui-react'

const Login = () => {
  const intl = useIntl()
  const { createProps, formik } = useCustomFormik({
    initialValues: {
      username: '',
      password: '',
      terms: false,
    },
    onSubmit: values => {
      console.log({ values })
    },
  })

  return (
    <Container>
      <Grid.Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Grid.Column width={12}>
          <div style={{ marginTop: '90px' }}>
            <h3>
              <FormattedMessage id="login.title" />
            </h3>
            <div style={{ marginTop: '10px' }}>
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
                <Form.Field
                  control={Input}
                  {...createProps('password')}
                  type="password"
                  placeholder={intl.formatMessage({
                    id: 'form.placeholder.password',
                  })}
                  label={intl.formatMessage({ id: 'form.label.password' })}
                />
                <Form.Field
                  {...createProps('terms')}
                  label="I agree to the Terms and Conditions"
                  control={Checkbox}
                />
                <Button type="submit" disabled={!formik.values.terms}>
                  <FormattedMessage id="form.submit" />
                </Button>
              </Form>
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Container>
  )
}

export default Login
