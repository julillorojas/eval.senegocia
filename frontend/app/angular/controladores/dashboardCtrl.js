var app = angular.module('evaluacionApp.dashboardCrtl', []);

// ================================================
//   Controlador de clientes
// ================================================
app.controller('dashboardCtrl', ['$scope', function ($scope) {

        $scope.activar('mDashboard', '', 'Dashboard', 'información');

    }
]);