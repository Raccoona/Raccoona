Ext.define('Lib.controller.Genre', {
  extend: 'Ext.app.Controller',
  models: ['Genre'],
  stores: ['Genre'],
  views: ['genre.EditWindow', 'Main'],
  refs: [{
    selector: 'mainview #genres',
    ref: 'genresGrid'
  }],

  init: function() {
    var me = this;

    me.control({
      '#genres button[action=add]': {
        click: me.onAddGenreBtnClick
      },
      'genreeditwin button[action=save]': {
        click: me.onSaveGenreBtnClick
      }
    });

    me.callParent(arguments);
  },

  onAddGenreBtnClick: function(btn) {
    Ext.create('Lib.view.genre.EditWindow').show();
  },

  onSaveGenreBtnClick: function(btn) {
    var me = this,
      form = btn.up('form'),
      record;
    if (form.isValid()) {
      record = Ext.create('Lib.model.Genre', form.getValues());
      record.save({
        callback: function(records, operation, success) {
          if (success) {
            me.getGenresGrid().getStore().load();
            btn.up('window').close();
          } else {
            Ext.MessageBox.alert('Ошибка!', 'Произошла ошибка при сохранении.');
          }
        }
      });
    }
  }
});