Ext.define('Lib.views.Author', {

            alias: 'widget.authorgrid',
            extend: 'Ext.grid.Panel',
            layout: 'fit',
            columns: [
             { text:'First name', dataIndex: 'first_name' },
             { text: 'Middle name', dataIndex:'middle_name' },
             { text: 'Last name',dataIndex:'last_name' }
         ]

        /* button: [
            {value: 'Save', action: submit}
        ]*/
});
