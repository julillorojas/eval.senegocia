var app = angular.module('evaluacionApp.postOwner', []);

app.component('postOwner', {
    templateUrl: 'posts/post-owner.html',
    controllerAs: 'vm',
    bindings: {
        author: '<'
    }
});