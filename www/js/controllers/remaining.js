angular.module('starter.controllers')
  // putting all controllers here, untill i refactor it to a design pattern
  //clients
  .controller('ClientCtrl', function($scope,$ionicModal,$localstorage) {
    // alert('something')
    $scope.clients = [{
      "id": 1,
      "name": "Abul Mia",
      "phone": "0171324242"
    }]
    $scope.currentClient = null;
    $scope.currentIndex = null;


    // create modal
    $ionicModal.fromTemplateUrl('views/clients/modals/create.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.createModal = modal;
    });
    $scope.create = function() {
      $scope.createModal.show();
    };
    $scope.closeModal = function() {
      $scope.createModal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.createModal.remove();
    });



    //edit modal
    $ionicModal.fromTemplateUrl('views/clients/modals/edit.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.updateModal = modal;
    });
    $scope.clientUpdateForm = function(client, index) {
    	$scope.currentClient = client;
    	$scope.currentIndex = index;
      	$scope.updateModal.show();
    };
    $scope.closeEditModal = function() {
      $scope.updateModal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.updateModal.remove();
    });



    //view modal
    $ionicModal.fromTemplateUrl('views/clients/modals/view.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.viewModal = modal;
    });
    $scope.viewClient = function(client, index) {
    	$scope.currentClient = client;
    	$scope.currentIndex = index;
      	$scope.viewModal.show();
    };
    $scope.closeViewModal = function() {
      $scope.viewModal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.viewModal.remove();
    });



    //helpers
    $scope.lastIndex = function (){
    	if($scope.clients.length > 0 ) {
    		return $scope.clients[$scope.clients.length-1].id
    	} else{
    		return 0
    	}
    }
    $scope.updateStorage = function(){
    	$localstorage.setObj('clients',$scope.clients)
    }




    //CRUD
    $scope.addClient = function (clientInfo) {
    	clientInfo.id = $scope.lastIndex() + 1
    	newClient = {}
    	newClient.id = clientInfo.id
    	newClient.name = clientInfo.name
    	newClient.phone = clientInfo.phone
    	$scope.clients.push(newClient)

    	$scope.updateStorage()
    	$scope.closeModal()

    }

    $scope.updateClient = function(){
    	$scope.clients[$scope.currentIndex].name = $scope.currentClient.name
    	$scope.clients[$scope.currentIndex].phone = $scope.currentClient.phone
    	
    	$scope.updateStorage()
    	$scope.closeEditModal()
    }

    $scope.deleteClient = function(index){
    	if (index > -1) {
		    $scope.clients.splice(index, 1);
    		$scope.updateStorage()
		}
    }



 })


.controller('VendorCtrl', function($scope,$ionicModal,$localstorage) {
    // alert('something')
    $scope.clients = [{
      "id": 1,
      "name": "Md. Kashem",
      "phone": "0171324242"
    }]
    $scope.currentClient = null;
    $scope.currentIndex = null;


    // create modal
    $ionicModal.fromTemplateUrl('views/vendors/modals/create.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.createModal = modal;
    });
    $scope.create = function() {
      $scope.createModal.show();
    };
    $scope.closeModal = function() {
      $scope.createModal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.createModal.remove();
    });



    //edit modal
    $ionicModal.fromTemplateUrl('views/vendors/modals/edit.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.updateModal = modal;
    });
    $scope.clientUpdateForm = function(client, index) {
    	$scope.currentClient = client;
    	$scope.currentIndex = index;
      	$scope.updateModal.show();
    };
    $scope.closeEditModal = function() {
      $scope.updateModal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.updateModal.remove();
    });



    //view modal
    $ionicModal.fromTemplateUrl('views/vendors/modals/view.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.viewModal = modal;
    });
    $scope.viewClient = function(client, index) {
    	$scope.currentClient = client;
    	$scope.currentIndex = index;
      	$scope.viewModal.show();
    };
    $scope.closeViewModal = function() {
      $scope.viewModal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.viewModal.remove();
    });



    //helpers
    $scope.lastIndex = function (){
    	if($scope.clients.length > 0 ) {
    		return $scope.clients[$scope.clients.length-1].id
    	} else{
    		return 0
    	}
    }
    $scope.updateStorage = function(){
    	$localstorage.setObj('vendors',$scope.clients)
    }




    //CRUD
    $scope.addClient = function (clientInfo) {
    	clientInfo.id = $scope.lastIndex() + 1
    	newClient = {}
    	newClient.id = clientInfo.id
    	newClient.name = clientInfo.name
    	newClient.phone = clientInfo.phone
    	$scope.clients.push(newClient)

    	$scope.updateStorage()
    	$scope.closeModal()

    }

    $scope.updateClient = function(){
    	$scope.clients[$scope.currentIndex].name = $scope.currentClient.name
    	$scope.clients[$scope.currentIndex].phone = $scope.currentClient.phone
    	
    	$scope.updateStorage()
    	$scope.closeEditModal()
    }

    $scope.deleteClient = function(index){
    	if (index > -1) {
		    $scope.clients.splice(index, 1);
    		$scope.updateStorage()
		}
    }



})


