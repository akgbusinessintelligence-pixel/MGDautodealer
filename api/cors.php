<?php
// cors.php - Robust CORS handling for MGD Autodealer
error_reporting(0);
ini_set('display_errors', 0);

// Detect origin or fallback to *
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*';

header("Access-Control-Allow-Origin: $origin");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Global Logger
function api_log($message)
{
    $log_file = __DIR__ . '/api_debug.log';
    $time = date('Y-m-d H:i:s');
    $content = "[$time] " . (is_array($message) || is_object($message) ? json_encode($message) : $message) . "\n";
    file_put_contents($log_file, $content, FILE_APPEND);
}
?>