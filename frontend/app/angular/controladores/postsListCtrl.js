var app = angular.module('evaluacionApp.postsListCtrl', []);

app.controller('postsListCtrl', ['$scope', function ($scope) {

        $scope.activar('mPosts', '', 'Posts', 'Posts');

    }
]);