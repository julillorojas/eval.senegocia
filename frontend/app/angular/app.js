var app = angular.module( 'evaluacionApp',[ 
		'ngRoute', 'jcs-autoValidate',

		'evaluacionApp.configuracion',
		'evaluacionApp.mensajes',
		'evaluacionApp.notificaciones',
		'evaluacionApp.clientes',
		'evaluacionApp.dashboardCrtl',
		'evaluacionApp.clientesCrtl',
		]);

angular.module('jcs-autoValidate')
.run([
    'defaultErrorMessageResolver',
    function (defaultErrorMessageResolver) {
        // To change the root resource file path
        defaultErrorMessageResolver.setI18nFileRootPath('angular/lib');
        defaultErrorMessageResolver.setCulture('es-co');
    }
]);
           


app.controller('mainCtrl', ['$scope', 'Configuracion','Mensajes', 'Notificaciones', function($scope, Configuracion,Mensajes, Notificaciones){
	
	$scope.config = {};
	$scope.mensajes = Mensajes.mensajes;
	$scope.notificaciones = Notificaciones.notificaciones;

	$scope.titulo    = "";
	$scope.subtitulo = "";



	$scope.usuario = {
		nombre:"Juan Lillo"
	}




	Configuracion.cargar().then( function(){
		$scope.config = Configuracion.config;
	});


	// ================================================
	//   Funciones Globales del Scope
	// ================================================
	$scope.activar = function( menu, submenu, titulo, subtitulo ){

		$scope.titulo    = titulo;
		$scope.subtitulo = subtitulo;

		$scope.mDashboard = "";
		$scope.mClientes  = "";

		$scope[menu] = 'active';

	};



}]);

// ================================================
//   Directivas
// ================================================
app.directive('enterKey', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.enterKey);
                });

                event.preventDefault();
            }
        });
    };
});

  

// ================================================
//   Rutas
// ================================================
app.config([ '$routeProvider', function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'dashboard/dashboard.html',
			controller: 'dashboardCtrl'
		})
		.when('/clientes/:pag',{
			templateUrl: 'clientes/clientes.html',
			controller: 'clientesCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})

}]);


// ================================================
//   Filtros
// ================================================
app.filter( 'quitarletra', function(){

	return function(palabra){
		if( palabra ){
			if( palabra.length > 1)
				return palabra.substr(1);
			else
				return palabra;
		}
	};
})

.filter( 'mensajecorto', function(){

	return function(mensaje){
		if( mensaje ){
			if( mensaje.length > 35)
				return mensaje.substr(0,35) + "...";
			else
				return mensaje;
		}
	};
});