.controller('PurchaseCtrl', function($scope,$ionicModal,$localstorage) {
    // alert('something')
    $scope.clients = [{
      "id": 1,
      "name": "Md. Kashem",
      "vendor_id": 0, //index
      "vendor": {"name":"Md. Kashem", "phone":"0171"},
      "date": "12/14/2015, 3:15:00 PM",
      "products":[
        {"id":3, "name":"green tea", "cp":3,"sp":5},
        {"id":3, "name":"green tea", "cp":3,"sp":5},
        {"id":3, "name":"green tea", "cp":3,"sp":5}
      ],
      "total": 50,
      "paid":20,
      "due":30
    }]
    $scope.vendors = $localstorage.getObj('vendors')
    $scope.products = $localstorage.getObj('products')


    $scope.currentClient = null;
    $scope.newClient = {vendor:null,total:null,paid:null,due:null,name:null}; 
    $scope.currentIndex = null;
    $scope.purchaseItems = [];
    $scope.total = 0;

    // create modal
    $ionicModal.fromTemplateUrl('views/purchases/modals/create.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.createModal = modal;
    });
    $scope.create = function() {
      $scope.createModal.show();
    };
    $scope.closeModal = function() {
      $scope.createModal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.createModal.remove();
    });



    //edit modal
    $ionicModal.fromTemplateUrl('views/purchases/modals/edit.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.updateModal = modal;
    });
    $scope.clientUpdateForm = function(client, index) {
      $scope.currentClient = client;
      $scope.currentIndex = index;
        $scope.updateModal.show();
    };
    $scope.closeEditModal = function() {
      $scope.updateModal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.updateModal.remove();
    });



    //view modal
    $ionicModal.fromTemplateUrl('views/purchases/modals/view.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.viewModal = modal;
    });
    $scope.viewClient = function(client, index) {
      $scope.currentClient = client;
      $scope.currentIndex = index;
        $scope.viewModal.show();
    };
    $scope.closeViewModal = function() {
      $scope.viewModal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.viewModal.remove();
    });



    //helpers
    $scope.lastIndex = function (){
      if($scope.clients.length > 0 ) {
        return $scope.clients[$scope.clients.length-1].id
      } else{
        return 0
      }
    }
    $scope.updateStorage = function(){
      $localstorage.setObj('vendors',$scope.clients)
    }

    $scope.addProduct = function(){
      $scope.purchaseItems.push({})
    }
    $scope.calculateTotal = function(){
      console.log('calc')
      $scope.total = 0
      $scope.purchaseItems.forEach(function(item){
        $scope.total = $scope.total + parseInt(item.cp)
      })
      $scope.newClient.total = $scope.total
      // alert('total is : '+$scope.total)
    }
    $scope.calculateDue = function(){
      $scope.newClient.due = $scope.newClient.total - $scope.newClient.paid
      // alert('total is : '+$scope.total)
    }
    $scope.deleteProduct = function(index){
      if (index > -1) {
        $scope.purchaseItems.splice(index, 1);

        $scope.calculateTotal()
        $scope.calculateDue()
        $scope.updateStorage()
      }
    }
    $scope.test = function(){
      alert(JSON.stringify($scope.newClient))
      console.log(JSON.stringify($scope.newClient))
    }




    //CRUD
    $scope.addPurchase = function () {
      $scope.newClient.id = $scope.lastIndex() + 1
      $scope.newClient.name = $scope.newClient.vendor
      $scope.newClient.date = new Date().toLocaleString()
      $scope.newClient.products = $scope.purchaseItems

      newClient = angular.copy($scope.newClient)

      $scope.clients.push(newClient)

      $scope.updateStorage()
      $scope.closeModal()

    }

    $scope.updateClient = function(){
      $scope.clients[$scope.currentIndex].name = $scope.currentClient.name
      $scope.clients[$scope.currentIndex].phone = $scope.currentClient.phone
      
      $scope.updateStorage()
      $scope.closeEditModal()
    }

    $scope.deleteClient = function(index){
      if (index > -1) {
        $scope.clients.splice(index, 1);
        $scope.updateStorage()
      }
    }



})


