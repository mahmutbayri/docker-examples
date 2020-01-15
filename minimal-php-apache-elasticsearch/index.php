<?php

require_once __DIR__ . '/vendor/autoload.php';

use Elasticsearch\ClientBuilder;

$hosts = [
    'elasticsearch',
];
$client = ClientBuilder::create()
    ->setHosts($hosts)
    ->build();

$params = [
    'index' => 'my_index',
    'id' => 'my_id',
    'body' => ['testField' => 'abc']
];

$client->index($params);

$response = $client->get([
    'index' => 'my_index',
    'id' => 'my_id'
]);

foreach ($response['_source'] as $key => $value) {
    echo $key . ': ' . $value;
}
