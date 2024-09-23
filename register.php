<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "usc";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Recibe los datos del formulario
$username = $_POST['username'];
$email = $_POST['email'];
$documentNumber = $_POST['documentNumber'];
$nacionality = $_POST['nacionality']; // Asegúrate de que el nombre coincida
$estamento = $_POST['statement']; // Asegúrate de que este campo esté en el formulario

// Prepara la consulta SQL
$sql = "INSERT INTO usuarios (usuario, correo, numero_documento, nacionalidad, estamento) VALUES (?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $username, $email, $documentNumber, $nacionality, $estamento);

// Ejecuta la consulta
if ($stmt->execute()) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $stmt->error;
}

header("Location: index.html");
exit();
// Cierra la conexión
$stmt->close();
$conn->close();
