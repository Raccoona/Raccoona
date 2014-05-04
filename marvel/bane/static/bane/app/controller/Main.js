Ext.define('MyApp.controller.Main', {
  extend: 'Ext.app.Controller',
  views: ['navigate', 'main'],

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
        'itemclick': me.onNavigateItemClick
      }
    });

    me.callParent(arguments);
  },

  onNavigateItemClick: function(tree, record) {
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
