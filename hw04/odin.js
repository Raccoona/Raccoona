/**
 * Odin - библиотека, добавляющая в javascript ООП в схожем с ООП-языками виде.
 * Позволяет определять классы, добавлять поля, методы (экземпляра и статические),
 * наследовать один класс от другого, создавать экземпляры класса.
 */

/**
 * @method Odin.def
 * Объявление класса.
 * @example
 *      // Объявление класса
 *      Odin.def('MyClass', {
 *			// Конструктор класса
 *			constructor: function(cfg){
 *				this.name = cfg.name;
 *			},
 *
 *          staticMethods: {
 *              someStaticMethod: function(){
 *
 *              }
 *          },
 *
 *          staticFields: {
 *              frenchGreeting: 'Bonjour',
 *              englishGreeting: 'Hello'
 *          },
 *
 *          fields: {
 *              name: 'MyClassName'
 *          },
 *
 *          methods: {
 *              greeting: function(){
 *                  console.log(MyClass.frenchGreeting + ', ' + this.name);
 *
 * 					// вызов переопределенного метода из родительского класса
 *					this.greeting.callSuper();
 *              }
 *          }
 *      });
 *
 *      var myClass = Odin.create('MyClass');
 *      myClass.greeting(); // В консоли должно быть напечатано 'Bonjour, MyClass'
 *
 * @param {String} className Имя класса
 * @param {Object} config Объект, содержащий конфигурацию объявляемого класса.
 */

function Odin() {}

Odin.define = function(className, config) {
    frame[config] = function() {
        for (var i in className.fields) {
            this[i] = className.fields[i];
        }

        for (var i in className.methods) {
            this[i] = className.methods[i];
        }
    }

    for (var i in className.staticFields) {
        frame[config][i] = className.staticFields[i];
    }

    for (var i in className.staticMethods) {
        frame[config][i] = className.staticMethods[i];
    }
}

/**
 * @method Odin.create
 * Создание экземпляра класса.
 * @param {String} className Имя класса
 * @params {Object} config Объект, содержащий конфигурацию создаваемого экземпляра.
 * При создании объекта будет передан в конструктор класса.
 * @example
 *     Odin.create('MyClass', {name: 'Odin'});
 */

Odin.create = function(newClass, config) {
    var newObject = new frame[config];

    for (var i in newClass) {
        newObject[i] = newClass[i];
    }

    return newObject;
}