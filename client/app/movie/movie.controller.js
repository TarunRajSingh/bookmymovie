'use strict';

(function(){

class MovieComponent {
  constructor($http,$scope,socket) {
    this.message = 'Hello';
    this.$http=$http;
    this.$scope=$scope;
    this.socket = socket;
    this.MovieData=[];
    this.MovieDetails=[];
    this.MovieYear=2017;
    this.variab=true;
    this.abc={};

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('moviespoint');
    });
  }


  $onInit() {
    console.log("welcome");
    this.$http.get('/api/moviespoints')
      .then(response => {
        this.MovieDetails = response.data;
        this.socket.syncUpdates('moviespoint', this.MovieDetails);
      });
  }



  addMovie(MovieData){
    this.$http.post('/api/moviespoints',{
      Poster:this.MovieData.cov,
      Title:this.MovieData.title,
      Year:this.MovieData.year,
      Cast:this.MovieData.cast,
      Duration:this.MovieData.dur,
      Genre:this.MovieData.gen,
      Director:this.MovieData.director,
      Id:this.MovieData.id
    });
    this.MovieName="";
    var x = document.getElementById('movieandadd');
      x.classList.toggle("movieandadd");
  }

  searchMovie(){
    {
      console.log("searching...");
      this.$http.get('https://moviesapi.com/m.php?t='+this.MovieName+'&y='+this.MovieYear+'&type=movie&r=json').then((response)=> {
        console.log(response.data[0]);
        var MovieID=response.data[0].id;
        this.$http.get('https://moviesapi.com/m.php?i='+MovieID+'&type=movie&r=json').then((response)=> {
          this.MovieData=response.data;
          console.log(response.data);
          if(this.MovieData!="undefined")
          {
            var x = document.getElementById('movieandadd');
              x.classList.toggle("movieandadd");
            console.log("done");
          }
          else{
            console.log("here4");
            this.variab=false;
          }
        });
      });
    }
  }

  del(moviespoints){
  console.log(moviespoints._id);
  this.$http.delete('/api/moviespoints/'+moviespoints._id);
  console.log(moviespoints.Title+':is Deleted from the Database');
  }

b()
{
  console.log("welcome mukesh");
}
deleteMovie(moviespoints){
  // $('#myModal').modal('show');
console.log("hello");
  $('#myModal').on('shown.bs.modal', function () {
  // alert here

  $('#modaltrue').click(function() {
    this.abc="wleomceeeewerte";

    console.log(this.abc);
  //   console.log(moviespoints._id);
  //     var a=[];
  //     a.push('10','10')
  //     {
  //       b();
  //     }
  // //  this.$http.delete('/api/moviespoints/'+moviespoints._id);
  //
  //   console.log(moviespoints.Title+':is Deleted from the Database');
  });


})
 $('#modaltrue').click(function() {
   this.abc="wleomceeeewerte";

   console.log(this.abc);
//   console.log(moviespoints._id);
//     var a=[];
//     a.push('10','10')
//     {
//       b();
//     }
// //  this.$http.delete('/api/moviespoints/'+moviespoints._id);
//
//   console.log(moviespoints.Title+':is Deleted from the Database');
 });

}


}



angular.module('yeomanApp')
  .component('movie', {
    templateUrl: 'app/movie/movie.html',
    controller: MovieComponent,
    controllerAs: 'movieCtrl'
  });

})();
