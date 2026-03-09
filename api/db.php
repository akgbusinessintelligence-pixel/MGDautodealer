<?php
// db.php - Database connection only
// Note: Headers are handled in cors.php

$host = 'localhost';
$db_name = 'mgdautodealer_database';
$username = 'mgdautodealer_user';
$password = '4y(SOXNWON7fWTwk';

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->exec("set names utf8");
} catch (PDOException $e) {
    // If this is included in an API call, it should return JSON
    // We rely on the calling script or cors.php to have set the header
    http_response_code(500);
    echo json_encode(["error" => "Database Connection Failed", "details" => $e->getMessage()]);
    exit;
}
?>