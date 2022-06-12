<?php
$conection = new PDO("mysql:host=localhost; dbname=ajax","root","");
$nome = $_REQUEST['nome'];
$sql = $conection->prepare("SELECT * FROM usuario WHERE login='".$nome."'");
$sql->execute();

$listaImagem=$sql->fetchAll();
	
	foreach($listaImagem as $imagens) {
	//echo ''.$imagens['foto']."";
	echo '<img src="'.$imagens['foto'].'">';	
}
?>

