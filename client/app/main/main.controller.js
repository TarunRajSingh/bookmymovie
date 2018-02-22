'use strict';

(function() {
var durationfilter=[];
var genrefilter=[];
var movies=[];
  class MainController {
    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.$scope=$scope;
      this.awesomeThings = [];
      this.MovieMappedToView=[];
      this.MoviePosters=[];
      this.movies=[];
      this.TimeOfMovieMax=200;
      this.Durrr=true;
      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('moviemappingspoint');
      });


        $(document).ready(function(){
          $("#vehicleselcetion.nav li").mouseover(function(){
                	var id = $(this).attr('id');
                	switch(id){
                		case 'v1':{$('#vehicle').attr('src','assets/Images/bicycle.png');
                              break;}
                		case 'v2':{$('#vehicle').attr('src','assets/Images/motorcycle.jpg');
                              break;}
                		case 'v3':{$('#vehicle').attr('src','assets/Images/autorikshaw.png');
                              break;}
                		case 'v4':{$('#vehicle').attr('src','assets/Images/car.png');
                              break;}
                    case 'v5':{$('#vehicle').attr('src','assets/Images/suv.png');
                              break;}
                    case 'v6':{$('#vehicle').attr('src','assets/Images/suv.png');
                              break;}
                    case 'v7':{$('#vehicle').attr('src','assets/Images/suv.png');
                              break;}
                		default:{$('#vehicle').attr('src','assets/Images/bus.jpg');
                              break;}
                	}
                });

            $('.genre').click(function(){
              var x=$(this);
              console.log($(this).parent());
              $(this).parent().css("background","#F5F5F5");
              $(this).parent().css("border","1px solid #F5F5F5");
              $(this).toggleClass('genreafter');
              if($(this).hasClass('genreafter'))
              {
                $(this).parent().css("border","3px solid white");
                $(this).parent().css("background","#dcdcdc");
              }

            });

            $('.duration').click(function(){
              var durarray=$(this).html().split(" ");
              var dur=durarray[0];
              this.Durr=parseInt(dur);
              $('.duration').removeClass('genreafter');
              $('.duration').parent().css("border","3px solid #F5F5F5");
              $('.duration').parent().css("background","#F5F5F5");
              $(this).toggleClass('genreafter');
              if($(this).hasClass('genreafter'))
              {
                $(this).parent().css("border","3px solid white");
                $(this).parent().css("background","#dcdcdc");
              }
              this.Durrr=false;
              console.log("-------"+this.Durrr);
              // this.movies=movies;
              // console.log(this.movies);
              // console.log(movies);
              // for (var i = 0; i < this.movies.length; i++) {
              //   console.log(i);
              //   console.log(this.movies[i].Duration+"--original");
              //   console.log(dur+"--selected");
              //   if(this.movies[i].Duration<dur)
              //   {
              //     $(this.movies[i]).hide();
              //   }
              // }
              // if($(this).hasClass('genreafter'))
              // {
              //   $(this).parent().css("border","3px solid white");
              //   $(this).parent().css("background","#dcdcdc");
              // }
              // this.TimeOfMovieMax=dur;
              // console.log(this.TimeOfMovieMax);
              // $(this).parent().css("background","#F5F5F5");
              // $(this).parent().css("border","1px solid #F5F5F5");
              // $(this).toggleClass('durationafter');
              // if($(this).hasClass('durationafter'))
              // {
              //   durationfilter.push(dur);
              //   $(this).parent().css("border","3px solid white");
              //   $(this).parent().css("background","#dcdcdc");
              // }
              // else {
              //   var index=durationfilter.indexOf(dur);
              //   durationfilter.splice(index,1);
              // }
              //
              //
              //   if(durationfilter.length==0)
              //   {
              //     this.movies=movies;
              //   }
              //
              //     else {
              //       var highdur=1;
              //       for (var i = 0; i < movies.length; i++) {
              //         for (var j = 0; j < durationfilter.length; j++) {
              //           if(highdur<=durationfilter[j])
              //           {
              //             highdur=durationfilter[j];
              //           }
              //         }
              //       }
              //       this.movies=[];
              //       for (var i = 0; i < movies.length; i++) {
              //         if(movies[i].Duration<=highdur){
              //           console.log(movies[i].Duration);
              //           this.movies.push(movies[i]);
              //         }
              //       }
              //     }
            });



            $("#vehicleselcetion.nav li").click(function(){
                    var SeatNumber = $(this).find('a').html();
                    console.log(SeatNumber);
                    sessionStorage.setItem("SeatNumber", SeatNumber);
                  });

            $("#modalProceedButton").click(function(){
              // location.href='/payment';
              var x=sessionStorage.getItem("SeatNumber");
              console.log(x);
              sessionStorage.setItem("CityName",$("#CityName option:selected").text());
              var y=sessionStorage.getItem("CityName");
              console.log(y);
                  if(x==null)
                  {
                    window.alert("Choose some seats first then proceed");
                  }
                  // else if(city name khali hai to)
                  // {
                  //
                  // }
                  else {
                    console.log("proceed to next page");
                    location.href='/selectdatetheatretime';
                  }
            });


// document ends here
        });

        // constructor ends here-----------
    }

    $onInit() {
            this.$http.get('/api/moviemappingspoints')
          .then(response => {
            this.MoviePosters = response.data;
            this.MovieMappedToView=this.MoviePosters;
            movies=this.MoviePosters;
            this.movies=movies;
            this.socket.syncUpdates('moviemappingspoint', this.movies);
            console.log(this.movies);
            // this.AllMoviePoster=this.MoviePosters;
            // this.UniquePoster=[];
            // for(var j=this.MoviePosters.length-1;j>=0;j--){
            //   for(var k=0;k<this.UniquePoster.length;k++){
            //     if(this.UniquePoster=)
            //   }
            // }
            // for (var i = 0; i < allpics.length; i++) {
            //   console.log("here");
            //   var title=this.MoviePosters.indexOf(allpics[i].MovieToMap);
            //   var l=this.MoviePosters.length;
            //   if(l==0)
            //   {
            //     l=1
            //   }
            //   for(var j=0;j<l;j++)
            //   {
            //     console.log(allpics[i].MovieToMap);
            //     console.log(this.MoviePosters[i].MovieToMap);
            //     if(allpics[i].MovieToMap!==this.MoviePosters[i].MovieToMap)
            //     {
            //       console.log("true");
            //       this.MoviePosters.push(allpics[i]);
            //     }
            //   }
            // }

          });

      // this.$http.get('/api/things')
      //   .then(response => {
      //     this.awesomeThings = response.data;
      //     this.socket.syncUpdates('thing', this.awesomeThings);
      //   });

    }

    BookNow(x){
      var MovieName=x.MovieToMap;
      var MoviePoster=x.PosterToMap;
      sessionStorage.setItem("MovieName", MovieName);
      sessionStorage.setItem("MoviePoster", MoviePoster);
      console.log(sessionStorage.getItem("MovieName"))
      console.log(sessionStorage.getItem("MoviePoster"))
      console.log(this.MoviePosters);

    }

    // init(){
    //     {
    //         this.$http.get('/api/moviemappingspoints').then((response)=> {
    //           console.log(response.data+"init");
    //           this.movies = response.data;
    //         });
    //     }
    //   }

    // addThing() {
    //   if (this.newThing) {
    //     this.$http.post('/api/things', {
    //       name: this.newThing
    //     });
    //     this.newThing = '';
    //   }
    // }
    //
    // deleteThing(thing) {
    //   this.$http.delete('/api/things/' + thing._id);
    // }
  }

  angular.module('yeomanApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
       controller: MainController
    //  controllerAs: 'MainCtrl'
    });
})();
