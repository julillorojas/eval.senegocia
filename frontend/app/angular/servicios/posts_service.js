var app = angular.module('evaluacionApp.posts', []);

app.factory('Posts', ['$http', '$q', function ($http, $q) {
        var self = {
            list: [],
            postId: 0,
            post: [],
            postAuthor: [],
            postComments: [],
            getPostsList: function () {
                var d = $q.defer();
                $http.get('https://jsonplaceholder.typicode.com/posts')
                        .success(function (respuesta) {

                            self.list = respuesta;
                            d.resolve();
                        });

                return d.promise;
            },
            getPost: function (id) {
                var d = $q.defer();
                $http.get('https://jsonplaceholder.typicode.com/posts/' + id)
                        .success(function (respuesta) {
                            self.post = respuesta;
                            d.resolve();
                        });

                return d.promise;
            },
            getPostAuthor: function (id) {
                var d = $q.defer();
                $http.get('https://jsonplaceholder.typicode.com/users/' + id)
                        .success(function (respuesta) {

                            self.postAuthor = respuesta;
                            d.resolve();
                        });

                return d.promise;
            },
            getPostComments: function () {
                var d = $q.defer();
                $http.get('https://jsonplaceholder.typicode.com//posts/1/comments')
                        .success(function (respuesta) {

                            self.postComments = respuesta;
                            d.resolve();
                        });

                return d.promise;
            }
        };
        return self;

    }
]);


