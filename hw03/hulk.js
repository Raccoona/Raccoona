/**
 * hulk - библиотека для манипуляции DOMом.
 * Ниже описаны функции, которые должны присутствовать в данной библиотеке.
 * Реализовать hulk таким образом, чтобы можно было вызывать цепочку функций:
 * @example hulk.select('some-selector').addClass('cls').append('div')
 */
var hulk = (function() {
    function Hulk(elements) {
        this.elements = elements;
    }
 
/**
 * @method select
 * Функция, с которой начинается манипуляция dom-объектов.
 * Возвращает hulk-объект, который содержит массив html-элементов, удовлетворяющих переданному селектору.
 * Все дальнейшие манипуляции из цепочки вызовов будут применены к элементам из данной выборки.
 * @param {String} selector css-селектор.
 */
    Hulk.select = function(selector) {
        var h = new Hulk(document.querySelectorAll(selector));
        return h;
    }
/**
 * @method addClass
 * Добавляет классы каждому элементу выборки.
 * @param {String} clsNames Имена классов, разделенных пробелом.
 */
    Hulk.prototype.addClass = function(clsNames) {
        var i;
        for (i = 0; i < this.elements.length; i ++) {
            this.elements[i].className += clsNames;
        }
    }
/**
 * @method append
 * Добавляет дочерний html-элемент каждому элементу выборки.
 * @param {String} Имя тега, добавляемого элемента.
 */
    Hulk.prototype.append = function(tagName) {
        var i, child;
        child = document.createElement(tagName);
        for (i = 0; i < this.elements.length; i ++) {
            this.elements[i].appendChild(child);
        }
    }
/**
 * @method attr Если при вызове передается один аргумент, возвращается значение атрибута,
 * если передается два аргумента, то атрибуту присваивается значение второго аргумента.
 * @param {String} attrName Имя атрибута.
 * @param {Number/String} [value] Значение атрибута.
 */
    Hulk.prototype.attr = function(attrName, value) {
        if (typeof (value) === 'string') {
            var i;
            for (i = 0; i < this.elements.length; i ++) {
                this.elements[i].setAttribute(attrName, value);
            }
        }
        return this.elements[0].getAttribute(attrName);
    }
/**
 * @method children
 * Возвращает всех непосредственных наследников первого элемента из выборки, обернутых в hulk-объект.
 */
    Hulk.prototype.children = function(selector) {
        var h = new Hulk(this.elements[0].children);
        return h;
    }
/**
 * @method css Если при вызове передается один аргумент, возвращается значение css-атрибута,
 * если передается два аргумента, то css-атрибуту присваивается значение второго аргумента.
 * @param {String} cssAttrName Имя css-атрибута.
 * @param {Number/String} value Значение css-атрибута.
 */
    Hulk.prototype.css = function (cssAttrName, value) {
        if (typeof (value) === 'string') {
            var i;
            for (i = 0; i < this.elements.length; i ++) {
                this.elements[i].css[cssAttrName] = value;
            }
        }
        return this.elements[0].css[cssAttrName];
    };
/**
 * @method empty
 * Очищает все внутреннее содержимое элементов из выборки.
 */
    Hulk.prototype.empty = function() {
        var i;
        for (i = 0; i < this.elements.length; i ++) {
            this.elements[i] = null;
        }
    }
/**
 * @method find
 * Производит выборку по дочерним элементам выборки, удовлетворяющим переданному селектору.
 * @param {String} selector css-селектор для выборки.
 */
    Hulk.prototype.find = function(selector) {
		return this.elements[0].querySelectorAll(selector);
    }
/**
 * @method hasClass
 * Проверяет наличие класса для элементов выборки.
 * @param {String} className Имя класса, наличие которого проверяется.
 * @return {Boolean} Возвращает true, если все элементы выборки содержат переданный класс.
 */
    Hulk.prototype.hasClass = function(className) {
        var i, hasClass;
        hasClass = true;
        for (i = 0; i < this.elements.length; i ++) {
            hasClass = (this.elements[i].classList.contains(className)) && hasClass;
        }
        return hasClass;
    }
/**
 * @method html
 * Возвращает html-содержимое первого элемента выборки.
 * @return {HTMLElement} html-содержимое первого элемента из выборки.
 */
    Hulk.prototype.html = function() {
        return this.elements[0].innerHTML;
    }
/**
 * @method on
 * Добавляет подписчика на событие для элементов выборки.
 * @param {String} eventName Имя события, на которое будет производиться подписка.
 * @param {Function} func Функция-подписчик.
 */
    Hulk.prototype.on = function(eventName, func) {
        var i;
        for (i = 0; i < this.elements.length; i ++) {
            this.elements.addEventListener(eventName, func);
        }
    }
/**
 * @method parent
 * Возвращает родительский элемент первого элемента выборки.
 */
    Hulk.prototype.parent = function() {
        return this.elements[0].parentNode;
    }
/**
 * @method remove
 * Удаляет из документа все DOM-элементы выборки.
 */
    Hulk.prototype.remove = function() {
        var i;
        for (i = 0; i < this.elements.length; i ++) {
            this.elements[i].parentNode.removeChild(this.elements[i]);
        }
    }
/**
 * @method removeAttr
 * Удаляет атрибут из элементов выборки.
 * @param {String} attrName Удаляемый атрибут.
 */
    Hulk.prototype.removeAttr = function(attrName) {
        var i;
        for (i = 0; i < this.elements.length; i ++) {
            this.elements[i].removeAttribute(attrName);
        }
    }
/**
 * @method removeClass
 * Удаляет css-классы для элементов выборки.
 * @param {String} clsNames Имена классов, разделенных пробелом.
 */
    Hulk.prototype.removeClass = function(clsNames) {
        var i, j, classes;
        classes = clsNames.split(" ");
        for (i = 0; i < this.elements.length; i ++) {
            for (j = 0; j < classes.length; j ++) {
                this.elements[i].classList.remove(classes[j]);
            }
        }
    }
/**
 * @method toggleClass
 * Добавляет (если классы отсутствуют) и удаляет (если классы присутствуют) у элементов выборки.
 * @param {String} clsNames Имена классов, разделенных пробелом.
 */
    Hulk.prototype.toggleClass = function(clsNames) {
        var i, j, classes;
        classes = clsNames.split(" ");
        for (i = 0; i < this.elements.length; i ++) {
            for (j = 0; j < classes.length; j ++) {
                if (this.elements.classList.contains(classes[j])) {
                    this.elements.classList.remove(classes[j])
                } else {
                    this.elements.classList.add(classes[j]);
                }
            }
        }
    }
/**
 * @method unbind
 * Удаляет подписчика на событие для элементов выборки.
 * @param {String} eventName Имя события, для которого будет производиться удаление подписчика.
 * @param {Function} func Удаляемая функция-подписчик.
 */
    Hulk.prototype.unbind = function(eventName, func) {
        var i;
        for (i = 0; i < this.elements.length; i ++) {
            this.elements.removeEventListener(eventName, func);
        }
    }
/**
 * @method wrap
 * Оборачивает каждый элемент выборки тегом, имя которого передано в качестве первого аргумента.
 * @param {String} tagName Имя тега.
 */
    Hulk.prototype.wrap = function(tagName) {
        var i, e;
        e = document.createElement(tagName);
        for (i = 0; i < this.elements.length; i ++) {
            var temp = this.elements[i].cloneNode(true);
            this.elements[0] = e.cloneNode(false);
            this.elements[0].appendChild(temp);
        }
    }
    return Hulk;
})();