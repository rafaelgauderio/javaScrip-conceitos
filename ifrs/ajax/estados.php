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
			select {
				font-size: 16px;
				margin: 5px;

			}
		</style>
</head>

<body>
	<select name="estados" id="estados">
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
	</select>
</body>
</html>

<script>
	$("#estados").on("change",function() {
		var idUF = $("#estados").val();
		//alert(idUF);
			$.ajax({
			 	url:'mysqlcidades.php',
			 	type:'POST',
			 	data:{id:idUF},
			 	beforeSend: function () {
			 		$("#cidades").css({'display':'block'});
			 		$("#cidades").html("Procurando cidades...");	
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




