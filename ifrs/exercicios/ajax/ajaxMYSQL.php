<?php

$conexao = mysqli_connect('localhost','root','','pessoa');
@$busca = filter_var($_REQUEST['busca'], FILTER_SANITIZE_STRING);
$sql = "SELECT * FROM usuario WHERE nome LIKE '%". $busca . "%'";
//print_r($conexao);
$result = mysqli_query($conexao, $sql);

$pessoas = [];
while ($linha = mysqli_fetch_assoc($result))   {
	$pessoas [] = $linha;
} 

echo json_encode($pessoas);




?>


