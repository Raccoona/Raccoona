Ext.define('MyApp.model.Author', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: [{
    name: 'first_name',
    type: 'string'
  }, {
    name: 'middle_name',
    type: 'string'
  }, {
    name: 'last_name',
    type: 'string'
  }, {
    name: 'id'
  }],
  proxy: {
    type: 'rest',
    url: '/bane/authors/',
    reader: {
      type: 'json',
      root: 'results'
    }
  }
});
