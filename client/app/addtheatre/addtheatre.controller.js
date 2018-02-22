'use strict';

(function(){
  var TheatreDet="";

class AddtheatreComponent {
  constructor($http,$scope,socket) {
    this.message = 'Hello';
    this.$http=$http;
    this.$scope=$scope;
    this.socket = socket;
    this.TheatreDetails=[];
    this.EditTheatreDetails=[];
    this.addbuttondisable=false;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('addtheatrespoint');
    });
  }

  $onInit() {
    this.$http.get('/api/addtheatrespoints')
      .then(response => {
        this.TheatreDetails = response.data;
        this.socket.syncUpdates('addtheatrespoint', this.TheatreDetails);
      });
  }

  addTheatre(){
    this.$http.post('/api/addtheatrespoints',{
      City:this.City,
      Location:this.Location,
      Theatre:this.Theatre
    });
    window.alert(this.Theatre+" is successfully added to the database");
    this.City="";
    this.Location="";
    this.Theatre="";
    console.log("added");
  }


  init(){
      {
          this.$http.get('/api/addtheatrespoints').then((response)=> {
            console.log(response.data);
            this.TheatreDetails = response.data;
          });
      }
    }


    deleteTheatre(Theatre){
      var c=confirm("Do you want to delete "+Theatre.Theatre+" ?");
      if(c==true)
      {
        this.$http.delete('/api/addtheatrespoints/'+Theatre._id);
        window.alert(Theatre.Theatre+':is Deleted from the Database');

      }
    }


    editTheatre(Theatre){
      TheatreDet=Theatre._id;
      this.$http.get('/api/addtheatrespoints/'+Theatre._id).then((response)=> {
        console.log(response.data);
        this.EditTheatreDetails = response.data;
        this.City=this.EditTheatreDetails.City;
        this.Location=this.EditTheatreDetails.Location;
        this.Theatre=this.EditTheatreDetails.Theatre;
      });
      this.addbuttondisable=true;
    }

    updateTheatre(){
      console.log("123")
      console.log(TheatreDet);
      // this.t=Theatre;
      // console.log(this.t);
      this.$http.put('/api/addtheatrespoints/'+TheatreDet,{
        City:this.City,
        Location:this.Location,
        Theatre:this.Theatre
      })
      .then(response=>{
        alert("Theatre is successfully updated");
      });
      this.City="";
      this.Location="";
      this.Theatre="";
      this.addbuttondisable=false;
    }


}

angular.module('yeomanApp')
  .component('addtheatre', {
    templateUrl: 'app/addtheatre/addtheatre.html',
    controller: AddtheatreComponent,
    controllerAs: 'addtheatreCtrl'
  });

})();
