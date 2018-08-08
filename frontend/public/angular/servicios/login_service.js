var app = angular.module('loginApp.loginService', []);

app.factory('LoginService', ['$http', '$q', function ($http, $q) {

        var self = {
            login: function (datos) {
                var d = $q.defer();

                $http.post('php/login/post.verificar.php', datos)
                        .success(function (data) {

                            d.resolve(data);

                        });

                return d.promise;
            }
        };


        return self;
    }
]);


