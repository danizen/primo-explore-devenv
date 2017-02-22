/* globals angular */
(function(){
    'use strict';
    let app = angular.module('viewCustom', ['angularLoad']);

    app.component('prmExploreMainAfter', {
        template: `
          <div class="nlm-footer">
            <ul class="nlm-footer-links">
                <li class="nlm-first-link"><a href="https://www.nlm.nih.gov/">Library Home</a></li>
                <li class="nlm-last-link"><a href="https://nlmcatpds.nlm.nih.gov/pds?func=psr-bor-check&term=&institute=01NLM&calling-system">PSR</a></li>
            </ul>
          </div>`,
    });

    app.component('prmServiceDetailsAfter', {
        template: `<span>Hello {{nlmui}}</span>`,
        controller: 'ServiceDetailsController',
    });

    app.controller('ServiceDetailsController', function($scope) {
        window.hack_for_scope = function() {
            return $scope;
        };
        $scope.nlmui = "99838";
    });
})();