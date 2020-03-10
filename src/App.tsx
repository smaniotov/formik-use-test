import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from 'components'
import { RouteEnum } from 'enums'
import { IntlProvider } from 'react-intl'
import { useIntlProvider } from 'hooks'

const HomeAsync = lazy(() => import('views/Home'))
const LoginAsync = lazy(() => import('views/Login'))

function App() {
  const { messages, locale } = useIntlProvider()

  return (
    <>
      <IntlProvider locale={locale} messages={messages}>
        <BrowserRouter>
          <Layout>
            <Suspense fallback={null}>
              <Switch>
                <Route path={RouteEnum.Login} component={LoginAsync} />
                <Route path={RouteEnum.Home} component={HomeAsync} />
              </Switch>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </IntlProvider>
    </>
  )
}

export default App
