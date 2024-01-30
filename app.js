(function () {
'use strict';

angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
     var toBuy = this;

     toBuy.items = ShoppingListCheckOffService.buyItems();

     toBuy.buy = function(index) {
        ShoppingListCheckOffService.checkItems(index);
     }


    //  toBuy.buyItem = function () {
    //     ShoppingListCheckOffService.buyItem(toBuy.itemName, toBuy.itemQuantity);
    //  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.boughtItems();
}

function ShoppingListCheckOffService() {
    var service = this;
    var boughtItems = [];
    var buyItems = [
        {
            name: "Cookies",
            quantity: 10
        },
        {
            name: "Lindor White Chocolate",
            quantity: 1
        },
        {
            name: "Hershey's",
            quantity: 5
        },
        {
            name: "Lay's Potato Chips (Sea Salt)",
            quantity: 1
        },
        {
            name: "Bottled Water",
            quantity: 30
        }
    ];

    service.checkItems = function (itemIndex) {
        // boughtItems.add(buyItems);
        // buyItems.remove(buyThing);
        boughtItems.push(buyItems[itemIndex]);
        buyItems.splice(itemIndex, 1);
    }
    service.buyItems = function () {
        return buyItems;
    }

    service.boughtItems = function () {
        return boughtItems;
    }
    // service.listItems = function () {
    //     return listedItems;
    // }
}
})();