'use strict';

(function(){

class ConfirmationComponent {

  constructor($http,$scope,socket) {
    this.message = 'Hello';
    this.$http=$http;
    this.$scope=$scope;
    this.socket = socket;
    this.BookingDetails=[];
    $(document).ready(function () {
      console.log("valufe from confirmation"+sessionStorage.getItem("MoviePoster"));
      console.log("valufe from confirmation"+sessionStorage.getItem("MovieName"));
      console.log("valufe from confirmation"+sessionStorage.getItem("SeatNumber"));
      console.log("valufe from confirmation"+sessionStorage.getItem("CityName"));
      console.log("valufe from confirmation"+sessionStorage.getItem("Theatre"));
      console.log("valufe from confirmation"+sessionStorage.getItem("Time"));
      console.log("valufe from confirmation"+sessionStorage.getItem("Seat[]"));
      console.log("valufe from confirmation"+sessionStorage.getItem("Price"));
      console.log("valufe from confirmation"+sessionStorage.getItem("Tax"));
      console.log("valufe from confirmation"+sessionStorage.getItem("Total"));


      $('#MoviePoster').attr('src',sessionStorage.getItem("MoviePoster"));
      document.getElementById("MovieName").innerHTML = sessionStorage.getItem("MovieName");
      // document.getElementById("SeatNumber").innerHTML = sessionStorage.getItem("SeatNumber");
      document.getElementById("CityName").innerHTML = sessionStorage.getItem("CityName");
      document.getElementById("Theatre").innerHTML = sessionStorage.getItem("Theatre");
      document.getElementById("Seats").innerHTML = sessionStorage.getItem("Seat[]");
      var ddmmyy=sessionStorage.getItem("Date");
      console.log("896321478521486214786521478652147852147850000");
      console.log(ddmmyy);;
      var mmm=new Date(ddmmyy);
      var printddmmyy="";
      printddmmyy=mmm.getDate();
      printddmmyy+=" /0"+mmm.getMonth();
      printddmmyy+=" /"+mmm.getFullYear();
      console.log("new datessssssssssssssssss "+printddmmyy);
      document.getElementById("Date").innerHTML = printddmmyy;
      document.getElementById("Time").innerHTML = sessionStorage.getItem("Time");
      var x=sessionStorage.getItem("Total");
      // document.getElementById("Price").innerHTML = sessionStorage.getItem("Price");
      // document.getElementById("Tax").innerHTML = sessionStorage.getItem("Tax");
    });
  }

  $onInit() {
      this.$http.get('/api/paymentspoints')
        .then(response => {
          this.BookingDetails = response.data;
          console.log(this.BookingDetails);
          this.socket.syncUpdates('moviespoint', this.BookingDetails);

          for (var i = 0; i < this.BookingDetails.length; i++) {
            console.log("----------------------");
            console.log(this.BookingDetails[i].MovieName);
            console.log(this.BookingDetails[i].CityName);
            console.log(this.BookingDetails[i].Theatre);
            console.log(this.BookingDetails[i].MovieDate);
            console.log(this.BookingDetails[i].Time);
            if((this.BookingDetails[i].MovieName==sessionStorage.getItem("MovieName"))&&(this.BookingDetails[i].CityName==sessionStorage.getItem("CityName"))&&(this.BookingDetails[i].Theatre==sessionStorage.getItem("Theatre"))&&(this.BookingDetails[i].MovieDate==sessionStorage.getItem("Date"))&&(this.BookingDetails[i].Time==sessionStorage.getItem("Time")))
            {
              console.log(this.BookingDetails[i]._id);
              document.getElementById("BookingId").innerHTML = this.BookingDetails[i]._id;
            }
          }

        });
  }


}

angular.module('yeomanApp')
  .component('confirmation', {
    templateUrl: 'app/confirmation/confirmation.html',
    controller: ConfirmationComponent,
    controllerAs: 'confirmationCtrl'
  });

})();
