<?php
$user = @$_REQUEST['user'];
echo (strtolower($user) == 'rafael') ? 1 : 0;
?>
