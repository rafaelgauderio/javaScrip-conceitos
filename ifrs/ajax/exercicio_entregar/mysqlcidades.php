<?php

$conection = new PDO("mysql:host=localhost; dbname=ajax","root","");

$sqlCidades= $conection->prepare("SELECT * FROM cidade WHERE id_uf='".$_GET['id']. "'ORDER BY nome ASC");
$sqlCidades->execute();

$listaCidades = $sqlCidades->fetchAll();

foreach($listaCidades as $cidades) {
	echo '<option>' .$cidades['nome'].'</option>';
}

?>
