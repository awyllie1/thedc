<?php
// Set the Cache-Control header to cache the content for 1 hour
header('Cache-Control: max-age=3600');

// Set the Content-Type header to indicate that the response is JSON
header('Content-Type: application/json');

// Connect to the database
$servername = "localhost";
$username = "admin";
$password = "Ridgestar5";
$dbname = "thedc";

$conn = new mysqli($servername, $username, $password, $dbname);

$articleSlug = $_GET['slug'];
$stmt = $conn->prepare("SELECT * FROM posts WHERE slug = ?");
$stmt->bind_param("s", $articleSlug);
$stmt->execute();
$result = $stmt->get_result();
$articleData = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($articleData);
?>