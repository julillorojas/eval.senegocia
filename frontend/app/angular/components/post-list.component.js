var app = angular.module('evaluacionApp.postList', []);

app.component('postList', {
    templateUrl: 'posts/posts-list.html',
    controller: function ($scope, Posts) {

        Posts.getPostsList().then(function () {
            $scope.posts = Posts;
        });

    }
});

