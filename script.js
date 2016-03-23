function hex2rgb(value){
	var decenas = value/10;
	var unidades = value - decenas;
	return decenas + unidades;
}

function reloj() {
	var tiempo = new Date();

	var hora = tiempo.getHours();
	var minuto = tiempo.getMinutes();
	var segundo = tiempo.getSeconds();

	$('#hora').innerHTML = hora;
	$('#minuto').innerHTML = minuto;
	$('#segundo').innerHTML = segundo;

	str_hora = new String(hora);
	if (str_hora.length == 1) {
		str_hora = '0' + str_hora;
	}

	str_minuto = new String(minuto);
	if (str_minuto.length == 1) {
		str_minuto = '0' + str_minuto;
	}

	str_segundo = new String(segundo);
	if (str_segundo.length == 1) {
		str_segundo = '0' + str_segundo;
	}

	$('#hora').text(str_hora);
	$('#minuto').text(str_minuto);
	$('#segundo').text(str_segundo);

	var color = 'rgb(' +  hex2rgb(hora) + ',' + hex2rgb(minuto) +  ',' + hex2rgb(segundo) + ')';
	var colorHora = 'rgb(' +  (255 - hex2rgb(hora)) + ',' + (255 - hex2rgb(minuto)) +  ',' + (255 - hex2rgb(segundo)) + ')';
	$('body').css('background-color', color);
	$('#time').css('color', colorHora);
}

function update(){
	reloj();
	setTimeout(update, 1000);
}
$(document).ready(function() {
	update();
});
