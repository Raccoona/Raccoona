Ext.application({
  name: 'MyApp',
  appFolder: '/static/bane/app',

  launch: function() {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: [{
        title: 'Hello Ext',
        html: 'Hello! Welcome to Ext JS.'
      }]
    });
  }
});