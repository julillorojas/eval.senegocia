var app = angular.module('evaluacionApp.postsList', []);

app.component('postsList', {
    templateUrl: 'posts/posts-list.html',
    controller: function ($scope, Posts) {

        Posts.getPostsList().then(function () {
            $scope.posts = Posts.list;
        });

    }
});

