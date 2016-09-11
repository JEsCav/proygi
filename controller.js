angular.module("MyFirstApp",[])

//para darle atributos al rootscope puedo ponerlo aqui abajo inyectarlo junto con el scope y angular me creara el objeto rootscope
//otra forma es con el metodo run
.run(function($rootScope){
//este metodo root se va a ejecutar cuando angular instancia el modulo
//y eso pasa cuando detecta la directiva ng app
//las variables en el rootscope se comparten a todos los hijos o variables del scope
$rootScope.nombre="pepe";
//es mala practica llenar de atributos o variables el rootscope para solucionar eso se usan los factories y services
})
.controller("FirstController", function($scope){
//rootscope
//todos los objetos scope heredan de rootscope y este se crea cuando nosotros instanciamos el modulo, cuando lo creamos
//cuando detecta ng app crea el rootscope
//despues al crear un ng controller va a crear un scope a partir del rootscope, es decir que
//todos los atributos que le asignemos al rootscope estaran accesibles a todos los scope, a traves de la herencia

$scope.nombre="sobreescrito";//si lo sobreescribo toma el valor del hijo osea de este
//las variables con $ tienen un valor especial en angular, basicamente son variables del framework asi como los metodos $digest etc
//en realidad aqui estoy creando otro atributo no sobreescribiendolo
setTimeout(function(){
	$scope.$apply(function(){
		$scope.nombre="sobreescritioas";//este valor tambien va a cambiar en child porque lo estoy cambiando desde el padre
	},8000);
})
})
//se pueden anidar controladores osea declarar un controlador dentro de un elemento que ya declaro otro controlador
.controller("ChildController",function($scope){
//la desventaja de hacer esto es que child ya no es independiente porque depende del padre, no siempre sera util

});