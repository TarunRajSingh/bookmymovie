/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

export default function(app) {
  // Insert routes below
  app.use('/api/selectdatetheatretimespoints', require('./api/selectdatetheatretimespoint'));
  app.use('/api/movieratingspoints', require('./api/movieratingspoint'));
  app.use('/api/editmoviemappingspoints', require('./api/editmoviemappingspoint'));
  app.use('/api/moviemappingspoints', require('./api/moviemappingspoint'));
  app.use('/api/confirmationspoints', require('./api/confirmationspoint'));
  app.use('/api/paymentspoints', require('./api/paymentspoint'));
  app.use('/api/addtheatrespoints', require('./api/addtheatrespoint'));
  app.use('/api/seatbookingspoints', require('./api/seatbookingspoint'));
  app.use('/api/moviespoints', require('./api/moviespoint'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth').default);

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}
