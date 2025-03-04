<!DOCTYPE html>

<html lang="pt-br">

<head>
	<title>Select cidades por estado</title>
	<meta charset="utf-8"/>
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<?php
	$conection = new PDO("mysql:host=localhost; dbname=ajax","root","");
	?>

	<style>

		.flex-container {
			display: flex;
			justify-content: center;
			align-items: center;

		}

		select {
			font-size: 16px;
			margin: 5px;

		}

		body {
			font-family: "Comic Sans MS", "Arial";
			font-size: 14px;
			background-color: aquamarine;

		}

		h2 {
			font-size: 18px;
			background-color: #48d1cc;
			border-radius: 10px;
			padding: 10px;
			border: 2px solid black;
			background: linear-gradient(to bottom, #48d1cc 0%, #00ced1 100%);
			text-align: center;		

		}

		

		input[type=button], input[type=submit] {
			font-size: 14px;
			margin: 5px;
			border-radius: 10px;
			border:solid 2px;
			padding: 5px;
		}
		

		input[type=text]  {
			border-radius: 10px; 
			height: 25px;
			font-size: 14px;
			text-align: center;
			font-weight: bolder;						

		}

		#resultadoGet {
			border-radius: 10px; 
			height: 25px;
			font-size: 14px;
			text-align: center;
			font-weight: bolder;
			border: 1px solid black;
			margin: 5px;
			padding: 5px;
			color: red;
			
		}

		label {
			font-size: 14px;			
			padding: 5px;
			
		}	
	
		img {
			border: none;
			height: 100px;
			display: inline;
			border: 1px solid black;
			border-radius: 5px;
			
		}
		#imagem {
			max-width: 100px;
			display: inline;
			border: none;


		}
		#senha {
			display: block;
		}

		div img {
			display: inline;
			margin-left: auto;
			margin-right: auto;
			box-sizing:border-box;


		}

		fieldset {
			border-radius: 5px;
			border: 2px solid black;
		}

		#formulario {
			display: block;
		}

		

	</style>
</head>

<body>

		
	<div class="flex-container">	
	<h2>Tela de Cadastro com Ajax, mysql, php e jquery</h2>
	</div>
	<div class="flex-container">
	<form id="formulario">
		<fieldset>
			<label>Login: <input type="text" onkeyup="carregaGet(this.value)" value="Digitar nome do usuário"></label>
			<text>Foto:</text>
			<div id="imagem">			
			</div>
			
				<div id="resultadoGet"></div> 	
			

			<select name="estados" id="estados" style="display:block">
				<option>[SELECIONE SEU ESTADO - UF]</option>

				<?php
				$sql = $conection->prepare("SELECT * FROM uf ORDER BY nome ASC");
				$sql->execute();
				$selecionarEstados=$sql->fetchAll();
						//imprimindo os estados na tela			
				foreach($selecionarEstados as $estados) {
					echo '<option value="'.$estados['id'].'">'.$estados['nome']. ' - ' .$estados['sigla'].'</option>';
				}
				?>
			</select>

			<select id="cidades" style="display:block">
				<option>[SELECINE SUA CIDADE]</option>		
			</select>

		</fieldset>
		<input type="submit" value="Cadastrar">
	</form>
	
	</div>
	
</body>
</html>

<script>	

	function carregaGet (valor) {            
		
		$.get('ajaxGet.php',{user:valor}, function (data) {
			if(data==0)  {
				$("#resultadoGet").html('Nome de usuário OK');
				$("#imagem").html('Foto do usuário');				              
			} else {				
				$("#resultadoGet").html('Este usuário já está utilizado, escolha outro.');
				$("#imagem").load('ajaxGet.php',{user:valor});
				//$("#imagem").html('Carrega foto do usuário');
				
			}                 

		});
	} 

	$("#estados").on("change",function() {
		var idUF = $("#estados").val();
		//alert(idUF);
		$.ajax({
			url:'mysqlcidades.php',
			type:'GET',
			data:{id:idUF},
			beforeSend: function () {
				$("#cidades").css({'display':'block'});
				$("#cidades").html("Procurando cidades no banco de dados...");	
			},
			success: function(dados) {
				$("#cidades").css({'display':'block'});				
				$("#cidades").html(dados);
			},
			error: function(dados) {
				$("#cidades").css({'display':'block'});
				$("#cidades").html("Não foi possível carregar os dados das cidades");

			}
		});
	});
</script>