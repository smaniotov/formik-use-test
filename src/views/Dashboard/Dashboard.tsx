import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Container, Grid } from 'semantic-ui-react'

const Dashboard = () => {
  return (
    <Container>
      <Grid>
        <Grid.Row style={{ display: 'flex', justifyContent: 'center' }}>
          <Grid.Column width={5}>
            <h1>
              <FormattedMessage id="dashboard.title" />
            </h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Dashboard
