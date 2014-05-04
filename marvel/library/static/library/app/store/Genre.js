Ext.define('Lib.store.Genre', {
  extend: 'Ext.data.Store',
  requires: ['Lib.model.Genre'],
  model: 'Lib.model.Genre',
  autoLoad: true
});