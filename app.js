(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products=gems;
  });

  var gems = [
    { name: 'Azurite', price: 2 },
    { name: 'Bloodstone', price: 5 },
    { name: 'Zircon', price: 3.95 }
  ];
})();
