Ext.application({
  name: 'Lib',
  appFolder: '/static/library/app',
  controllers: ['Genre', 'Author'],

  launch: function() {
    Ext.define('Ext.container.Viewport', {
      layout: 'fit',
      items: [{
            xtype:'authorgrid'
      }]
    });
  }
});

