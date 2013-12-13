$('.button').on('click', function (e) {
	
	var size = $('#visor-input').val().length;
	var valor = (
					e.target.id == '+' ||
					e.target.id == '-' ||
					e.target.id == '*' ||
					e.target.id == '/' 
				) ? 'op' : e.target.id;

	switch(valor){

		case 'bckspc' :
			$('#visor-input').val(
				$('#visor-input').val().substring(-size, size-1)
			);
		break;

		case 'c' :
			$('#visor-input').val('0');
		break;

		case 'op' :
			$('#visor-input').val()[size-1]
			var ultimoChar = $('#visor-input').val()[size-1]
			valor = (
						ultimoChar == '+' ||
						ultimoChar == '-' ||
						ultimoChar == '*' ||
						ultimoChar == '/'
					) ? '' : e.target.id;

			$('#visor-input').val(
				operacoes($('#visor-input').val()) + valor 
			);

		break;

		case '=' :
			$('#visor-input').val(
				operacoes($('#visor-input').val())
			);
		break;

		default :
			valor = $('#visor-input').val() == '0' ? e.target.id : $('#visor-input').val() + e.target.id;
			$('#visor-input').val(valor);
		break;
	}
});

function operacoes (v) {
	if (v.indexOf('+') >= 0) {
		var soma = v.split('+');
		var resultSoma = parseFloat(soma[0]);
		for (var i = 1; i <= soma.length - 1; i++) {
			resultSoma += parseFloat(soma[i]);
		};
		return resultSoma;
	};
	if (v.indexOf('-') >= 0) {
		var sub = v.split('-');
		var resultSub = parseFloat(sub[0]);
		for (var i = 1; i <= sub.length - 1; i++) {
			resultSub -= parseFloat(sub[i]);
		};
		return resultSub;
	};	
	if (v.indexOf('*') >= 0) {
		var mult = v.split('*');
		var resultMult = mult[0];
		for (var i = 1; i <= mult.length - 1; i++) {
			resultMult = resultMult * mult[i];
		};
		return resultMult;
	};
	if (v.indexOf('/') >= 0) {
		var div = v.split('/');
		var resultDiv = div[0];
		for (var i = 1; i <= div.length - 1; i++) {
			resultDiv = resultDiv / div[i];
		};
		return resultDiv;
	};
	return v;
}
