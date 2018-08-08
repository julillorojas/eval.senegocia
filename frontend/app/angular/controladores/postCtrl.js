var app = angular.module('evaluacionApp.postCtrl', []);


app.controller('postCtrl', ['$scope', '$routeParams', 'Posts', function ($scope, $routeParams, Posts) {

        $scope.activar('mPosts', '', 'Post', '');
        Posts.postId = $routeParams.id;
    }
]);