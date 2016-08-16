// ;(function(){
//     angular.module('Kelly')

//     .constant('FBREF', 'https://Kelly.firebaseio.com/')


//     .service('joinService', function(FBREF, $firebaseArray){
// var serv = this;
// var db = new Firebase(FBREF);
// serv.itemList = $firebaseArray(new Firebase(FBREF + 'items'));
// serv.member;

// serv.removeItem = function(item){
//     serv.itemList.$remove(item);
// }
// function handleDBResponse (err, authData){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(authData);

//     // this data will change for future needs
//     var userToSave = {
//         // comes from the authcontroler
//         username: ac.user.email,
//         created: Date.now()



//         // add shit
//     }
//     serv.$apply(function(){
//         serv.member = userToSave;
//     })

//     db.child('users').child(authData.uid).update(userToSave);
// }

// serv.register = function(){
//     db.createUser(ac.user, handleDBResponse);
// }
// serv.login = function(){

//     console.log(ac.user)
//     db.authWithPassword(ac.user, handleDBResponse)
// }

// serv.addItem = function(){
//     if(!serv.newItem){
//         return
//     }
//     serv.itemList.$add({
//         applicant: serv.newItem})
//         serv.newItem = ''
// }

//     })
// }())