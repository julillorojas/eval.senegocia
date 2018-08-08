var app = angular.module('evaluacionApp.postContent', []);

app.component('postContent', {
    templateUrl: 'posts/post-content.html',
    controller: function ($scope, Posts) {

        var vm = this;
        Posts.getPost(Posts.postId).then(function () {

            return Posts.getPostAuthor(Posts.post.userId);
        })
                .then(function () {

                    vm.content = Posts.post;
                    vm.author = Posts.postAuthor;

                });

    },
    controllerAs: 'vm',

});