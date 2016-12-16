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
    function myAppSent(){
        console.log(
            "Your application has been submitted."
            )
    }
    }

} ());