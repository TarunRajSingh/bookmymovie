'use strict';

(function(){
var NewMappedTheatre=[];
var OldMappedTheatre=[];
var NewInfo=[];
var OldInfo=[];
var DateToMap=[];
var TimeToMap=[];
class EditmoviemappingComponent {
  constructor($http, $scope, socket) {
      this.$http = $http;
      this.$scope = $scope;
      this.socket = socket;
      this.SelectTheatreActive=false;
      this.SelectDateActive=false;
      this.Title="";
      this.City="";
      this.MappedMovie=[];
      this.TheatreDetails=[];
      this.UnMappedTheatre=[];
      this.MappedTheatre=[];
      this.OldMappedTheatre=[];
      this.NewMappedTheatre=[];
      this.MappedDate=[];
      this.UnMappedDate=[];
      this.MappedTime=[];
      this.OldInfo=[];
      this.NewInfo=[];
      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('moviemappingspoint');
      });



      $(document).ready(function(){
        $('#TimeSelectionMenuContent').on('click','li',function(){
          var x=$(this).text();
          var index=TimeToMap.indexOf(x);
          TimeToMap.splice(index,1);
          $(this).remove();
          console.log(TimeToMap);

        });

        $('#ChooseTheatre').on('click','li',function(){
          var x=$(this).find('a').html();
          $(this).toggleClass('active');
          if($(this).hasClass('active'))
          {
            var index=OldMappedTheatre.indexOf(x);
            NewInfo[index]=1;
            NewMappedTheatre.push(x);
          }
          else{
            var index=OldMappedTheatre.indexOf(x);
            NewInfo[index]=0;
            var index=NewMappedTheatre.indexOf(x);
            NewMappedTheatre.splice(index,1);
          }
          console.log(NewMappedTheatre);
          console.log(OldInfo+"OldInfo and NewInfo"+NewInfo);
        });

        $('#ChooseDate').on('click','li',function(){
          var x=$(this).find('a').html();
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
          console.log(DateToMap);
        });

        // ready function ends here
      });

      // constructor ends here
  }

  $onInit() {
    this.$http.get('/api/moviemappingspoints')
      .then(response => {
        this.MappedMovie = response.data;
        console.log(this.MappedMovie);
        this.socket.syncUpdates('moviemappingspoint', this.MappedMovie);
      });

      this.$http.get('/api/addtheatrespoints')
        .then(response => {
          this.TheatreDetails = response.data;
          console.log(this.TheatreDetails);

          this.socket.syncUpdates('addtheatrespoint', this.TheatreDetails);
        });
  }


  StartEditMapping(){

      if(this.Title==undefined)
      {
        alert("Enter the Movie Name First");
      }

      else if(this.City==undefined)
      {
        alert("Enter the City Name First");
      }
      else{
        // show hidden items
          this.SelectTheatreActive=true;
          this.SelectDateActive=true;
          this.SelectTimeActive=true;

      // ALL FOR THEATRESSSSSSS
        // finding MappedTheatre
            for (var i = 0; i < this.MappedMovie.length; i++) {
              if((this.City==this.MappedMovie[i].CityToMap)&&(this.Title==this.MappedMovie[i].MovieToMap))
              {
                this.MappedTheatre.push(this.MappedMovie[i].TheatreToMap);
              }

            }
        // finding UnMappedTheatre
          for (var i = 0; i < this.TheatreDetails.length; i++)
          {
            // console.log("*-*--*----***-*--*--*-*-*-*-*-*-*-*-");
            // console.log(this.TheatreDetails[i].City);
            // console.log(this.City);
            if((this.City==this.TheatreDetails[i].City))
            {
              this.UnMappedTheatre.push(this.TheatreDetails[i].Theatre);
            }
          }
          for (var i = 0; i < this.MappedTheatre.length; i++)
          {
            var index=this.UnMappedTheatre.indexOf(this.MappedTheatre[i]);
            this.UnMappedTheatre.splice(index,1);
          }
          for (var i = 0; i < this.MappedTheatre.length; i++) {
            NewMappedTheatre[i]=this.MappedTheatre[i];
            this.NewMappedTheatre[i]=this.MappedTheatre[i];
          }
          console.log("----------------------------- "+NewMappedTheatre);

          for (var i = 0; i < this.MappedTheatre.length; i++) {
            OldMappedTheatre.push(this.MappedTheatre[i]);
          }
          // creating info  of old and new data
          for (var i = 0; i < this.MappedTheatre.length; i++)
          {
            this.OldInfo.push(1);
          }
          console.log(this.OldInfo+"aaaaaaa");

          for (var i = 0; i < this.UnMappedTheatre.length; i++) {
            this.OldInfo.push(0);
          }
          this.NewInfo=this.OldInfo;
          console.log(this.MappedTheatre+"Mapped thetre");
          for (var i = 0; i < this.UnMappedTheatre.length; i++) {
            OldMappedTheatre.push(this.UnMappedTheatre[i]);
          }
          this.OldMappedTheatre=OldMappedTheatre;
          console.log(this.OldMappedTheatre);

        console.log(this.NewInfo+"bbb");
        for (var i = 0; i < this.NewInfo.length; i++)
        {
          NewInfo.push(this.NewInfo[i]);
          }
          for (var i = 0; i < this.OldInfo.length; i++)
          {
            OldInfo.push(this.NewInfo[i]);
            }



    // ALL FOR DATESSSSSS
    // finding mapped dates
          for (var i = 0; i < this.MappedMovie.length; i++) {
            this.MappedDate=this.MappedMovie[i].DateToMap;
          }
          console.log(this.MappedDate);
          for (var i = 0; i < this.MappedDate.length; i++) {
            DateToMap.push(this.MappedDate[i]);
          }
    // finding UnMappedDate
      // copying all
          for(var i=0;i<5;i++)
          {
          var date = new Date();
          date.setDate(date.getDate() + i);
          this.UnMappedDate[i] = date;
          }
        // deleting same
          for(var i=0;i<this.UnMappedDate.length;i++)
          {
            for (var j = 0; j < this.MappedDate.length; j++)
            {
              var date1=this.UnMappedDate[i];
              var date1date=date1.getDate();
              var date1month=date1.getMonth();
              var date1year=date1.getYear();
              var date2 = new Date(this.MappedDate[j]);
              var date2date=date2.getDate();
              var date2month=date2.getMonth();
              var date2year=date2.getYear();
              if((date1date==date2date)&&(date1month==date2month)&&(date1year==date2year))
              {
                var index=this.UnMappedDate.indexOf(this.UnMappedDate[i]);
                this.UnMappedDate.splice(index,1);
              }
            }
          }
          console.log(this.UnMappedDate);
      // ALL FOR TIMEESSSSSS
      // finding mapped times
      for (var i = 0; i < this.MappedMovie.length; i++) {
        this.MappedTime=this.MappedMovie[i].ShowTimings;
      }
      console.log(this.MappedTime);
      // input mapped time in the page
      for(var i=0;i<this.MappedTime.length;i++)
      {
        console.log("here");
        $("#TimeSelectionMenuContent").append('<li><a href="#">'+this.MappedTime[i]+'<span class="glyphicon glyphicon-remove"></span></a></li>');
      }
      for (var i = 0; i < this.MappedTime.length; i++) {
        TimeToMap.push(this.MappedTime[i]);
      }


        // last else ends here
      }


      // StartEditMapping ends here
  }

  // adding new time in the time list

  AddTime(){
    var h=$("#Hours option:selected").val();
    var m=$("#Mins option:selected").val();
    var ap=$("#AMPM option:selected").val();
    var time1=h+m+ap;
    var time=h+':'+m+' '+ap;
    var index=TimeToMap.indexOf(time);
    if(index==undefined||index==-1){
      $("#TimeSelectionMenuContent").append('<li><a href="#">'+time+'<span class="glyphicon glyphicon-remove"></span></a></li>');
      TimeToMap.push(time);
    }
    else {
      console.log("already entered");
    }
    console.log(TimeToMap);
  }


//OldInfo
//NewInfo
// TimeToMap
//DateToMap
//NewMappedTheatre
//OldMappedTheatre

  SaveEditInfo(){
    var NewPosterToMap=this.MappedMovie[0].PosterToMap;
    var NewMovieToMap=this.MappedMovie[0].MovieToMap;
    var NewCityToMap=this.MappedMovie[0].CityToMap;
    var NewDateToMap=this.MappedMovie[0].DateToMap;
    var NewTimeToMap=this.MappedMovie[0].ShowTimings;
    var NewGenre=this.MappedMovie[0].Genre;
    var NewDuration=this.MappedMovie[0].Duration;
    console.log("111");
    for (var i = 0; i < this.MappedMovie.length; i++)
     {
      if (this.Title==this.MappedMovie[i].MovieToMap)
      {
        NewPosterToMap=this.MappedMovie[i].PosterToMap;
        NewMovieToMap=this.MappedMovie[i].MovieToMap;
        NewCityToMap=this.City;
        NewGenre=this.MappedMovie[i].Genre;
        NewDuration=this.MappedMovie[i].Duration;
      }
      if ((this.Title==this.MappedMovie[i].MovieToMap)&&(this.City=this.MappedMovie[i].CityToMap))
      {
        NewDateToMap=DateToMap;
        NewTimeToMap=TimeToMap;
      }
    }
    console.log(NewPosterToMap);
    console.log(NewMovieToMap);
    console.log(NewCityToMap);
    console.log(NewDateToMap);
    console.log(NewTimeToMap);
    console.log(NewGenre);
    console.log(NewDuration);
    for (var i = 0; i < this.MappedMovie.length; i++) {
      if ((this.Title==this.MappedMovie[i].MovieToMap)&&(this.City=this.MappedMovie[i].CityToMap))
      {
        console.log(this.MappedMovie[i]._id);
        this.$http.delete('/api/moviemappingspoints/'+this.MappedMovie[i]._id);
          console.log("true");
      }
    }

                      for (var i = 0; i < NewMappedTheatre.length; i++) {
                        console.log("*-*-*-*-*-*-*-*");
                        console.log(NewMappedTheatre[i]);
                      }
                      for (var i = 0; i < NewMappedTheatre.length; i++)
                      {
                        this.$http.post('/api/moviemappingspoints',{
                          PosterToMap:NewPosterToMap,
                          MovieToMap:NewMovieToMap,
                          CityToMap:NewCityToMap,
                          TheatreToMap:NewMappedTheatre[i],
                          DateToMap:NewDateToMap,
                          ShowTimings:NewTimeToMap,
                          Genre:NewGenre,
                          Duration:NewDuration
                        });
                        console.log("added to database");
                      }
                      window.alert("added to database");

    // ============
  // for (var i = 0; i < OldInfo.length; i++) {
    // console.log(i);
    // if((OldInfo[i]==0)&&(NewInfo[i]==1))
    // {
    //   console.log("NewField");
    //
    //     this.$http.post('/api/moviemappingspoints',{
    //       PosterToMap:NewPosterToMap,
    //       MovieToMap:NewMovieToMap,
    //       CityToMap:NewCityToMap,
    //       TheatreToMap:OldMappedTheatre[i],
    //       DateToMap:NewDateToMap,
    //       ShowTimings:NewTimeToMap,
    //       Genre:NewGenre,
    //       Duration:NewDuration
    //     });
    //     console.log("added to database");
    //
    // }
    // else if ((OldInfo[i]==1)&&(NewInfo[i]==1))
    // {
    //   console.log("Updated");
    //   var idofthistheatre="";
    //   for (var i = 0; i < this.MappedMovie.length; i++)
    //   {
    //         if((this.MappedMovie[i].MovieToMap==this.Title)&&(this.MappedMovie[i].CityToMap==this.City)&&(this.MappedMovie[i].TheatreToMap==OldMappedTheatre[i]))
    //         {
    //             idofthistheatre=this.MappedMovie[i]._id;
    //         }
    //   }
    //   var NewDateToMap=DateToMap;
    //   console.log(idofthistheatre);
    //   this.$http.put('/api/moviemappingspoints/'+idofthistheatre,{
    //     PosterToMap:NewPosterToMap,
    //     MovieToMap:NewMovieToMap,
    //     CityToMap:NewCityToMap,
    //     TheatreToMap:OldMappedTheatre[i],
    //     DateToMap:NewDateToMap,
    //     ShowTimings:NewTimeToMap,
    //     Genre:NewGenre,
    //     Duration:NewDuration
    //   })
    //   .then(response=>{
    //     console.log("Theatre is successfully updated");
    //   });
    //
    // }
    // else if((OldInfo[i]==1)&&(NewInfo[i]==0))
    // {
    //   console.log("Delete");
    //
    //   var idofthistheatre="";
    //   for (var i = 0; i < this.MappedMovie.length; i++)
    //   {
    //         if((this.MappedMovie[i].MovieToMap==this.Title)&&(this.MappedMovie[i].CityToMap==this.City)&&(this.MappedMovie[i].TheatreToMap==OldMappedTheatre[i]))
    //         {
    //             idofthistheatre=this.MappedMovie[i]._id;
    //         }
    //   }
    //
    //   this.$http.delete('/api/moviemappingspoints/'+idofthistheatre);
    //
    //
    // }
    // else
    // {
    //   console.log("Nothing");
    // }
    //
    // }
    // save ends here
  }

// class ends here
}




angular.module('yeomanApp')
  .component('editmoviemapping', {
    templateUrl: 'app/editmoviemapping/editmoviemapping.html',
    controller: EditmoviemappingComponent,
    controllerAs: 'editmoviemappingCtrl'
  });

})();