.controller('SellCtrl', function($scope,$ionicModal,$localstorage) {
    // alert('something')
    $scope.clients = [{
      "id": 1,
      "name": "Md. Kashem",
      "vendor_id": 0, //index
      "vendor": {"name":"Md. Kashem", "phone":"0171"},
      "date": "12/14/2015, 3:15:00 PM",
      "products":[
        {"id":3, "name":"green tea", "cp":3,"sp":5},
        {"id":3, "name":"green tea", "cp":3,"sp":5},
        {"id":3, "name":"green tea", "cp":3,"sp":5}
      ],
      "total": 50,
      "paid":20,
      "due":30
    }]
    $scope.vendors = $localstorage.getObj('vendors')
    $scope.products = $localstorage.getObj('products')
    $scope.currentClient = null;
    $scope.currentIndex = null;

    // create modal
    $ionicModal.fromTemplateUrl('views/purchases/modals/create.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.createModal = modal;
    });
    $scope.create = function() {
      $scope.createModal.show();
    };
    $scope.closeModal = function() {
      $scope.createModal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.createModal.remove();
    });



    //edit modal
    $ionicModal.fromTemplateUrl('views/purchases/modals/edit.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.updateModal = modal;
    });
    $scope.clientUpdateForm = function(client, index) {
      $scope.currentClient = client;
      $scope.currentIndex = index;
        $scope.updateModal.show();
    };
    $scope.closeEditModal = function() {
      $scope.updateModal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.updateModal.remove();
    });



    //view modal
    $ionicModal.fromTemplateUrl('views/purchases/modals/view.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.viewModal = modal;
    });
    $scope.viewClient = function(client, index) {
      $scope.currentClient = client;
      $scope.currentIndex = index;
        $scope.viewModal.show();
    };
    $scope.closeViewModal = function() {
      $scope.viewModal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.viewModal.remove();
    });



    //helpers
    $scope.lastIndex = function (){
      if($scope.clients.length > 0 ) {
        return $scope.clients[$scope.clients.length-1].id
      } else{
        return 0
      }
    }
    $scope.updateStorage = function(){
      $localstorage.setObj('vendors',$scope.clients)
    }
    $scope.updateStorage();//initiating



    //CRUD
    $scope.addClient = function (clientInfo) {
      clientInfo.id = $scope.lastIndex() + 1
      newClient = {}
      newClient.id = clientInfo.id
      newClient.name = clientInfo.name
      newClient.phone = clientInfo.phone
      $scope.clients.push(newClient)

      $scope.updateStorage()
      $scope.closeModal()

    }

    $scope.updateClient = function(){
      $scope.clients[$scope.currentIndex].name = $scope.currentClient.name
      $scope.clients[$scope.currentIndex].phone = $scope.currentClient.phone
      
      $scope.updateStorage()
      $scope.closeEditModal()
    }

    $scope.deleteClient = function(index){
      if (index > -1) {
        $scope.clients.splice(index, 1);
        $scope.updateStorage()
    }
    }



})


.controller('ProductCtrl', function($scope,$ionicModal,$localstorage) {
    // alert('something')
    $scope.clients = [
        {"id":1, "name":"green tea", "cp":3, "sp":5, "qty":30 },
        {"id":2, "name":"earl grey", "cp":20, "sp":30, "qty":3 },
        {"id":3, "name":"coffee", "cp":15, "sp":20, "qty":25 }
      ]
    $scope.products = $localstorage.getObj('products')
    $scope.currentClient = null;
    $scope.currentIndex = null;


    // create modal
    $ionicModal.fromTemplateUrl('views/products/modals/create.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.createModal = modal;
    });
    $scope.create = function() {
      $scope.createModal.show();
    };
    $scope.closeModal = function() {
      $scope.createModal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.createModal.remove();
    });



    //edit modal
    $ionicModal.fromTemplateUrl('views/products/modals/edit.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.updateModal = modal;
    });
    $scope.clientUpdateForm = function(client, index) {
      $scope.currentClient = client;
      $scope.currentIndex = index;
        $scope.updateModal.show();
    };
    $scope.closeEditModal = function() {
      $scope.updateModal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.updateModal.remove();
    });



    //view modal
    $ionicModal.fromTemplateUrl('views/products/modals/view.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.viewModal = modal;
    });
    $scope.viewClient = function(client, index) {
      $scope.currentClient = client;
      $scope.currentIndex = index;
        $scope.viewModal.show();
    };
    $scope.closeViewModal = function() {
      $scope.viewModal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.viewModal.remove();
    });



    //helpers
    $scope.lastIndex = function (){
      if($scope.clients.length > 0 ) {
        return $scope.clients[$scope.clients.length-1].id
      } else{
        return 0
      }
    }
    $scope.updateStorage = function(){
      $localstorage.setObj('products',$scope.clients)
    }
    $scope.updateStorage();//initiating




    //CRUD
    $scope.addClient = function (clientInfo) {
      clientInfo.id = $scope.lastIndex() + 1
      newClient = {}
      newClient.id = clientInfo.id
      newClient.name = clientInfo.name
      newClient.qty = clientInfo.qty
      newClient.cp = clientInfo.cp
      newClient.sp = clientInfo.sp
      $scope.clients.push(newClient)

      $scope.updateStorage()
      $scope.closeModal()

    }

    $scope.updateClient = function(){
      $scope.clients[$scope.currentIndex].name = $scope.currentClient.name
      $scope.clients[$scope.currentIndex].phone = $scope.currentClient.phone
      $scope.clients[$scope.currentIndex].qty = $scope.currentClient.qty
      $scope.clients[$scope.currentIndex].cp = $scope.currentClient.cp
      $scope.clients[$scope.currentIndex].sp = $scope.currentClient.sp
      
      $scope.updateStorage()
      $scope.closeEditModal()
    }

    $scope.deleteClient = function(index){
      if (index > -1) {
        $scope.clients.splice(index, 1);
        $scope.updateStorage()
    }
    }



})