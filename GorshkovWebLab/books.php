<?php

$dbc = mysqli_connect("localhost", "root", "", "Books"); 
if (isset($_POST['done'])){ 
$b_title = mysqli_real_escape_string($dbc, trim($_POST['title'])); 
$b_author = mysqli_real_escape_string($dbc, trim($_POST['author'])); 
$b_year = mysqli_real_escape_string($dbc, trim($_POST['year'])); 
if(!empty($b_title) && !empty($b_author) && !empty($b_year)) { 
$query = "SELECT * FROM `books` WHERE `title` = '$title'"; 
$data = mysqli_query($dbc, $query); 

if(mysqli_num_rows($data) == 0) { 
$query ="INSERT INTO `books` (`title`,`author`,`year`) VALUES ('$b_title','$b_author','$b_year')"; 
mysqli_query($dbc,$query); 
mysqli_close($dbc); 

} 

} 
}

?>

<?php 
$link=mysql_connect("localhost", "root", "", "Books"); 
mysql_select_db("Books",$link); 
$sql = mysql_query("SELECT `id`, `title`, `author`, `year` FROM `books`", $link); 
while ($result = mysql_fetch_array($sql)) { 
$id_b = $result['title']; 
//echo '<li>'.$id_b.'</li>'; 

echo '<li> <a onclick='.$id_b.'.style.display='.$id_b.'.style.display=="none"?'.$id_b.'.style.display="":'.$id_b.'.style.display="none";return false; href = "#'.$id_b.'">'.$result['year']." — ".$result['title'].'</a> </li>'; 
echo '<div id ="'.$id_b.'" style="display: none">'.$result['content'].'</div>'; 

} 

?>