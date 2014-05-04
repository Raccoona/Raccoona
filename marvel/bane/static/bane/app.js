Ext.application({
  name: 'MyApp',
  appFolder: '/static/bane/app',
  controllers: ['Main', 'Author'],
  views: ['main'],
  models: ['Author'],

  launch: function() {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: [{
        xtype: 'mainview'
      }]
    });
  }
});

