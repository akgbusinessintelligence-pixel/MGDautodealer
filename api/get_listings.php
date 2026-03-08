<?php
require_once 'db.php';

$id = isset($_GET['id']) ? $_GET['id'] : null;

try {
    if ($id) {
        $stmt = $conn->prepare("SELECT * FROM listings WHERE id = ?");
        $stmt->execute([$id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($row) {
            echo json_encode($row);
        } else {
            http_response_code(404);
            echo json_encode(["message" => "Listing not found."]);
        }
    } else {
        $stmt = $conn->prepare("SELECT * FROM listings ORDER BY created_at DESC");
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($results);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>