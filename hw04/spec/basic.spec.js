describe('Odin > ', function() {
  it('Класс Odin должен быть объявлен', function() {
    expect(Odin).toBeDefined();
  });
  it('Метод Odin.define должен быть объявлен', function() {
    expect(Odin.define).toBeDefined();
  });
  it('Метод Odin.create должен быть объявлен', function() {
    expect(Odin.create).toBeDefined();
  });
});

describe('Odin in action > ', function() {

  beforeEach(function() {
    Odin.define('BatMobile', {

      constructor: function(cfg) {
        this.owner = cfg.owner;
      },

      staticMethods: {
        getManufacturer: function() {
          return 'Made in China';
        }
      },

      staticFields: {
        copyright: 'Wayne Inc.'
      },

      fields: {
        owner: null,
        currenLocation: 'Waynes house',
        maxSpeed: 300
      },

      methods: {
        goTo: function(location) {
          this.currenLocation = location;
        }
      }
    });
  });

  describe('Odin.define > ', function() {
    it('Класс должен быть объявлен', function() {
      expect(BatMobile).toBeDefined();
    });
    it('Статические поля и методы должны быть доступны через класс', function() {
      expect(BatMobile.getManufacturer).toBeDefined();
      expect(BatMobile.getManufacturer()).toBe('Made in China');
      expect(BatMobile.copyright).toBeDefined();
      expect(BatMobile.copyright).toBe('Wayne Inc.');
    });
    it('Поля и методы экземпляра не должны быть доступны через класс', function() {
      expect(BatMobile.owner).toBeUndefined();
      expect(BatMobile.maxSpeed).toBeUndefined();
      expect(BatMobile.goTo).toBeUndefined();
    });
  });

  describe('Odin.create > ', function() {
    var batMobile;

    beforeEach(function() {
      batMobile = Odin.create('BatMobile', {
        owner: 'Batman'
      });

      spyOn(batMobile, 'goTo');
    });

    it('Создание объекта', function() {
      expect(batMobile).toBeDefined();
    });

    it('Поля, значения которых переданы при создании, должны быть проинициализированы', function() {
      expect(batMobile.owner).toBe('Batman');
    });

    it('Поля и методы экземпляра должны быть доступны через объект', function() {
      expect(batMobile.goTo).toBeDefined();
      expect(batMobile.maxSpeed).toBe(300);
      expect(batMobile.owner).toBe('Batman');
    });

    it('Вызов методов экземпляра', function() {
      var location1 = 'Catwoman house',
        location2 = 'Waynes skyscraper';
      batMobile.goTo(location1);
      batMobile.goTo(location2);
      expect(batMobile.goTo).toHaveBeenCalled();
      expect(batMobile.goTo.calls.length).toEqual(2);
      expect(batMobile.currenLocation).toEqual(location2);
    });
  });
});