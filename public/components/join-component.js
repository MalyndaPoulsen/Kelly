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
            if (user) {
                user.applied = Date.now();
                AuthService.join(user);
                console.log("Your application was submitted. Thank you.");
            }
        }
        jc.user = {
            name: '',
            email: '',
            address: '',
            phone: ''
        }
        jc.user.education = {
            degree: '',
            college: '',
            address: '',
            degree2: '',
            college2: '',
            address2: '',
        }
        jc.user.employment = {
            employer: '',
            dates: '',
            enddates: '',
            supervisor: '',
            tel: '',
            employer2: '',
            dates2: '',
            enddates2: '',
            supervisor2: '',
            tel2: '',
            employer3: '',
            dates3: '',
            enddates3: '',
            supervisor3: '',
            tel3: '',
        }
        jc.user.contact = {
            name: '',
            phone: '',
            email: '',
            relationship: '',
            name2: '',
            phone2: '',
            email2: '',
            relationship2: '',
            name3: '',
            phone3: '',
            email3: '',
            relationship3: '',
        }
        jc.user.resume = ''




    }
} ());