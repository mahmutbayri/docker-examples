<?php

$conn = new mysqli("mysql", getenv('MYSQL_USER'), getenv('MYSQL_PASSWORD'), getenv('MYSQL_DATABASE'));
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connection established. ";

echo "<hr/>";
########## CREATE TABLE ############
$createTableSql = "CREATE TABLE IF NOT EXISTS users (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if ($conn->query($createTableSql) === TRUE) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

echo "<hr/>";
########## INSERT ROW ############
$createUserSql = "INSERT INTO users (name, email) VALUES ('some name', 'some@email.com')";

if ($conn->query($createUserSql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $createUserSql . "<br>" . $conn->error;
}

echo "<hr/>";
########## SELECT ROWS ############
$selectSql = "SELECT id, name, email FROM users";
$result = $conn->query($selectSql);

if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"] . " - Name: " . $row["name"] . " " . $row["email"] . "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
