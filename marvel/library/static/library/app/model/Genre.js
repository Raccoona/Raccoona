Ext.define('Lib.model.Genre', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: [{
    name: 'title',
    type: 'string'
  }, {
    name: 'id'
  }],
  proxy: {
    type: 'rest',
    url: '/library/genres/',
    reader: {
      type: 'json',
      root: 'results'
    }
  }
});