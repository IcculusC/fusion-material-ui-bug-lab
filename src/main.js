// @flow
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import MuiThemeProvider, { MuiThemeProviderToken, MuiThemeToken } from '../fusion-plugin-material-ui';
import { createMuiTheme } from '@material-ui/core/styles';

import root from './root.js';

export default () => {
  const app = new App(root);
  const theme = createMuiTheme();
  // app.register(MuiThemeToken, theme);
  app.register(MuiThemeProviderToken, MuiThemeProvider);
  app.register(Styletron);
  app.register(Router);
  return app;
};
