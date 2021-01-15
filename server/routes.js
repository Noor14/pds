/**
 * Main application routes
 */

'use strict';
const appRoutes = (app) => {
  // Insert routes below

  app.get('/', (req, res)=>{
      res.send('Server is running')
  })
  app.use('/api/companies', require('./routes/api/companies/companies.routes'));
  // app.use('/api/products', require('./api/products/products.routes'));
  // app.use('/api/areas', require('./api/areas/areas.routes'));
  // app.use('/api/stores', require('./api/stores/stores.routes'));
  // app.use('/api/orders', require('./api/orders/orders.routes'));
  // app.use('/api/doctors', require('./api/doctors/doctors.routes'));
  // app.use('/api/contracts', require('./api/contracts/contracts.routes'));
}
exports.default = appRoutes;