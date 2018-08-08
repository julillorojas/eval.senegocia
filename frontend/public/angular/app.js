var app = angular.module('loginApp', [
    "loginApp.loginService"
]);

// ============================================================================
//  Main Controller
// ============================================================================
app.controller('mainCtrl', [
    '$scope',
    'LoginService',
    function ($scope, LoginService) {
        $scope.invalido = false;
        $scope.cargando = false;
        $scope.mensaje = '';
        $scope.datos = {};

        $scope.ingresar = function (datos) {
            if (datos.usuario.length < 3) {
                $scope.invalido = true;
                $scope.mensaje = 'Ingrese su usuario';
                return;
            } else if (datos.contrasena.length < 3) {
                $scope.invalido = true;
                $scope.mensaje = 'Ingrese su contraseña';
                return;
            }

            $scope.invalido = false;
            $scope.cargando = true;

            LoginService.login(datos)
                    .then(function (data) {
                        if (data.err) {
                            $scope.invalido = true;
                            $scope.cargando = false;
                            $scope.mensaje = data.mensaje;
                        } else {
                            window.location = data.url;
                        }
                    });

        };


    }
]);
