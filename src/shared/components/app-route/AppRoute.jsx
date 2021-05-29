/* eslint-disable react/jsx-props-no-spreading */
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Layout from '../layout';

const AppRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

AppRoute.propTypes = {
  component: PropTypes.any,
};

export default AppRoute;
