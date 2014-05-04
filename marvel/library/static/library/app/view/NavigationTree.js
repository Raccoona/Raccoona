Ext.define('Lib.view.NavigationTree', {
  extend: 'Ext.tree.Panel',
  alias: 'widget.navtree',
  initComponent: function() {
    var me = this,
      store = Ext.create('Ext.data.TreeStore', {
        fields: [{
          name: 'text'
        }, {
          name: 'leaf'
        }, {
          name: 'tabId'
        }],
        root: {
          text: 'Библиотека',
          expanded: true,
          children: [{
            text: "Жанры",
            leaf: true,
            tabId: 'genres'
          }, {
            text: "Авторы",
            leaf: true,
            tabId: 'authors'
          }]
        }
      });

    Ext.apply(me, {
      store: store
    });

    me.callParent(arguments);
  }
});