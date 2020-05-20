<?php
include ('../handshake/connection.php');
$ip 		= $_POST['ip'];
$questionId = $_POST['questionId'];
$output 	= '';
$query = mysqli_query($con,"SELECT * FROM clicks WHERE questionId = '$questionId' AND ip ='$ip'");
if (mysqli_num_rows($query)>0) {
	$output = 'ipExist';
}else{
	$queryInsert = mysqli_query($con,"INSERT INTO clicks(id, questionId, ip) VALUES(null, '$questionId','$ip')");
	if ($queryInsert) {
		$output ='success';
	}else{
		$output ='notInserted';
	}
}
echo $output;
?>