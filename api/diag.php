<?php
// diag.php - System Diagnostic Tool
require_once 'cors.php';

$results = [
    "php_version" => PHP_VERSION,
    "pdo_installed" => extension_loaded('pdo'),
    "pdo_mysql_installed" => extension_loaded('pdo_mysql'),
    "db_connection" => "Untested",
    "table_exists" => "Untested",
    "directory" => __DIR__
];

try {
    require_once 'db.php';
    $results["db_connection"] = "Success";

    // Check if table exists
    $stmt = $conn->prepare("SHOW TABLES LIKE 'listings'");
    $stmt->execute();
    if ($stmt->rowCount() > 0) {
        $results["table_exists"] = "Success";

        // Count listings
        $count = $conn->query("SELECT COUNT(*) FROM listings")->fetchColumn();
        $results["listing_count"] = $count;
    } else {
        $results["table_exists"] = "Failed (Table 'listings' not found)";
    }

} catch (Exception $e) {
    $results["db_connection"] = "Failed: " . $e->getMessage();
}

echo json_encode($results, JSON_PRETTY_PRINT);
?>