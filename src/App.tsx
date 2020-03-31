import { Layout } from 'components'
import { RouteEnum } from 'enums'
import { ApiContext, useApiProvider, useIntlProvider } from 'hooks'
import React, { lazy, Suspense } from 'react'
import { IntlProvider } from 'react-intl'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
                  <Route path={RouteEnum.Home} component={LoginAsync} />
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
