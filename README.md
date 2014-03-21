1. Introdução

	Obrigado por baixar o plugin FormValidator para jQuery >=1.5, este validador
de formulários foi criado com o intuito de auxiliar programadores Web a criar
uma interface mais dinâmica e intuitiva durante o preenchimento de dados em
páginas da Internet.

2. Funcionalidades
	Com o FormValidator você poderá criar restrições de validação para campos de
de formulários. Em geral, a validação é aplicável a qualquer objeto que retorne
valor pela função jQuery.val() e dispare o evento onblur.
	Além disso, também são disparadas funções callbacks em três momentos
distintos durante a validação: após uma verificação positiva
[onValidated(validator)], uma verificação negativa [onFail(validator)] e, caso
a verificação de todos os campos seja positiva, antes do envio dos dados
[onSubmit(form)]. Esta última condição deverá retornar true ou false para
condicionar o envio do formulário.

3. Configurações do Plugin
	As configurações do Plugin são acessadas pela função $.validationOptions(
options) onde a variável options é, por padrão, configurada da seguinte forma:

{
	//Seletor jQuery que será utlizado para identificar os validadores
	selector:		".validator",
	
	//Executa a verificação no evento onBlur do campo do formulário
	verifyOnBlur:	true,
	
	//Executa a verificação dos campos no momento do envio do formulário
	verifyOnSubmit:	true,
	
	//Estilo aplicado ao validador quando este é verificado positivamente
	cssOnValidated:	{
		display: "none"
	},
	
	//Estilo aplicado ao validador quando este é verificado negativamente
	cssOnFail:		{
		display:  "block",
		color:    "red",
		fontSize: "x-small"
	},
	
	//Callback acionado no momento em que o validador é acionado positivamente.
	//O parâmetro validator é o objeto jQuery referente ao validador em questão.
	//Para cada validador de cada campo será chamada esta função em caso de
	//sucesso na verificação.	 
	onValidated:	function(validator){
		return;
	},
	
	//Callback acionado no momento em que o validador é acionado negativamente.
	//O parâmetro validator é o objeto jQuery referente ao validador em questão.
	//Para cada validador de cada campo será chamada esta função em caso de
	//falha na verificação.  	
	onFail:			function(validator){
		return;
	},
	
	//calback acionado quando todos os validadores são verificados
	//positivamente. A função deverá retornar true para que os dados sejam
	//enviados. O parâmetro form se refere ao objeto jQuery do formulário.
	onSubmit:		function(form){
		return true;
	}
}

4. Uso do plugin
	Um exemplo do uso básico do plugin é apresentado abaixo:
	
<html>
<head>
	<script src="/path/to/jquery"></script>
	<script type="text/javascript" src="/path/to/jquery-formvalidation"></script>
	<script>
		$(document).ready(function(){
			$("#myform").formValidation();
		});
	</script>
</head>
<body>
	<form id="myform">
		Type something:
		<input type="text" id="test" value=""/>
		<input type="submit" value="Submit" />
		<br />
		<span class="validator" style="display: none" data-element="test" data-type="required">
			Field Required!
		</span>
	</form>
</body>
</html> 	

	Ao clicar em [Submit], o plugin faz a varredura pelo formulário "#myform" em
busca de validadores (".validator"). Para cada um desses validadores, é feita a
verificação das condições de validação. No nosso caso, a validação é "required",
ou seja, obrigatório o preenchimento do campo com id igual a "test".
	As verificações são feitas com base nos atributos do validador. Os possíveis
atributos dos validadores são apresentados abaixo:

	data-type: Tipo de validação (verificar os valores possíveis abaixo)	
		required = preenchimento obrigatório
		max-value = valor máximo (ver atributo data-max)
		min-value = valor mínimo (ver atributo data-min)
		range-value = faixa de valor aceitável (atributos data-max e data-min)
		max-length = comprimento máximo (ver atributo data-max)
		min-length = comprimento mínimo (ver atributo data-min)
		range-length = comprimento máximo (atributos data-max e data-min)		
		checked = campo de checagem obrigatória (radio ou checkbox)
		equals = campo deve ser igual ao valor de referência (data-ref)
		different = campo deve ser diferente do valor de referência (data-ref)
		mask = campo deve coincidir com a máscara (atributo data-mask)
		natural = campo deve ser um número inteiro sem sinal
		integer = campo dever ser um inteiro positivo ou negativo
		float = campo deve ser qualquer número em formato decimal ou científico
		email = campo deve coincidir com o padrão email
		
	data-max: Número de referência para máximo valor ou comprimento
		Obs: Usado com data-type=max-value|max-length|range-value|range-length
		
	data-min: Número de referência para mínimo valor ou comprimento
		Obs: Usado com data-type=min-value|min-length|range-value|range-length
		
	data-ref: Valor de referência para igual ou diferente
		Obs: Usado com data-type=equals|different
			
	data-mask: Máscara de validação.
		Obs: Usado com data-type=mask

5. Contatos

	Em caso de Bugs, sugestões ou críticas, envie email para:
		alfredogaliza@gmail.com
		
	e contribua para um plugin ainda melhor.
	

Obrigado!
		
		