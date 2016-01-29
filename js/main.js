/*=============================================
Joonik.com written by - Jorge Luis Monroy. 2016
=============================================*/
var check;
var sumTotal;
var sum1;
var key;
var mem = 0;
var parentesisO= 1;
var idparentesis;
var lastTotal;
// Titilar el cursor
// function titilar () {
// 	clearInterval(check);
// 	check = setInterval(function(){ 
// 		$('#display span').toggleClass('no-show'); 
// 	}, 500);
// }
$(document).ready(function() { 
	// titilar();
	var num = '';
	//Asignando teclas a botones
	$("body").keydown(function( event ) {
		event.preventDefault();
		if ( event.which == 13 ) {//igual
			$('.equal').click();
		}//números
		else if ( event.which > 47 && event.which < 58) {
			$('.num' + (event.which - 48)).click();
		}//borrar último caracter
		else if ( event.which == 8) {
			$('.btn-lastChar').click();
		}
		else if ( event.which == 27) {
			$('.btn-clear').click();
		}
	});
	//Mostrar números en el display
	$('.btn-num').on('click', function() {
		// clearInterval(check);
		if ( (num.length<9) && ($('.equal').data('id') === 0) && ($('.dosPasos').data('id') === 0)) {
			num += $(this).text(); 
			//Si llega presionar el botón ".", agregas el punto y deshabilitas el botón 
			if ($(this).text() === '.') {
				if (num === '.') {
					num = '0.';
				}
				$(this).prop('disabled', true);
			}
			$('#display span').text(num);
			if ($(this).text() === '0') {
				if (num === '0') {
					num = '';
					$('#display span').text('0');
				}
			}

			// $('#display span').removeClass('no-show');
		}//En el caso que se presione un número después de haber presionado 'igual'
		if ($('.equal').data('id') === 1) {
			num = '' + $(this).text();
			$('#display span').text(num);
			$('.equal').data('id', 0);
		}
		if ($('.dosPasos').data('id') === 1) {
			num = '' + $(this).text();
			$('#display span').text(num);
			$('.dosPasos').data('id', 0);
		}
		
	});
	//Borrar display
	$('.btn-clear').on('click', function() {
		num = '';
		$('#display span').text('0');
		// titilar();
		$('.btn-point').prop('disabled',false);
		$('.cero').prop('disabled',false);
		$('.dosPasos').removeClass('operators');
		$('.equal').data('id', 0);
	});
	//Borrar ultimo número
	$('.btn-lastChar').on('click', function() {
		if(num.length>0) {
			num = num.slice(0,-1);
			$('#display span').text(num);
			if (num.length == 0) {
				$('.btn-clear').click();
			}
		}
	});
	//Botón agregar a memoria 
	$('.addM').on('click', function() {
		mem += parseFloat($('#display span').text());
		if (mem > 0 || mem < 0) {
			$('.showM').addClass('operators');
		}
		else if (mem === 0) {
			$('.showM').removeClass('operators');
		}
	});
	//Botón restar a memoria 
	$('.substractM').on('click', function() {
		mem -= parseFloat($('#display span').text());
		if (mem > 0 || mem < 0) {
			$('.showM').addClass('operators');
		}
		else if (mem === 0) {
			$('.showM').removeClass('operators');
		}
	});
	//Botón de mostrar en pantalla el valor en memoria 
	$('.showM').on('click', function() {
		$('#display span').text(mem);
		num = mem;
	});
	//Borrar valor en memoria
	$('.clearM').on('click', function() {
		mem = 0;
		$('.showM').removeClass('operators');
	});
	//Operaciones un paso 
	$('.unPaso').on('click', function() {
		$(this).addClass('operators');
		$('.equal').click();
		idparentesis = 1;
	});
	//Botón euler
	$('.euler').on('click', function() {
		num = 2.718281828459045;
		$('#display span').text(num);
	});
	//Botón pi
	$('.pi').on('click', function() {
		num = 3.141592653589793;
		$('#display span').text(num);
	});

	//Operaciones dos pasos
	$('.dosPasos').on('click', function() {
		if ($('.dosPasos').hasClass('operators')) {
			$('.equal').click();
		}
		if ( num === '' || ($('#display span').text() === '0') ) {
			sum1 = '0';
			num = "";
			$('#display span').text('0');
			$(this).addClass('operators');
			$('.dosPasos').data('id', 1);
			// clearInterval(check);
		}
		if ($('#display span').text() !== '0') {
			sum1 = num;
			num = '';
			$('#display span').text(sum1);
			$(this).addClass('operators');
		}	
	});

	//Abrir parentesis 
	$('.parentesisO').on('click', function() {
		parentesisO = $('#display span').text();
		num = '';
		if($('.btn-sumar').hasClass('operators')) {
			idparentesis = 1;
			$('.btn-sumar').removeClass('operators');
		}
		else if($('.btn-restar').hasClass('operators')) {
			idparentesis = 2;
			$('.btn-restar').removeClass('operators');
		}
		else if($('.btn-multiplicar').hasClass('operators')) {
			idparentesis = 2;
			$('.btn-multiplicar').removeClass('operators');
		}
		else if($('.btn-dividir').hasClass('operators')) {
			idparentesis = 2;
			$('.btn-dividir').removeClass('operators');
		}
	});
	//Cerrar parentesis 
	$('.parentesisC').on('click', function() {
		if ( idparentesis !== 1 ) {
			$('.equal').click();
			if (idparentesis = 1) {
				lastTotal = parseFloat(parentesisO) + parseFloat($('#display span').text());
			}
			else if (idparentesis = 2) {
				lastTotal = parseFloat(parentesisO) - parseFloat($('#display span').text());
			}
			else if (idparentesis = 3) {
				lastTotal = parseFloat(parentesisO) * parseFloat($('#display span').text());
			}
			else if (idparentesis = 4) {
				lastTotal = parseFloat(parentesisO) / parseFloat($('#display span').text());
			}
			$('#display span').text(lastTotal);
			num = '' + lastTotal;
			lastTotal = 0;
		}
		if ( idparentesis === 1 ) {
			if (idparentesis = 1) {
				lastTotal = parseFloat(parentesisO) + parseFloat($('#display span').text());
			}
			else if (idparentesis = 2) {
				lastTotal = parseFloat(parentesisO) - parseFloat($('#display span').text());
			}
			else if (idparentesis = 3) {
				lastTotal = parseFloat(parentesisO) * parseFloat($('#display span').text());
			}
			else if (idparentesis = 4) {
				lastTotal = parseFloat(parentesisO) / parseFloat($('#display span').text());
			}
			$('#display span').text(lastTotal);
			num = '' + lastTotal;
			lastTotal = 0;
			idparentesis = 0;
		}
	});


	//Obtener Resultado
	$('.equal').on('click', function() {
		if( $('.btn-sumar').hasClass('operators') ) {
			sumTotal = parseFloat(sum1) + parseFloat($('#display span').text());
		}
		if( $('.btn-restar').hasClass('operators') ) {
			sumTotal = parseFloat(sum1) - parseFloat($('#display span').text());
		}
		if( $('.btn-dividir').hasClass('operators') ) {
			sumTotal = parseFloat(sum1) / parseFloat($('#display span').text());
		}
		if( $('.btn-multiplicar').hasClass('operators') ) {
			sumTotal = parseFloat(sum1) * parseFloat($('#display span').text());
		}
		if( $('.btn-exponente').hasClass('operators') ) {
			sumTotal = Math.pow( parseFloat(sum1) , parseFloat($('#display span').text()));
		}
		if( $('.btn-raiz').hasClass('operators') ) {
			sumTotal = Math.pow( parseFloat(sum1) , 1 / parseFloat($('#display span').text()));
		}
		if( $('.unox').hasClass('operators') ) {
			sumTotal = 1 / parseFloat($('#display span').text());
		}
		if( $('.alcuadrado').hasClass('operators') ) {
			sumTotal = parseFloat($('#display span').text()) * parseFloat($('#display span').text());
		}
		if( $('.alcuadrado').hasClass('operators') ) {
			sumTotal = parseFloat($('#display span').text()) * parseFloat($('#display span').text());
		}
		if( $('.alcuadrado').hasClass('operators') ) {
			sumTotal = parseFloat($('#display span').text()) * parseFloat($('#display span').text());
		}
		if( $('.alcubo').hasClass('operators') ) {
			sumTotal = parseFloat($('#display span').text()) * parseFloat($('#display span').text()) * parseFloat($('#display span').text());
		}
		if( $('.factorial').hasClass('operators') ) {
			sumTotal = 1;
			for (var i = 1; i <= parseFloat($('#display span').text()); i++) {
				sumTotal *= i;
			}
		}
		if( $('.sen').hasClass('operators') ) {
			sumTotal = Math.sin(parseFloat($('#display span').text()));
		}
		if( $('.cos').hasClass('operators') ) {
			sumTotal = Math.cos(parseFloat($('#display span').text()));
		}
		if( $('.tan').hasClass('operators') ) {
			sumTotal = Math.tan(parseFloat($('#display span').text()));
		}
		if( $('.ln').hasClass('operators') ) {
			sumTotal = Math.log(parseFloat($('#display span').text()));
		}
		if( $('.log').hasClass('operators') ) {
			sumTotal = Math.log10(parseFloat($('#display span').text()));
		}
		if( $('.eulerx').hasClass('operators') ) {
			sumTotal = Math.pow( 2.718281828459045 , parseFloat($('#display span').text()));
		}
		if( $('.raiz2').hasClass('operators') ) {
			sumTotal = Math.pow( parseFloat($('#display span').text()) , 1 / 2);
		}
		if( $('.porcentaje').hasClass('operators') ) {
			sumTotal = parseFloat($('#display span').text()) / 100;
		}
		num = '' + sumTotal;
		$('#display span').text(sumTotal);
		$('.dosPasos').removeClass('operators');
		$('.unPaso').removeClass('operators');
		$(this).data('id', 1);
		sumTotal = 0;	
	});
});
