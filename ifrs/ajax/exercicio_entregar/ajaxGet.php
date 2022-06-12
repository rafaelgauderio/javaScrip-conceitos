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
		$conection = new PDO("mysql:host=localhost; dbname=ajax","root","");
		$sqlImagem = $conection->prepare("SELECT usuario.foto FROM usuario WHERE login='".$user."'");
		$sqlImagem->execute();
		$imagem=$sqlImagem->fetchColumn();
		echo '<img src="'.$imagem.'">';		
		
	} else { 
		echo 0;
	}	
}
?>





