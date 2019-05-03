/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { MuiThemeProvider } from '@material-ui/core/styles';

// Import theme
import theme from 'theme';

import indexRoutes from "routes/index.jsx";

import "public/chartist.min.css";
import "public/chartist.min.js";
// Fonts and icons
import "public/fa.all.min.css";
import "public/gfonts.css.css";
import "public/gfonts.icon.css";

import "assets/scss/material-dashboard-pro-react.css";

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route exact={prop.exact ? true : false} path={prop.path} component={prop.component} key={key} />;
          })}
        </Switch>
      </MuiThemeProvider>
      <GlobalStyle />
    </div>
  );
}
