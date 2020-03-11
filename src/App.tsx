import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from 'components'
import { RouteEnum } from 'enums'
import { IntlProvider } from 'react-intl'
import { useIntlProvider, ApiContext, useApiProvider } from 'hooks'

const HomeAsync = lazy(() => import('views/Home'))
const LoginAsync = lazy(() => import('views/Login'))
const RegisterAsync = lazy(() => import('views/Register'))
const DashboardAsync = lazy(() => import('views/Dashboard'))

function App() {
  const { messages, locale } = useIntlProvider()
  const api = useApiProvider()

  return (
    <>
      <IntlProvider locale={locale} messages={messages}>
        <ApiContext.Provider value={api}>
          <BrowserRouter>
            <Layout>
              <Suspense fallback={null}>
                <Switch>
                  <Route path={RouteEnum.Login} component={LoginAsync} />
                  <Route path={RouteEnum.Register} component={RegisterAsync} />
                  <Route
                    path={RouteEnum.Dashboard}
                    component={DashboardAsync}
                  />
                  <Route path={RouteEnum.Home} component={HomeAsync} />
                </Switch>
              </Suspense>
            </Layout>
          </BrowserRouter>
        </ApiContext.Provider>
      </IntlProvider>
    </>
  )
}

export default App
