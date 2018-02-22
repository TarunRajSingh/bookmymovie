'use strict';

(function(){


  class MovieratingComponent {
    constructor($http, $scope, socket) {
      this.message = 'Hello';
      this.$http = $http;
      this.$scope = $scope;
      this.socket = socket;
      this.movie=[];
    }


    $onInit() {
            this.$http.get('/api/paymentspoints/').then(response => {
              this.movie = response.data;
              console.log(this.movie);
              this.socket.syncUpdates('paymentspoints', this.movie);
            });
    }



  }

angular.module('yeomanApp')
  .component('movierating', {
    templateUrl: 'app/movierating/movierating.html',
    controller: MovieratingComponent,
    controllerAs: 'movieratingCtrl'
  });

})();
