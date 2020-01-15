<?php

require_once __DIR__ . '/vendor/autoload.php';

$client = new MongoDB\Client("mongodb://mongo:27017");
$database = $client->selectDatabase('demo');
$collection = $database->selectCollection('beers');

$result = $collection->insertOne(['name' => 'Hinterland', 'brewery' => 'BrewDog']);
echo "Inserted with Object ID '{$result->getInsertedId()}'";

echo '<hr/>';
$allRecords = $collection->find();

foreach ($allRecords as $entry) {
    echo $entry['_id'], ': ', $entry['name'], "<br />";
}
