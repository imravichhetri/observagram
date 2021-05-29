import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { hot } from 'react-hot-loader/root';

// import Header  from '@observagram-shared/components/main-header'
// import UserProfile  from '@observagram-modules/user-profile'

/* Context */
import AppStateProvider from '@observagram-shared/contexts/application-context';
import AppRoute from '@observagram-shared/components/app-route';


/*Modules*/
const UserProfile = React.lazy(() =>
  import(/* webpackPrefetch: true */ '@observagram-modules/user-profile')
);
const Header = React.lazy(() =>
  import(/* webpackPrefetch: true */ '@observagram-shared/components/main-header')
);
const App = props => {
  return (
    <React.Suspense fallback={'Loading...'}>
      <AppStateProvider>
          <ErrorBoundary FallbackComponent={"Error occured"}>
            <Header/>
            <BrowserRouter>
              <Switch>
                <AppRoute path="/" exact component={UserProfile} />
              </Switch>
            </BrowserRouter>
          </ErrorBoundary>
      </AppStateProvider>
    </React.Suspense>
  )
}

export default hot(App);
