Ext.application({
  name: 'Lib',
  appFolder: '/static/library/app',
  controllers: ['Main', 'Genre'],
  views: ['Main'],
  models: ['Genre'],

  launch: function() {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: {
        xtype: 'mainview'
      }
    });
  }
});