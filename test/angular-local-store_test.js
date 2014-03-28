/**
 *
 * Created by saintmac on 25/03/14.
 */

describe('ngLocalStore', function() {
  beforeEach(function() {
    module('ngLocalStore');
  });

  describe('$localStore', function() {
    beforeEach(inject(function($injector) {
      $localStore = $injector.get('$localStore')
    }));

    describe('#put, #get, #remove', function() {
      describe('with a string', function() {
        beforeEach(function() {
          $localStore.put('name', 'martin');
        });

        describe('#put', function() {
          it("should have set the value 'martin' for the key 'name'", function() {
            var name = localStorage.getItem('name');
            should.exist(name);
            name.should.eql('"martin"');
          });
        });

        describe('#get', function() {
          it("should return the value 'martin' for the key 'name'", function() {
            var name = $localStore.get('name');
            should.exist(name);
            name.should.eql('martin');
          });
        });

        describe('#remove', function() {
          beforeEach(function () {
            $localStore.remove('name');
          });

          it("should delete the value for the key 'name'", function() {
            var name = $localStore.get('name');
            should.not.exist(name);
          });
        });
      });

      describe('with an array', function() {
        beforeEach(function() {
          $localStore.put('grades', [5, 10, 20]);
        });

        describe('#put', function() {
          it("should have set the value '[5,10,20]' for the key 'grades'", function() {
            var grades = localStorage.getItem('grades');
            should.exist(grades);
            grades.should.eql('[5,10,20]');
          });
        });

        describe('#get', function() {
          it("should return the value '[5,10,20]' for the key 'grades'", function() {
            var grades = $localStore.get('grades');
            should.exist(grades);
            grades.should.eql([5,10,20]);
          });
        });

        describe('#remove', function() {
          beforeEach(function () {
            $localStore.remove('grades');
          });

          it("should delete the value for the key 'grades'", function() {
            var grades = $localStore.get('grades');
            should.not.exist(grades)
          });
        });
      });

      describe('with an object', function() {
        beforeEach(function() {
          $localStore.put('car', {brand: 'tesla', wheels: 4});
        });

        describe('#put', function() {
          it("should have set the value {brand:'tesla',wheels:4} for the key 'car'", function() {
            var car = localStorage.getItem('car');
            should.exist(car);
            car.should.eql('{"brand":"tesla","wheels":4}');
          });
        });

        describe('#get', function() {
          it("should return the value {brand:'tesla',wheels:4} for the key 'car'", function() {
            var car = $localStore.get('car');
            should.exist(car);
            car.should.eql({brand: "tesla", wheels: 4});
          });
        });

        describe('#remove', function() {
          beforeEach(function () {
            $localStore.remove('car');
          });

          it("should delete the value for the key 'car'", function() {
            var car = $localStore.get('car');
            should.not.exist(car)
          });
        });
      });
    });

    describe('#clear', function() {
      beforeEach(function() {
        $localStore.put('name', 'martin');
        $localStore.put('grades', [5, 10, 20]);
        $localStore.put('car', {brand: 'tesla', wheels: 4});

        $localStore.clear()
      });

      describe('for items set through $localStore', function() {
        describe('for a string', function(){
          describe('retrieved via $localStore', function() {
            it('should have removed the key', function() {
              var name = $localStore.get('name');
              should.not.exist(name);
            });
          });

          describe('retrieved via localStorage', function() {
            it('should have removed the key', function() {
              var name = localStorage.getItem('name');
              should.not.exist(name);
            });
          });
        });

        describe('for an array', function(){
          describe('retrieved via $localStore', function() {
            it('should have removed the key', function() {
              var name = $localStore.get('name');
              should.not.exist(name);
            });
          });

          describe('retrieved via localStorage', function() {
            it('should have removed the key', function() {
              var name = localStorage.getItem('name');
              should.not.exist(name);
            });
          });
        });

        describe('for an object', function(){
          describe('retrieved via $localStore', function() {
            it('should have removed the key', function() {
              var name = $localStore.get('name');
              should.not.exist(name);
            });
          });

          describe('retrieved via localStorage', function() {
            it('should have removed the key', function() {
              var name = localStorage.getItem('name');
              should.not.exist(name);
            });
          });
        });
      });

    });
  });
});
