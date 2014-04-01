Ext.define('MyApp.Person', {
  name: 'Unknown',
  constructor: function(cfg) {
    this.name = cfg.name;
  },
  introduce: function() {
    console.log('My name is ' + this.name);
  }
});