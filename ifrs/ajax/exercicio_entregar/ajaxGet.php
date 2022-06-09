<?php
$conexao = mysqli_connect('localhost','root','','ajax');
$user = @$_REQUEST['user'];
$sql = "SELECT * FROM usuario WHERE login LIKE '". $user . "'";

$result = mysqli_query($conexao, $sql);

$pessoas = [];
while ($linha = mysqli_fetch_assoc($result))   {
	$pessoas [] = $linha;
} 

/*
var_dump($conexao);
echo json_encode($pessoas);
echo "<br><br>";
var_dump($pessoas);
*/
for($i=0; $i<count($pessoas) ; $i++) {
	$usuario=($pessoas[$i]['login']);
	//echo $usuario;
	if(strtolower($user) == $usuario) {
		echo 1;
		//echo json_encode($pessoas);
	} else { 
		echo 0;
	}	
}
?>
