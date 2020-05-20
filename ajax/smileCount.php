<?php
include ('../handshake/connection.php');
$ip 		= $_POST['ip'];
$questionId = $_POST['questionId'];
$output 	= '';
$count		= 0;
$query = mysqli_query($con,"SELECT * FROM clicks WHERE questionId = '$questionId' AND ip ='$ip'");
if (mysqli_num_rows($query)>0) {
	while ($row = mysqli_fetch_assoc($query)) {
		$count ++;
	}
}else{
	
}
$output = $count;
echo $output;
?>