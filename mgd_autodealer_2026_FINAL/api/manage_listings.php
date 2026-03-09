<?php
require_once 'db.php';

$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents("php://input"));

try {
    if ($method === 'POST') {
        // Create
        $sql = "INSERT INTO listings (title, price, year, bodyType, fuelType, mileage, gearbox, doors, topSpeed, engine, color, image, featured) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            $data->title,
            $data->price,
            $data->year,
            $data->bodyType,
            $data->fuelType,
            $data->mileage,
            $data->gearbox,
            $data->doors,
            $data->topSpeed,
            $data->engine,
            $data->color,
            $data->image,
            $data->featured ? 1 : 0
        ]);
        echo json_encode(["message" => "Listing created successfully", "id" => $conn->lastInsertId()]);

    } elseif ($method === 'PUT') {
        // Update
        $sql = "UPDATE listings SET title=?, price=?, year=?, bodyType=?, fuelType=?, mileage=?, gearbox=?, doors=?, topSpeed=?, engine=?, color=?, image=?, featured=? 
                WHERE id=?";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            $data->title,
            $data->price,
            $data->year,
            $data->bodyType,
            $data->fuelType,
            $data->mileage,
            $data->gearbox,
            $data->doors,
            $data->topSpeed,
            $data->engine,
            $data->color,
            $data->image,
            $data->featured ? 1 : 0,
            $data->id
        ]);
        echo json_encode(["message" => "Listing updated successfully"]);

    } elseif ($method === 'DELETE') {
        // Delete
        $id = isset($_GET['id']) ? $_GET['id'] : $data->id;
        $stmt = $conn->prepare("DELETE FROM listings WHERE id = ?");
        $stmt->execute([$id]);
        echo json_encode(["message" => "Listing deleted successfully"]);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>