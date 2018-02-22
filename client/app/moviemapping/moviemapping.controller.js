'use strict';

(function(){

  var HoursNow=Number;
  var MinsNow=Number;
  var MovieToMap="";
  var CityToMap="";
  var PosterToMap="";
  var TheatreToMap=[];
  var TimeIndex=0;
  var DateToMap=[];
  var ShowTimings=[];
  var Genre=[];
  var Duration=Number;
class MoviemappingComponent {
  constructor($http,$scope,socket) {
    this.message = 'Hello';
    this.$http=$http;
    this.$scope=$scope;
    this.socket = socket;
    this.TheatreDetails=[];
    this.MovieDetails=[];
    this.MappingDetails=[];
    this.MovieNameActive="";
    // false/active=blank true/inactive=true
    this.CityNameActive="";
    this.SelectTheatreActive="";
    // false=blank true/active=true
    this.SelectDateActive="";
    this.SelectTimeActive="";
    this.MovieDates=[];
    this.Poster=String;
    this.Genre=[];
    this.Duration=Number;
    for(var i=0;i<5;i++)
    {
    var date = new Date();
    date.setDate(date.getDate() + i);
    this.MovieDates[i] = date;
    }




    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('addtheatrespoint');
      socket.unsyncUpdates('moviemappingspoint');
    });


    $(document).ready(function(){

      $('#TimeSelectionMenuContent').on('click','li',function(){
        var x=$(this).text();
        var index=ShowTimings.indexOf(x);
        ShowTimings.splice(index,1);
        $(this).remove();
      });

      $('#ChooseTheatre').on('click','li',function(){
        console.log($(this).find('a').html());
        var x=$(this).find('a').html();
        $(this).toggleClass('active');
        if($(this).hasClass('active'))
        {
          TheatreToMap.push(x);
          console.log(TheatreToMap);
        }
        else{
          var index=TheatreToMap.indexOf(x);
          TheatreToMap.splice(index,1);
        }
      });

      $('#ChooseDate').on('click','li',function(){
        var x=$(this).find('div').html();
        console.log(x);
        $(this).toggleClass('active');
        if($(this).hasClass('active'))
        {
          DateToMap.push(x);
          console.log(DateToMap);
        }
        else{
          var index=DateToMap.indexOf(x);
          DateToMap.splice(index,1);
        }
      });

    });
  }

      // $('#ChooseDate').on('click','li>a>div',function(){
      //   console.log("123");
      //   var x=$(this).parent();
      //   x.toggleClass('active');
      //  if(x.hasClass('active'))
      //  {
      //    DateToMap.push($(this).html());
      //
      //  }
      //  else {
      //    var index=DateToMap.indexOf($(this).html());
      //    DateToMap.splice(index,1);
      //    console.log(DateToMap);
      //  }
      // });

    // });




  $onInit() {
    this.$http.get('/api/moviemappingspoints')
      .then(response => {
        this.MappingDetails = response.data;
        console.log(this.MappingDetails+"--------");
        this.socket.syncUpdates('moviemappingspoint', this.MappingDetails);
      });

    this.$http.get('/api/addtheatrespoints')
      .then(response => {
        this.TheatreDetails = response.data;
        console.log(this.TheatreDetails);
        this.socket.syncUpdates('addtheatrespoint', this.TheatreDetails);
      });

      this.$http.get('/api/moviespoints')
        .then(response => {
          this.MovieDetails = response.data;
          console.log(this.MovieDetails);
          this.socket.syncUpdates('moviespoint', this.MovieDetails);
        });
  }

  StartMapping()
  {
    var lengthofmoviedetails=this.MovieDetails.length;
    console.log(lengthofmoviedetails);

    for(var i=0;i<lengthofmoviedetails;i++)
    {
      console.log(i);
      if(this.MovieDetails[i].Title==this.Title)
      {
        PosterToMap=this.MovieDetails[i].Poster;
        var x=this.MovieDetails[i].Genre.split(",");
        this.Genre=x;
        var y=this.MovieDetails[i].Duration.split(",");
        this.Duration=y[0];
        console.log("5555555555");
        console.log(this.Duration);
        Genre=this.Genre;
        Duration=this.Duration;
      }
    }




    console.log("Mapping Function Called");
    MovieToMap=this.Title;
    CityToMap=this.City;
    console.log(MovieToMap);
    console.log(CityToMap);
    console.log(PosterToMap);




    if(MovieToMap==undefined)
    {
      alert("Select a movie to map");
    }
    else if(CityToMap==undefined){
      alert("Select a location to map");
    }
    else{

      this.MovieNameActive="true";
      // inactive=blank active=true
      this.CityNameActive="true";
      //
      this.SelectTheatreActive="true";
      // inactive=blank active=true
      this.SelectDateActive="true";
      this.SelectTimeActive="true";
      var d = new Date();
      HoursNow=d.getHours();
      MinsNow=d.getMinutes();
      console.log(HoursNow);
      console.log(MinsNow);
    }
  }

  // ChooseTheatre(){
  //   console.log("123")
  //   $('ul>li>a').click(function(){
  //        var x=$(this).parent();
  //        x.toggleClass('active');
  //       if(x.hasClass('active')&&x.hasClass('TheatrePills'))
  //       {
  //         TheatreToMap.push($(this).html());
  //         var myClass = $(this).attr("class");
  //         console.log(TheatreToMap);
  //         console.log("1")
  //         console.log(myClass);
  //       }
  //       else if(x.hasClass('TheatrePills')) {
  //         var index=TheatreToMap.indexOf($(this).html());
  //         TheatreToMap.splice(index,1);
  //         console.log(TheatreToMap);
  //         console.log("2")
  //         console.log(myClass);
  //       }
  //       else{
  //         var myClass = $(this).attr("class");
  //         console.log("3")
  //         console.log(myClass);
  //       }
  //   });
  // }

  // ChooseDate(){
  //   console.log("123");
  //   $('ul>li>a').click(function(){
  //        var x=$(this).parent();
  //        x.toggleClass('active');
  //       if(x.hasClass('active'))
  //       {
  //         DateToMap.push($(this).html());
  //         console.log(DateToMap);
  //       }
  //       else {
  //         var index=DateToMap.indexOf($(this).html());
  //         DateToMap.splice(index,1);
  //         console.log(DateToMap);
  //       }
  //   });
  // }

  AddTime(){
    var h=$("#Hours option:selected").val();
    var m=$("#Mins option:selected").val();
    var ap=$("#AMPM option:selected").val();
    var time1=h+m+ap;
    var time=h+':'+m+' '+ap;
    var index=ShowTimings.indexOf(time);
    if(index==undefined||index==-1){
      $("#TimeSelectionMenuContent").append('<li><a href="#">'+time+'<span class="glyphicon glyphicon-remove"></span></a></li>');
      ShowTimings.push(time);
    }
    else {
      console.log("already entered");
    }

  }


  MapMovie(){
    if(TheatreToMap.length==0)
    {
      console.log(Duration);
        alert("Select a theatre to map");
    }
    else if(DateToMap.length==0)
    {
      alert("Select a date to map");
    }
    else if(ShowTimings.length==0)
    {
      alert("Select a show timing to map");
    }
    else
    {
      console.log("all clear");
      console.log(CityToMap);
      for (var i = 0; i < TheatreToMap.length; i++)
      {
        this.$http.post('/api/moviemappingspoints',{
          PosterToMap:PosterToMap,
          MovieToMap:MovieToMap,
          CityToMap:CityToMap,
          TheatreToMap:TheatreToMap[i],
          DateToMap:DateToMap,
          ShowTimings:ShowTimings,
          Genre:Genre,
          Duration:Duration
        });
        console.log("added to database");
      }
      window.alert("added to database");

    }
  }


// -----------
}


angular.module('yeomanApp')
  .component('moviemapping', {
    templateUrl: 'app/moviemapping/moviemapping.html',
    controller: MoviemappingComponent,
    controllerAs: 'moviemappingCtrl'
  });

})();
