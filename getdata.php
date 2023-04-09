<?php
// Connect to the database
$servername = "localhost";
$username = "admin";
$password = "Ridgestar5";
$dbname = "thedc";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Retrieve the data from the database
$sql = "SELECT id, tags, title, sub_title, author, image_url, slug FROM posts";
$result = mysqli_query($conn, $sql);

// Create an array to store the data
$data = array();

while ($row = mysqli_fetch_assoc($result)) {
  // Add each row to the array
  $data[] = $row;
}

// Encode the data as JSON and output it
header('Content-Type: application/json');
echo json_encode($data);

// Close the database connection
mysqli_close($conn);
?>