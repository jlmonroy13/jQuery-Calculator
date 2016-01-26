/*=============================================
Joonik.com written by - Jorge Luis Monroy. 2016
=============================================*/
var check;
var sumTotal;
var sum1;
// Titilar el cursor
function titilar () {
	clearInterval(check);
	check = setInterval(function(){ 
		$('#display span').toggleClass('no-show'); 
	}, 500);
}
$(document).ready(function() { 
	titilar();
	var num = '';
	//Mostrar números en el display
	$('.btn-num').on('click', function() {
		if (num.length<9) {
			num += $(this).text(); 
			//Si llega presionar el botón ".", agregas el punto y deshabilitas el botón 
			if ($(this).text() === '.') {
				if (num === '.') {
					num = '0.';
				}
				$(this).prop('disabled', true);
			}
			if ($(this).text() === '0') {
				if (num === '0') {
					num = '0.';
				}
				$('.btn-point').prop('disabled', true);
			}
			$('#display span').removeClass('no-show');
			$('#display span').text(num);
			clearInterval(check);
		}
	});
	//Borrar display
	$('.btn-clear').on('click', function() {
		num = '';
		$('#display span').text('|');
		titilar();
		$('.btn-point').prop('disabled',false);
		$('.cero').prop('disabled',false);
	});
	//Borrar ultimo número
	$('.btn-lastChar').on('click', function() {
		if(num.length>0) {
			num = num.slice(0,-1);
			$('#display span').text(num);
			if (num.length == 0)
				$('.btn-clear').click();
		}
	});
	//Sumar
	$('.dosPasos').on('click', function() {
		sum1 = num;
		num = '';
		$('#display span').text(sum1);
		$(this).addClass('operators');
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
		num = sumTotal;
		$('#display span').text(sumTotal);
		$('.dosPasos').removeClass('operators');	
	});
});
