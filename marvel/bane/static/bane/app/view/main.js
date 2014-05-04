Ext.define('MyApp.view.main', {
  extend: 'Ext.container.Container',
  requires: [
    'Ext.grid.Panel',
    'Ext.tab.Panel',
    'Ext.button.Button',
    'MyApp.view.navigate'
  ],
  alias: 'widget.mainview',
  layout: {
    type: 'border',
    align: 'stretch'
  },
  items: [{
    xtype: 'navtree',
    region: 'west',
    width: 300
  }, {
    xtype: 'tabpanel',
    region: 'center',
    items: [{
      title: 'Авторы',
      xtype: 'grid',
      itemId: 'authors',
      store: 'Author',
      columns: [{
        text: 'Имя',
        dataIndex: 'first_name',
        flex: 1
      }, {
        text: 'Фамилия',
        dataIndex: 'middle_name',
        flex: 1
      }, {
        text: 'Отчество',
        dataIndex: 'last_name',
        flex: 1
      }],
      dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
          xtype: 'button',
          action: 'add',
          text: 'Добавить'
        }]
      }]
    },  {
      title: 'Жанры',
      itemId: 'genres'
    }]
  }]
});
