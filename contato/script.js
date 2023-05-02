function validarFormulario() {
	    var nome = document.forms["formulario"]["nome"].value;
		var telefone = document.forms["formulario"]["telefone"].value;
		var email = document.forms["formulario"]["email"].value;
			
		if (nome == "") {
			alert("Por favor, preencha o campo Nome");
			return false;
		}
			
		if (telefone == "") {
			alert("Por favor, preencha o campo Telefone");
			return false;
	    }
			
		if (email == "") {
			alert("Por favor, preencha o campo Email");
			return false;
		}
			
		return true;
}
