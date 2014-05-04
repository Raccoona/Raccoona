Ext.define('MyApp.store.Author', {
  extend: 'Ext.data.Store',
  requires: ['MyApp.model.Author'],
  model: 'MyApp.model.Author',
  autoLoad: true
});
