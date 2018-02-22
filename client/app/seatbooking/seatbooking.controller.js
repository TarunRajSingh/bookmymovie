'use strict';

(function(){
var timestring="";
var CountSeatNumber=0;
class SeatbookingComponent {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.$scope=$scope;
    this.paymentdetails=[];
    this.MovieTitle= sessionStorage.getItem('MovieName');
    this.CityName= sessionStorage.getItem('CityName');
    this.TheatreName=sessionStorage.getItem('Theatre');
    this.Date=sessionStorage.getItem('Date');
    this.ShowTime=sessionStorage.getItem('Time');

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('paymentspoint');
    });

    // this.timearray=[];
    this.AllTimings=sessionStorage.getItem("AllTimings");
    var SelectedSeats=[];
    var SeatNumber=0;
    if(sessionStorage.getItem("SeatNumber")!==null)
    {
      SeatNumber=parseInt(sessionStorage.getItem("SeatNumber"));
    }

    console.log(SeatNumber);
    // console.log(this.AllTimings+"------"+this.AllTimings.length);

    $(document).ready(function(){
      var menu1=1;
      var menu2=1;
      var tax=0;
      var price=0;
      var total=0;

console.log("valufe from seatbooking"+sessionStorage.getItem("MoviePoster"));
console.log("valufe from seatbooking"+sessionStorage.getItem("MovieName"));
console.log("valufe from seatbooking"+sessionStorage.getItem("SeatNumber"));
console.log("valufe from seatbooking"+sessionStorage.getItem("CityName"));
console.log("valufe from seatbooking"+sessionStorage.getItem("Theatre"));
console.log("valufe from seatbooking"+sessionStorage.getItem("Time"));

      // timestring=sessionStorage.getItem("AllTimings");
      // var timearray = timestring.split(',');
      // this.timearray=timearray;
      // console.log(this.timearray);

      $('#seatselection').hover(function(){
        $('#seatsoption').css("display","inline-flex");
        $('#seatsoption').show();
      },function(){
        $('#seatsoption').hide();
      });

      $('#seatsoption').hover(function(){
        $('#seatsoption').css("display","inline-flex");
        $('#seatsoption').show();
      },function(){
        $('#seatsoption').hide();
      });

      $('#seatsoption').click(function(){
        $('#seatsoption').css("display","inline-flex");
        $('#seatsoption').show();
      });


      $('#clearselection').click(function(){
        SelectedSeats=[];
        $('.InfoSelectedSeats').html(SelectedSeats + " ");
        price=0;
        tax=0;
        total=0;
        $('.InfoPrice').html(price);
        $('.InfoTax').html(tax);
        $('.InfoTotal').html(total);
        $('.seatselected').toggleClass('seatselected');
        });


        $('.buttonforseat').click(function(){
          $('.buttonforseat').removeClass('btn-success');
          $(this).toggleClass('btn-success');
          SeatNumber=parseInt($(this).html());
          console.log(SeatNumber);
          SelectedSeats=[];
            $('.InfoSelectedSeats').html(SelectedSeats + " ");
            price=0;
            tax=0;
            total=0;
            CountSeatNumber=0;
            $('.InfoPrice').html(price);
            $('.InfoTax').html(tax);
            $('.InfoTotal').html(total);
            $('.seat').removeClass('seatselected');
        });

      $('#timeselection').click(function(){
        $('#fa-chevron-down-time').toggleClass('fa-chevron-down-transform');
        if(menu2==1){
          $('option').click(function () {
            var time=document.getElementsByClassName('option').innerHTML;
            console.log(time);
          });
          console.log("time");
          $('#time1').html(time);
          $('#dropdown-menu-time').slideDown();
          menu2=-1;
        }
        else{
          $('#dropdown-menu-time').slideUp();
          menu2=1;
        }
      });


      $('.seat').click(function(){
        var seatno = $(this).attr('id');

      if(CountSeatNumber==SeatNumber)
      {
        window.alert("Already selected "+SeatNumber+" seats");
      }
      else
      {

          $(this).toggleClass('seatselected');
            if($(this).hasClass('seatselected'))
              {
                CountSeatNumber++;
                SelectedSeats.push(seatno);
                $('.InfoSelectedSeats').html(SelectedSeats + " ");
              }

              else if((CountSeatNumber==SeatNumber)&&($(this).hasClass('seatselected'))){
                  CountSeatNumber--;
                  var index=SelectedSeats.indexOf(seatno);
                  SelectedSeats.splice(index,1);
                  $('.InfoSelectedSeats').html(SelectedSeats + " ");
              }

            else{
                CountSeatNumber--;
                var index=SelectedSeats.indexOf(seatno);
                SelectedSeats.splice(index,1);
                $('.InfoSelectedSeats').html(SelectedSeats + " ");
            }

              console.log(SelectedSeats);

                  if(($(this).hasClass('pwd1'))&&($(this).hasClass('seatselected')))
                  {
                    price=price+100;
                    tax=price*0.12;
                    total=price + tax;
                  }
                  else if($(this).hasClass('silver1')&&($(this).hasClass('seatselected')))
                  {
                    price=price+150;
                    tax=price*0.12;
                    total=price + tax;
                  }
                  else if($(this).hasClass('pwd2')&&($(this).hasClass('seatselected')))
                  {
                    price=price+190;
                    tax=price*0.12;
                    total=price + tax;
                  }
                  else if($(this).hasClass('gold1')&&($(this).hasClass('seatselected')))
                  {
                    price=price+250;
                    tax=price*0.12;
                    total=price + tax;
                  }
                  else if($(this).hasClass('platinum1')&&($(this).hasClass('seatselected')))
                  {
                    price=price+350;
                    tax=price*0.12;
                    total=price + tax;
                  }
                  else if($(this).hasClass('pwd1'))
                  {
                    price=price-100;
                    tax=price*0.12;
                    total=price + tax;
                  }
                  else if($(this).hasClass('silver1'))
                  {
                    price=price-150;
                    tax=price*0.12;
                    total=price + tax;
                  }
                  else if($(this).hasClass('pwd2'))
                  {
                    price=price-190;
                    tax=price*0.12;
                    total=price + tax;
                  }
                  else if($(this).hasClass('gold1'))
                  {
                    price=price-250;
                    tax=price*0.12;
                    total=price + tax;
                  }
                  else if($(this).hasClass('platinum1'))
                  {
                    price=price-350;
                    tax=price*0.12;
                    total=price + tax;
                  }
                  else{
                    console.log("here");
                  }




      }

          $('.InfoSelectedSeats').html(SelectedSeats + " ");

          $('.InfoPrice').html(price);
          $('.InfoTax').html(tax);
          $('.InfoTotal').html(total);
        });

        $('#ProceedToPayment').click(function(){
          if(typeof(Storage)!=="undefined"){
            sessionStorage.setItem("Seat[]",SelectedSeats);
            sessionStorage.setItem("SeatNumber",SeatNumber);
            sessionStorage.setItem("Price",price);
            sessionStorage.setItem("Tax",tax);
            sessionStorage.setItem("Total",total);
            console.log(sessionStorage.getItem("seat[]"));
            console.log(sessionStorage.getItem("tax"));
            console.log(sessionStorage.getItem("total"));
            if(CountSeatNumber<SeatNumber)
            {
              window.alert("Select your "+SeatNumber+" seats first then click proceed to payment");
            }
            else {
              location.href='/payment';
            }
          }
          else{
            console.log("not supported");
          }
        });
//here end
    });
  }


  $onInit() {
    this.$http.get('/api/paymentspoints')
      .then(response => {
        // window.bookedSeats = response.data;
        this.paymentdetails=response.data;
        this.compare();
        this.socket.syncUpdates('paymentspoint', this.paymentdetails);
        // window.disableSeats();
      });

  }

  compare(){
    console.log(this.paymentdetails+"payment11111111111");
    for (var i = 0; i < this.paymentdetails.length; i++) {
      // console.log(i);
      // console.log(this.paymentdetails[i].MovieName);
      // console.log(this.MovieTitle);
      // console.log(this.CityName);
      // console.log(this.paymentdetails[i].CityName);
      // console.log(this.TheatreName);
      // console.log(this.paymentdetails[i].Theatre);
      // console.log(this.Date);
      // console.log(this.paymentdetails[i].MovieDate);
      // console.log(this.ShowTime);
      // console.log(this.paymentdetails[i].Time);
      var date1=new Date(this.paymentdetails[i].MovieDate);
      var date2=new Date(this.Date);
      var month1=date1.getMonth();
      var month2=date2.getMonth();
      var dated1=date1.getDate();
      var dated2=date2.getDate();
      if((this.paymentdetails[i].MovieName==this.MovieTitle)&&(this.CityName==this.paymentdetails[i].CityName)&&(month1==month2)&&(dated1==dated2)&&(this.TheatreName==this.paymentdetails[i].Theatre)&&(this.ShowTime==this.paymentdetails[i].Time))
        {
          console.log(this.paymentdetails[i].Seat)
          console.log("found");

          for(var k=0;k<this.paymentdetails[i].Seat.length;k++){
            var seatt=this.paymentdetails[i].Seat;
            var res = seatt[0].split(",");
            console.log(seatt);
            console.log(res);
            for(var x=0;x<res.length;x++)
            {
                console.log('#'+res[x]);
                var idid='#'+res[x];
              $(idid).addClass("btn-danger");
              // $(idid).removeClass("btn-default");
              $(idid).attr("disabled", true);

            }

          }//

        }
    }

  }

   wheelchairseat()
   {
     alert("You have selected a wheel chair space"+"\n(remember no chair will be provided)");
   }
}

angular.module('yeomanApp')
  .component('seatbooking', {
    templateUrl: 'app/seatbooking/seatbooking.html',
    controller: SeatbookingComponent,
    controllerAs: 'seatbookingCtrl'
  });

})();
