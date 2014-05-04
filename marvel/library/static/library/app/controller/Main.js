Ext.define('Lib.controller.Main', {
  extend: 'Ext.app.Controller',
  views: ['NavigationTree', 'Main'],

  refs: [{
    selector: 'mainview',
    ref: 'mainView'
  }, {
    selector: 'mainview tabpanel',
    ref: 'mainTabPanel'
  }],

  init: function() {
    var me = this;

    me.control({
      'navtree': {
        'itemclick': me.onNavigationTreeItemClick
      }
    });

    me.callParent(arguments);
  },

  onNavigationTreeItemClick: function(tree, record) {
    var me = this,
      tabId = record.get('tabId'),
      tabpanel = me.getMainTabPanel(),
      tabToActivate;

    if (tabId) {
      tabToActivate = tabpanel.down('#' + tabId);
      if (tabToActivate) {
        tabpanel.setActiveTab(tabToActivate);
      };
    }
  }
});