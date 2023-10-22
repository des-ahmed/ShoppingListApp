var app = angular.module('ShoppingApp', []);

app.controller('ToBuyController', function($scope, ItemsService) {
    $scope.items = ItemsService.toBuyItems;
    $scope.purchaseItem = function(index) {
        ItemsService.purchaseItem(index);
    };
});

app.controller('BoughtController', function($scope, ItemsService) {
    $scope.items = ItemsService.boughtItems;
});

app.service('ItemsService', function() {
    var service = this;

    service.toBuyItems = [
        {name: "Item 1"},
        {name: "Item 2"},
        {name: "Item 3"},
        {name: "Item 4"},
        {name: "Item 5"}
    ];

    service.boughtItems = [];

    service.purchaseItem = function(itemIndex) {
        service.boughtItems.push(service.toBuyItems[itemIndex]);
        service.toBuyItems.splice(itemIndex, 1);
    };
});
