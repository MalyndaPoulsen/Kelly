(function () {
    angular.module('gocarefinder')
        .component('joinComponent', {
            templateUrl: 'components/join-component.html',
            controller: JoinController
        })
    // function JoinController(AuthService) {
    //     const jc = this;
    //     jc.join = function (user) {
    //         if(user){
    //             user.applied = Date.now();
    //             AuthService.join(user);
    //         }
    //     }
    // }
        function JoinController(AuthService) {
        const jc = this;
        jc.join = function (user) {
            if(user){
                user.applied = Date.now();
                AuthService.join(user);
            }
        }
function success() {
    console.log("Your application was submitted. Thank you.")
    document.getElementById("joinForm").reset();
    }

} }());