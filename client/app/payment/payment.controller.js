'use strict';

(function(){


class PaymentComponent {
  constructor($http,$scope,socket) {
    this.message = 'Hello';
    this.$http=$http;
    this.$scope=$scope;
    this.socket = socket;
    this.NameOnCard=" ";
    // this.MoviePoster:" ";
    // this.MovieName:" ";
    // this.SeatNumber:Number;
    // this.CityName:" ";
    // this.Theatre:" ";
    // this.Time:" ";
    // this.Seat:[];
    // this.Total:Number;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('paymentspoint');
    });


    $(document).ready(function () {
      console.log("valufe from seatbooking"+sessionStorage.getItem("MoviePoster"));
      console.log("valufe from seatbooking"+sessionStorage.getItem("MovieName"));
      console.log("valufe from seatbooking"+sessionStorage.getItem("SeatNumber"));
      console.log("valufe from seatbooking"+sessionStorage.getItem("CityName"));
      console.log("valufe from seatbooking"+sessionStorage.getItem("Theatre"));
      console.log("valufe from seatbooking"+sessionStorage.getItem("Time"));
      console.log("valufe from seatbooking"+sessionStorage.getItem("Seat[]"));
      console.log("valufe from seatbooking"+sessionStorage.getItem("Price"));
      console.log("valufe from seatbooking"+sessionStorage.getItem("Tax"));
      console.log("valufe from seatbooking"+sessionStorage.getItem("Total"));


      this.MoviePoster=sessionStorage.getItem("MoviePoster");
      this.MovieName=sessionStorage.getItem("MovieName");
      this.SeatNumber=sessionStorage.getItem("SeatNumber");
      this.CityName=sessionStorage.getItem("CityName");
      this.Theatre=sessionStorage.getItem("Theatre");
      this.Time=sessionStorage.getItem("Time");
      this.Seat=sessionStorage.getItem("Seat[]");
      this.Total=sessionStorage.getItem("Total");

      // document.getElementById("Date").innerHTML = sessionStorage.getItem("Date");
      var x= sessionStorage.getItem("Date");
      dateofbook = new Date();
      dateofbook.setFullYear(x);
      var dd = dateofbook.getDate();
      var mm = dateofbook.getMonth()+1;

      var yyyy = dateofbook.getFullYear();
      if(dd<10){
          dd='0'+dd;
      }
      if(mm<10){
          mm='0'+mm;
      }
      var dateofbook = dd+'/'+mm+'/'+yyyy;

      document.getElementById("Date").innerHTML = dateofbook;
      $('#Poster').attr('src',sessionStorage.getItem("MoviePoster"));
      document.getElementById("Theatre").innerHTML = sessionStorage.getItem("Theatre");
      document.getElementById("MovieName").innerHTML = sessionStorage.getItem("MovieName");
      document.getElementById("Time").innerHTML = sessionStorage.getItem("Time");
      document.getElementById("seat").innerHTML = sessionStorage.getItem("Seat[]");
      document.getElementById("price").innerHTML = sessionStorage.getItem("Price");
      document.getElementById("tax").innerHTML = sessionStorage.getItem("Tax");
      document.getElementById("total").innerHTML = sessionStorage.getItem("Total");
      var ddmmyy=sessionStorage.getItem("Date");
      console.log("896321478521486214786521478652147852147850000");
      console.log(ddmmyy);;
      var mmm=new Date(ddmmyy);
      var printddmmyy="";
      printddmmyy=mmm.getDate();
      printddmmyy+=" /0"+mmm.getMonth();
      printddmmyy+=" /"+mmm.getFullYear();
      document.getElementById("Date").innerHTML =printddmmyy;


$.getJSON("https://api.ipify.org/?format=json", function(result){
    $("#ipadd").append(result.ip);
  });

  (function() {
    $('input').keyup(function() {

        var empty = false;
        $('input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#register').attr('disabled', 'disabled');
        } else {
            $('#register').removeAttr('disabled');         }
    });
})()


    });

  }


  ProceedToConfirm()
  {
    console.log("123");
    console.log("valufe from seatbooking"+sessionStorage.getItem("SeatNumber"));
    console.log(this.NameOnCard);
    this.$http.post('/api/paymentspoints', {
      MovieName:sessionStorage.getItem('MovieName'),
      Theatre: sessionStorage.getItem('Theatre'),
      CityName: sessionStorage.getItem('CityName'),
      Seat: sessionStorage.getItem('Seat[]'),
      MovieDate: sessionStorage.getItem('Date'),
      Time: sessionStorage.getItem('Time'),
      Total: sessionStorage.getItem('Total'),
      MovieDate:sessionStorage.getItem('Date')
    });
      console.log("done");
    // }
    location.href='/confirmation';

  }
  // Cancel()
  // {
  //   window.alert("Do you want to cancel the session and go back to home page");
  //
  // }
}

angular.module('yeomanApp')
  .component('payment', {
    templateUrl: 'app/payment/payment.html',
    controller: PaymentComponent,
    controllerAs: 'paymentCtrl'
  });

})();
