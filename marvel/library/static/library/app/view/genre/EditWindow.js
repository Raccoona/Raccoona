Ext.define('Lib.view.genre.EditWindow', {
  extend: 'Ext.window.Window',
  requires: [
    'Ext.button.Button',
    'Ext.form.field.Text'
  ],
  alias: 'widget.genreeditwin',
  width: 300,
  modal: true,
  title: 'Добавление жанра',
  closeAction: 'destroy',
  items: [{
    xtype: 'form',
    layout: 'form',
    bodyPadding: '5 5 5',
    items: [{
      xtype: 'textfield',
      fieldLabel: 'Название',
      afterLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>',
      name: 'title',
      msgTarget: 'side',
      labelWidth: 75,
      allowBlank: false
    }],
    buttons: [{
      text: 'Сохранить',
      action: 'save'
    }]
  }]
});