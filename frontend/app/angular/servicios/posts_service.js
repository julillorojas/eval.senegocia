var app = angular.module('evaluacionApp.posts', []);

app.factory('Posts', ['$http', '$q', function ($http, $q) {
        var self = {
            list: [],
            getPostsList: function () {
                var d = $q.defer();
                $http.get('https://jsonplaceholder.typicode.com/posts')
                        .success(function (respuesta) {

                            self.list = respuesta;
                            d.resolve();
                        });

                return d.promise;
            }
        };
        return self;

    }
]);


