<?php
include ('../handshake/connection.php');
$ip = $_POST['ip'];
$query = mysqli_query($con,"SELECT * FROM question LIMIT 5");
$output ='';
while($row = mysqli_fetch_array($query)){
	$id = $row['id'];
	$category = $row['category'];
	$content = $row['content'];
	$answer = $row['answer'];
	$output .= '
		<li class="list-qa-01-item">
			<p href="/support/faq/view/26039" class="list-qa-01-link">
				<dl class="box-qa-01">
					<dt>
						<p>'.$content .'</p>
					</dt>
					<dd>
						'.$answer.'
					</dd>
				</dl>
			</p>
	';
	
		$count 	= 0;
		$flag 	= 0;
		$query1 = mysqli_query($con,"SELECT * FROM clicks WHERE questionId = '$id'");
		if (mysqli_num_rows($query1)>0) {
			while ($row1 = mysqli_fetch_assoc($query1)) {
				$questionId = $row1['questionId'];
				$ip1 = $row1['ip'];
				$count ++;
				if ($ip == $ip1) {
					$flag = 1;
				}
			}
			if ($flag == 1) {
				$output .= '
					<button class="btn-useful clicked" type="button" id="btn-'. $id.'" data-faq-number="'. $id.'" >
						<span class="far fa-laugh-beam btn-clicked"  id="smile'.$id.'"> </span> <b id="'. $id.'">'. $count.'</b>
					</button>
				';
			}else{
				$output .= '
					<button class="btn-useful" type="button" id="btn-'. $id.'" data-faq-number="'. $id.'" >
						<span class="far fa-smile" id="smile'.$id.'"> </span> <b id="'.$id.'">'. $count.'</b>
					</button>
				';
			}
			
		}else{
			$output .= '
					<button class="btn-useful" type="button" id="btn-'. $id.'" data-faq-number="'. $id.'" >
						<span class="far fa-smile" id="smile'.$id.'"> </span> <b id="'.$id.'">'. $count.'</b>
					</button>
				';
		}
		
	$output .= '</li>';
}

echo $output;
?>	