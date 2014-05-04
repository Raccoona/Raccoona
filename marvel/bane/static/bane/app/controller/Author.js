Ext.define('MyApp.controller.Author', {
  extend: 'Ext.app.Controller',
  models: ['Author'],
  stores: ['Author'],
  views: ['author.editwindow', 'main'],
  refs: [{
    selector: 'mainview #authors',
    ref: 'authorsGrid'
  }],

  init: function() {
    var me = this;

    me.control({
      '#authors button[action=add]': {
        click: me.onAddAuthorBtnClick
      },
      'authoreditwin button[action=save]': {
        click: me.onSaveAuthorBtnClick
      }
    });

    me.callParent(arguments);
  },

  onAddAuthorBtnClick: function(btn) {
    Ext.create('MyApp.view.author.editwindow').show();
  },

  onSaveAuthorBtnClick: function(btn) {
    var me = this,
      form = btn.up('form'),
      record;
    if (form.isValid()) {
      record = Ext.create('MyApp.model.Author', form.getValues());
      record.save({
        callback: function(records, operation, success) {
          if (success) {
            me.getAuthorsGrid().getStore().load();
            btn.up('window').close();
          } else {
            Ext.MessageBox.alert('Ошибка!', 'Произошла ошибка при сохранении.');
          }
        }
      });
    }
  }
});
