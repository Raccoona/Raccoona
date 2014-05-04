Ext.define('MyApp.view.author.editwindow', {
  extend: 'Ext.window.Window',
  requires: [
    'Ext.button.Button',
    'Ext.form.field.Text'
  ],
  alias: 'widget.authoreditwin',
  width: 300,
  modal: true,
  title: 'Добавление автора',
  closeAction: 'destroy',
  items: [{
    xtype: 'form',
    layout: 'form',
    bodyPadding: '5 5 5',
    items: [{
      xtype: 'textfield',
      fieldLabel: 'Имя',
      afterLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>',
      name: 'first_name',
      msgTarget: 'side',
      labelWidth: 75,
      allowBlank: false
    }, {
      xtype: 'textfield',
      fieldLabel: 'Фамилия',
      afterLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>',
      name: 'middle_name',
      msgTarget: 'side',
      labelWidth: 75,
      allowBlank: false
    }, {
      xtype: 'textfield',
      fieldLabel: 'Отчество',
      afterLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>',
      name: 'last_name',
      msgTarget: 'side',
      labelWidth: 75,
      allowBlank: false
    }
    ],
    buttons: [{
      text: 'Сохранить',
      action: 'save'
    }]
  }]
});
