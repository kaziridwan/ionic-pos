// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  // .state('app.home', {
  //   url: '/home',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/home.html',
  //       controller: 'HomeCtrl'
  //     }
  //   }
  // });
  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
    .state('app.home.main', {
      url: "/main",
      views: {
        'home-tab': {
          templateUrl: "views/home/main.html",
          controller: 'HomeCtrl'
        }
      }
    })
    .state('app.home.sell', {
      url: "/sell/new",
      views: {
        'sell-tab': {
          templateUrl: "views/sell/new.html",
          controller: 'SellCtrl'
        }
      }
    })
  //resources
  //client
  .state('app.clients', {
    url: "/clients",
    views: {
      'menuContent': {
        templateUrl: 'views/clients/index.html',
        controller: 'ClientCtrl'
      }
    }
  })
  .state('app.vendors', {
    url: "/vendors",
    views: {
      'menuContent': {
        templateUrl: 'views/vendors/index.html',
        controller: 'VendorCtrl'
      }
    }
  })
  .state('app.purchases', {
    url: "/purchases",
    views: {
      'menuContent': {
        templateUrl: 'views/purchases/index.html',
        controller: 'PurchaseCtrl'
      }
    }
  })
  .state('app.sells', {
    url: "/sells",
    views: {
      'menuContent': {
        templateUrl: 'views/sells/index.html',
        controller: 'SellCtrl'
      }
    }
  })
  .state('app.products', {
    url: "/products",
    views: {
      'menuContent': {
        templateUrl: 'views/products/index.html',
        controller: 'ProductCtrl'
      }
    }
  })

    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home/main');
});
