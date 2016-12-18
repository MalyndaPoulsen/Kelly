(function () {

    angular.module('gocarefinder')
        .component('applicantsComponent', {
            templateUrl: 'components/applicants-component.html',
            controller: ApplicantsController
        })

    function ApplicantsController($scope, AuthService) {
        var ac = this;
        function update() {
            $scope.$evalAsync();
        }
       

        AuthService.getApplicants(function (applicants) {
            ac.applicants = applicants;
            console.log(applicants)
            update();
              
        });
       ac.removeApplicant= function(index){
            ac.applicants.splice(index, 1);
            update();
        };
   
    }

} ())