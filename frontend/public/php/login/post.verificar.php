<?php
/**
 * Dummy admin login
 */

ini_set('display_errors', 0);

session_start();


$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request = (array) $request;


$respuesta = array(
    'err' => true,
    'mensaje' => 'Usuario/Contraseña incorrectos',
);

if (isset($request['usuario']) && isset($request['contrasena'])) { // ACTUALIZAR
    $user = addslashes($request['usuario']);
    $pass = addslashes($request['contrasena']);

    $user = strtoupper($user);

    if ($user === "ADMIN" && $pass === "admin") {

        $respuesta = array(
            'err' => false,
            'mensaje' => 'Login válido',
            'url' => '../app/'
        );

        $_SESSION['user'] = $user;
    }
}

header('Content-Type: application/json;charset=utf-8');
echo json_encode($respuesta);
