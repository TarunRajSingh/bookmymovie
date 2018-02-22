'use strict';

(function(){
  var MovieDates=[];
  var MovieTitle="";
  var Dateformovie="";
class SelectdatetheatretimeComponent {
    constructor($http,$scope,socket) {
    this.message = 'Hello';
    this.$http=$http;
    this.$scope=$scope;
    this.socket = socket;
    this.MovieDates=[];
    this.MovieTitle="";
    this.MappingDetails=[];
    this.RequireMovie=[];
    this.CityName="";


    $(document).ready(function(){

      // $("ul.nav-pills>li").click(function(){
      //   $(this).siblings("li.active").removeClass("active");
      //   $(this).addClass("active");
      //   var str=$(this).children("a")[0].innerHTML;
      //   console.log(str);
      //   sessionStorage.setItem("MovieDate",str)
      //   location.reload();
      // });

    });


    for(var i=0;i<7;i++)
    {
    var date = new Date();
    date.setDate(date.getDate() + i);
    this.MovieDates[i] = date;
    }

    this.MovieTitle=sessionStorage.getItem("MovieName");
    this.CityName=sessionStorage.getItem("CityName");


    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('addtheatrespoint');
      socket.unsyncUpdates('moviemappingspoint');
    });


    // console,log("=="+this.MappingDetails.length+"+++"this.MovieTitle);
    // for(var i=0;i<this.MappingDetails.length;i++)
    // {
    //   if(this.MovieTitle==this.MappingDetails.MovieToMap)
    //   {
    //     console.log("Movie Found");
    //     this.RequireMovie=this.MappingDetails[i];
    //     console.log(this.RequireMovie);
    //   }
    // }
// constructor ends here

  }


  $onInit() {


console.log("valufe of poster"+sessionStorage.getItem("MoviePoster"));
    // this.$http.get('/api/moviemappingspoints/'+this.MovieTitle+'/'+this.CityName+'/'+sessionStorage.getItem('MovieDate'))
    // .then(response=>{
    //   console.log(response.date);
    //   this.MovieCityData=response.date;
    //   this.socket.syncUpdates('moviemappingspoint', this.MovieCityData);
    // });



    this.$http.get('/api/moviemappingspoints')
      .then(response => {
        this.MappingDetails = response.data;
        console.log(this.MappingDetails);
        this.socket.syncUpdates('moviemappingspoint', this.MappingDetails);
      });
  }

  ShowByDate(date)
  {
    this.RequireMovie=[];
    for(var i=0;i<this.MappingDetails.length;i++)
    {
      if((this.MovieTitle==this.MappingDetails[i].MovieToMap)&&(this.CityName==this.MappingDetails[i].CityToMap))
        {
          Dateformovie=date;
          console.log("22222");
          for (var j = 0; j < this.MappingDetails[i].DateToMap.length; j++) {
            var newDate = new Date(this.MappingDetails[i].DateToMap[j]);
              var year1=newDate.getYear();
              var month1=newDate.getMonth();
              var date1=newDate.getDate();
              var year2=date.getYear();
              var month2=date.getMonth();
              var date2=date.getDate();
            if((year1==year2)&&(month1==month2)&&(date1==date2))
            {
              console.log("11111");
              // this.RequireMovie=this.MappingDetails[i];
              this.RequireMovie.push(this.MappingDetails[i]);
            }
          }
        }
    }
  }

  SelectTimeAndProceed(theatre,time)
  {
    sessionStorage.setItem("Theatre",theatre);
    sessionStorage.setItem("Time",time);
    sessionStorage.setItem("Date",Dateformovie);
    var x=sessionStorage.getItem("Date");
    var y=sessionStorage.getItem("Time");
    var z=sessionStorage.getItem("Theatre");
    location.href='/seatbooking';
  }
// ------------
}

angular.module('yeomanApp')
  .component('selectdatetheatretime', {
    templateUrl: 'app/selectdatetheatretime/selectdatetheatretime.html',
    controller: SelectdatetheatretimeComponent,
    controllerAs: 'selectdatetheatretimeCtrl'
  });

})();
